<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50">
    <!-- Header -->
    <header class="container mx-auto pt-20 pb-16 text-center">
      <div class="flex flex-col items-center justify-center gap-3 mb-4">
        <h1 class="font-extrabold text-8xl text-blue-600">Figma Tags</h1>
        <a href="https://github.com/boybook/figma-tags" 
           target="_blank"
           class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-colors duration-300 cursor-pointer">
          <i class="fab fa-github"></i> Open Source
        </a>
      </div>
      <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        The ultimate tagging system for organizing your Figma files and Frames across documents
      </p>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto mb-32">
      <img :src="heroImage" alt="Figma Tags Interface" class="w-full rounded-2xl"/>
    </section>

    <!-- Features -->
    <section class="container mx-auto mb-32">
      <div class="flex flex-col items-center justify-center mb-4">
        <h2 class="text-6xl font-black text-center mb-8 text-gray-800">How does it help?</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-16 text-center">
          Figma Tags is a powerful tool that helps you manage your Figma files and frames across documents. It allows you to tag frames with custom tags, and then use these tags to filter and search for frames across documents.
        </p>
      </div>

      <div v-for="(feature, index) in features" :key="index" 
           class="flex items-center gap-16 mb-24" 
           :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
        <div class="flex-[3]">
          <img :src="feature.image" :alt="feature.title" class="rounded-2xl w-full"/>
        </div>
        <div class="flex-[2]">
          <h2 class="text-4xl font-extrabold mb-6 text-gray-800">{{ feature.title }}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="container mx-auto mb-32">
      <h2 class="text-4xl font-black text-center mb-16 text-gray-800">Simple Pricing</h2>
      <div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white p-8 rounded-2xl">
          <h3 class="text-2xl font-bold mb-4">Open Source</h3>
          <div class="text-4xl font-bold text-blue-600 mb-6">Free</div>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <i class="fas fa-check text-green-500"></i>
              <span>Local storage support</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-check text-green-500"></i>
              <span>Basic tagging features</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-check text-green-500"></i>
              <span>Community support</span>
            </li>
          </ul>
        </div>
        <div class="bg-blue-600 p-8 rounded-2xl text-white relative">
          <div class="absolute -top-2 -right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">Coming soon</div>
          <h3 class="text-2xl font-bold mb-4">Cloud Storage</h3>
          <div class="text-4xl font-bold mb-6">$9/mo</div>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <i class="fas fa-check"></i>
              <span>Everything in Free</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-check"></i>
              <span>Cloud sync across devices</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-check"></i>
              <span>Priority support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto mb-32">
      <h2 class="text-4xl font-black text-center mb-16">What Users Say</h2>
      <div class="grid grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.author" 
             class="p-8 rounded-2xl bg-white shadow-sm">
          <p class="text-lg text-gray-600 mb-6">{{ testimonial.content }}</p>
          <div class="flex items-center gap-4">
            <img :src="testimonial.avatar" alt="User avatar" class="w-12 h-12 rounded-full"/>
            <div>
              <div class="font-bold">{{ testimonial.author }}</div>
              <div class="text-gray-500">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 py-16">
      <div class="container mx-auto text-center text-gray-600">
        <div class="flex justify-center gap-8 mb-8">
          <a href="#" class="hover:text-blue-600"><i class="fab fa-github text-2xl"></i></a>
          <a href="#" class="hover:text-blue-600"><i class="fab fa-twitter text-2xl"></i></a>
          <a href="#" class="hover:text-blue-600"><i class="fas fa-envelope text-2xl"></i></a>
        </div>
        <p>© 2024 Figma Tags. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const heroImage = '/src/assets/hero.png';

const features = ref([
  {
    title: 'Frame-Level Management',
    description: 'Efficiently manage your design at the frame level, making it easy to navigate through large design files with precision and speed.',
    image: 'https://ai-public.mastergo.com/ai/img_res/3be226f4e8e328a0773ee7c7d7e383d7.jpg'
  },
  {
    title: 'Cross-Document Organization',
    description: 'Seamlessly manage frames across multiple documents in a unified view, streamlining your workflow and improving productivity.',
    image: 'https://ai-public.mastergo.com/ai/img_res/a6c463c94be663a7f2983d2d2179cab5.jpg'
  },
  {
    title: 'Team Collaboration',
    description: 'Connect with Notion database to enable seamless collaboration between designers and non-designers, making design assets easily accessible.',
    image: 'https://ai-public.mastergo.com/ai/img_res/8deebe546dd83e3b44533a0af9d8b161.jpg'
  }
]);

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
</script>

<style>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

