<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <button 
      @click="toggleLocale" 
      class="absolute top-4 right-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm transition-colors duration-300 flex items-center gap-2"
    >
      <i class="fas fa-globe"></i>
      {{ currentLocaleName }}
    </button>
    <!-- Header -->
    <header class="container mx-auto max-w-[1200px] pt-20 pb-16 text-center px-4">
      <div class="flex flex-col items-center justify-center gap-3 mb-4">
        <h1 class="font-extrabold text-7xl md:text-8xl text-blue-600 dark:text-blue-400">
          {{ $t('header.title') }}
        </h1>
        <a 
          href="https://github.com/boybook/figma-tags" 
          target="_blank"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-colors duration-300 cursor-pointer"
        >
          <i class="fab fa-github"></i> {{ $t('header.openSource') }}
        </a>
      </div>
      <p class="text-base md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
        {{ $t('header.description') }}
      </p>
      <a 
        href="https://www.figma.com/community/plugin/1097223080479352701/figma-tags"
        target="_blank"
        class="inline-block bg-white hover:bg-gray-100 text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl mt-8 transition-colors duration-300"
      >
        {{ $t('header.cta') }}
      </a>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto max-w-[1200px] mb-16 md:mb-32 px-4">
      <img src="@/assets/hero.png" :alt="$t('hero.alt')" class="w-full rounded-2xl"/>
    </section>

    <!-- Features -->
    <section class="container mx-auto max-w-[1200px] mb-16 md:mb-32 md:px-12 px-4">
      <div class="flex flex-col items-center justify-center mb-4">
        <h2 class="text-5xl md:text-6xl font-black text-center mb-8 text-gray-800 dark:text-gray-100">
          {{ $t('features.heading') }}
        </h2>
        <p class="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 md:mb-16 text-center">
          {{ $t('features.description') }}
        </p>
      </div>

      <div 
        v-for="(feature, index) in features" 
        :key="index" 
        class="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 px-4 md:px-0"
        :class="(Number(index)) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <div class="flex-[4] w-full">
          <img :src="feature.image" :alt="feature.title" class="rounded-2xl w-full"/>
        </div>
        <div class="flex-[2] w-full">
          <h2 class="text-4xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-gray-100">{{ feature.title }}</h2>
          <p class="text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="container mx-auto max-w-[1200px] mb-16 md:mb-32 px-4">
      <h2 class="text-4xl font-black text-center mb-8 md:mb-16 text-gray-800 dark:text-gray-100">
        {{ $t('pricing.heading') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 md:px-0">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl">
          <h3 class="text-2xl font-bold mb-4 dark:text-gray-100">
            {{ $t('pricing.openSourceTitle') }}
          </h3>
          <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">{{ $t('pricing.openSourceFree') }}</div>
          <ul class="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
            <li v-for="(item, i) in tm('pricing.openSourceFeatures')" :key="i" class="flex items-center gap-3">
              <i class="fas fa-check text-green-500"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-blue-600 dark:bg-blue-700 p-8 rounded-2xl text-white relative">
          <div class="absolute -top-2 -right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">{{ $t('pricing.comingSoon') }}</div>
          <h3 class="text-2xl font-bold mb-4">{{ $t('pricing.cloudTitle') }}</h3>
          <div class="text-4xl font-bold mb-6">{{ $t('pricing.cloudPrice') }}</div>
          <ul class="space-y-4 text-base md:text-lg text-white">
            <li v-for="(item, i) in tm('pricing.cloudFeatures')" :key="i" class="flex items-center gap-3">
              <i class="fas fa-check"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto max-w-[1200px] mb-16 md:mb-32 md:px-8 px-8 md:px-4">
      <h2 class="text-4xl font-black text-center mb-8 md:mb-16 text-gray-800 dark:text-gray-100">
        {{ $t('testimonials.heading') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.author" 
          class="p-8 rounded-2xl bg-white dark:bg-gray-800"
        >
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">{{ testimonial.content }}</p>
          <div class="flex items-center gap-4">
            <img :src="testimonial.avatar" alt="User avatar" class="w-12 h-12 rounded-full"/>
            <div>
              <div class="font-bold text-sm md:text-base dark:text-gray-100">{{ testimonial.author }}</div>
              <div class="text-gray-500 dark:text-gray-400 text-sm md:text-base">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div class="container mx-auto max-w-[1200px] text-center text-gray-600 dark:text-gray-300">
        <div class="flex justify-center gap-8 mb-8">
          <a href="https://github.com/boybook/figma-tags" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400"><i class="fab fa-github text-2xl"></i></a>
          <a href="https://x.com/boybook1112" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400"><i class="fab fa-twitter text-2xl"></i></a>
          <a href="mailto:fangyizhou1997@qq.com" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400"><i class="fas fa-envelope text-2xl"></i></a>
        </div>
        <p class="text-sm md:text-base">{{ $t('footer.built') }}</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
interface Feature {
  title: string;
  description: string;
  image: string;
}

import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n();

const features = computed<Feature[]>(() => tm('features.list'))

const testimonials = ref([
  {
    content: 'This plugin has completely transformed how we organize our design files. It\'s a game changer!',
    author: 'Sarah Mitchell',
    role: 'Design Lead',
    avatar: 'https://ai-public.mastergo.com/ai/img_res/234ed8a2273b12f3127c013e630207be.jpg'
  },
  {
    content: 'The Notion integration is brilliant. Our whole team can now easily find design assets.',
    author: 'David Chen',
    role: 'Product Designer',
    avatar: 'https://ai-public.mastergo.com/ai/img_res/8e3077848f0bca48a06374658aea8813.jpg'
  },
  {
    content: 'Simple yet powerful. Exactly what we needed for our growing design system.',
    author: 'Emily Watson',
    role: 'UX Director',
    avatar: 'https://ai-public.mastergo.com/ai/img_res/e2f2229b2e4ef66d17461bc9e07cf4ac.jpg'
  }
]);

// 定义支持的语言配置
const supportedLocales = {
  'en': 'English',
  'zh': '中文',
  'ja': '日本語',
  'es': 'Español',
  'pt': 'Português',
} as const

// 修改为下拉菜单样式
const currentLocale = ref(locale.value)

function toggleLocale() {
  // 获取所有语言的键
  const locales = Object.keys(supportedLocales)
  // 找到当前语言的索引
  const currentIndex = locales.indexOf(currentLocale.value)
  // 计算下一个语言的索引（循环）
  const nextIndex = (currentIndex + 1) % locales.length
  // 设置新的语言
  currentLocale.value = locales[nextIndex]
  locale.value = currentLocale.value
}

// 计算当前语言显示名称
const currentLocaleName = computed(() => {
  return supportedLocales[currentLocale.value as keyof typeof supportedLocales]
})

</script>

<style>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>