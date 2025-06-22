<template>
  <div class="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-white/10 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
    <!-- 類別標籤和複製按鈕 -->
    <div class="flex items-start justify-between mb-4">
      <span 
        class="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-medium backdrop-blur-sm"
        :class="getCategoryColor(prompt.category)"
      >
        <span class="w-2 h-2 rounded-full mr-2" :class="getCategoryDotColor(prompt.category)"></span>
        {{ prompt.category }}
      </span>
      
      <!-- 複製按鈕 -->
      <button 
        @click="copyToClipboard"
        :class="[
          'transition-all duration-300 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1',
          isCopied 
            ? 'bg-green-600 text-white shadow-lg shadow-green-600/25' 
            : 'bg-gray-900 text-white hover:bg-black hover:shadow-lg hover:shadow-black/25'
        ]"
        :title="isCopied ? '已複製' : '複製指令'"
      >
        <svg v-if="!isCopied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>{{ isCopied ? '已複製' : '複製' }}</span>
      </button>
    </div>

    <!-- ID 編號 -->
    <div class="text-gray-500 text-xs mb-3 font-mono">
      #{{ prompt.id.toString().padStart(2, '0') }}
    </div>

    <!-- 指令標題 -->
    <h3 class="text-white font-semibold text-base mb-4 line-clamp-3 leading-relaxed">
      {{ prompt.command }}
    </h3>

    <!-- 描述 -->
    <p v-if="prompt.description" class="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
      {{ prompt.description }}
    </p>

    <!-- 熱門搜尋句 -->
    <div class="flex items-center text-gray-500 text-xs">
      <svg class="w-4 h-4 mr-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <span class="font-mono bg-gray-800/50 px-2 py-1 rounded-md border border-gray-700/50 text-gray-400">{{ prompt.search }}</span>
    </div>
    
    <!-- 裝飾性漸變邊框 -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
import type { Prompt } from '~/composables/usePrompts'

interface Props {
  prompt: Prompt
}

const props = defineProps<Props>()

// 複製成功狀態
const isCopied = ref(false)

// 根據類別返回對應的顏色樣式
const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    '設計系統': 'bg-green-500/20 text-green-300 border border-green-500/30',
    '程式語言': 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    '資料整理': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    '求職面試': 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
  }
  return colorMap[category] || 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
}

const getCategoryDotColor = (category: string) => {
  const colorMap: Record<string, string> = {
    '設計系統': 'bg-green-400',
    '程式語言': 'bg-blue-400',
    '資料整理': 'bg-purple-400',
    '求職面試': 'bg-pink-400'
  }
  return colorMap[category] || 'bg-gray-400'
}

// 複製到剪貼簿功能
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.prompt.command)
    isCopied.value = true
    // 2秒後重置狀態
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('複製失敗:', err)
    // 降級方案：使用舊的 API
    try {
      const textArea = document.createElement('textarea')
      textArea.value = props.prompt.command
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 2000)
    } catch (fallbackErr) {
      console.error('降級複製也失敗:', fallbackErr)
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 