<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <!-- Header 導航 -->
    <header class="relative bg-black/10 backdrop-blur-sm border-b border-gray-700/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="text-white font-bold text-xl">
              Useful
            </div>
            <div class="text-gray-400 text-sm hidden sm:block">
              打造 AI 共同學習的共學平台
            </div>
          </div>
          
          <!-- Discord 連結 -->
          <div>
            <a 
              href="https://discord.gg/BNVeh4TH" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
              title="加入 Discord 社群"
            >
              <!-- Discord Icon -->
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span class="hidden sm:inline">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- 頁面標題 -->
    <div class="relative bg-black/20 backdrop-blur-sm border-b border-gray-700/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h1 class="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            ChatGPT 指示詞大全
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            精選實用的 ChatGPT 指示詞，提升工作效率與創作靈感
          </p>
          
          <!-- 搜尋框 -->
          <div class="max-w-md mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                class="block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                placeholder="搜尋指示詞..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- 類別篩選器 -->
      <div class="mb-12">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            @click="selectedCategory = ''"
            :class="[
              'px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm',
              selectedCategory === '' 
                ? 'bg-white/20 text-white border border-white/30 shadow-lg shadow-white/10' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-600/30 hover:border-gray-500/50'
            ]"
          >
            全部 ({{ filteredPrompts.length }})
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm',
              selectedCategory === category 
                ? getCategoryButtonStyle(category)
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-600/30 hover:border-gray-500/50'
            ]"
          >
            {{ category }} ({{ getPromptsByCategory(category).length }})
          </button>
        </div>
      </div>

      <!-- 提示詞卡片網格 -->
      <div 
        v-if="filteredPrompts.length > 0" 
        class="prompt-grid"
      >
        <PromptCard
          v-for="prompt in filteredPrompts"
          :key="prompt.id"
          :prompt="prompt"
        />
      </div>

      <!-- 無結果提示 -->
      <div v-else class="text-center py-16">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-gray-700/50">
          <svg class="mx-auto h-16 w-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.072-2.329C7.788 11.07 9.745 10 12 10c2.255 0 4.212 1.07 6.072 2.671z"></path>
          </svg>
          <h3 class="text-xl font-medium text-white mb-2">找不到相關的指示詞</h3>
          <p class="text-gray-400">
            嘗試使用不同的關鍵字或清除搜尋條件
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-neutral-950 text-neutral-300 py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between">
          <!-- 左側內容 -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">Useful</h3>
            <p class="text-neutral-400">打造 AI 共同學習的共學平台</p>
          </div>
        </div>
        
        <!-- 版權資訊 -->
        <div class="text-center text-sm text-neutral-500 mt-10">
          © 2025 Useful. 保留所有權利。
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePrompts } from '~/composables/usePrompts'

// 使用 composable
const { prompts, getPromptsByCategory, getCategories, searchPrompts } = usePrompts()

// 響應式狀態
const searchQuery = ref('')
const selectedCategory = ref('')

// 計算屬性
const categories = computed(() => getCategories())

const filteredPrompts = computed(() => {
  let result = prompts

  // 根據搜尋查詢篩選
  if (searchQuery.value.trim()) {
    result = searchPrompts(searchQuery.value.trim())
  }

  // 根據選中的類別篩選
  if (selectedCategory.value) {
    result = result.filter(prompt => prompt.category === selectedCategory.value)
  }

  return result
})

// 根據類別返回按鈕樣式
const getCategoryButtonStyle = (category: string) => {
  const styleMap: Record<string, string> = {
    '設計系統': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 shadow-lg shadow-green-500/10',
    '程式語言': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/10',
    '資料整理': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/10',
    '求職面試': 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-300 border border-pink-500/30 shadow-lg shadow-pink-500/10'
  }
  return styleMap[category] || 'bg-white/20 text-white border border-white/30'
}

// 設定頁面元資料
useSeoMeta({
  title: 'Useful - 精選實用指示詞合集',
  description: '精選實用的 ChatGPT指示詞，涵蓋設計系統、程式語言、資料整理、求職面試四大類別，提升您的工作效率與創作靈感。',
  ogTitle: 'Useful',
  ogDescription: '精選實用的 ChatGPT指示詞，涵蓋設計系統、程式語言、資料整理、求職面試四大類別',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.prompt-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 768px) {
  .prompt-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style> 