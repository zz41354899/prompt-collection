export interface Prompt {
  id: number
  category: string
  command: string
  search: string
  description?: string
}

export const usePrompts = () => {
  const prompts: Prompt[] = [
    // 設計系統 (Design System) - 10個
    {
      id: 1,
      category: "設計系統",
      command: "幫我制定一份按鈕元件的設計規範，包含尺寸、色彩、狀態、使用情境",
      search: "按鈕設計系統怎麼寫",
      description: "制定完整的按鈕設計規範與使用指南"
    },
    {
      id: 2,
      category: "設計系統",
      command: "將 Atomic Design 架構應用在建立設計系統中，請舉例說明五個層級",
      search: "atomic design 實例",
      description: "使用原子設計理論建立設計系統結構"
    },
    {
      id: 3,
      category: "設計系統",
      command: "比較 Material Design、Fluent Design、Human Interface Guideline 的設計理念與特異",
      search: "設計系統比較",
      description: "分析三大主流設計系統的差異與特色"
    },
    {
      id: 4,
      category: "設計系統",
      command: "幫我建立一份設計系統元件庫的分類表，包括常用 UI 元件",
      search: "設計系統有哪些元件",
      description: "建立完整的設計系統元件清單與分類"
    },
    {
      id: 5,
      category: "設計系統",
      command: "我是設計師，請幫我撰寫設計系統導入提案給主管看",
      search: "設計系統導入怎麼說服主管",
      description: "撰寫設計系統導入的商業提案"
    },
    {
      id: 6,
      category: "設計系統",
      command: "請給我一份設計系統文件摘要範例，包含色彩、字體、Spacing 定義",
      search: "設計系統 document 範例",
      description: "建立設計系統文件的基本架構"
    },
    {
      id: 7,
      category: "設計系統",
      command: "幫我制定一份設計系統色彩指南，包含品牌色、輔助色、語意色",
      search: "UI 色彩規範怎麼寫",
      description: "制定完整的色彩使用規範與指南"
    },
    {
      id: 8,
      category: "設計系統",
      command: "我要做一份 Figma 設計系統，請幫我規劃 Token → 元件的建構流程",
      search: "Figma design token 教學",
      description: "規劃 Figma 設計系統的建構流程"
    },
    {
      id: 9,
      category: "設計系統",
      command: "請舉例 5 種設計系統常見組織與改良方式",
      search: "設計系統常犯錯誤",
      description: "了解設計系統的最佳實踐與改進方法"
    },
    {
      id: 10,
      category: "設計系統",
      command: "幫我用表格列出設計系統導入過程中的步驟與注意事項",
      search: "設計系統導入流程",
      description: "制定設計系統導入的完整步驟清單"
    },

    // 程式語言 (Programming Languages) - 10個
    {
      id: 11,
      category: "程式語言",
      command: "用 Python 寫一個快速排序 (QuickSort) 演算法並加上詳解",
      search: "Python 排序演算法範例",
      description: "實作並解釋快速排序演算法"
    },
    {
      id: 12,
      category: "程式語言",
      command: "解釋 JavaScript 中 async/await 的使用方式，並提供實用範例",
      search: "async await 教學",
      description: "深入理解 JavaScript 異步程式設計"
    },
    {
      id: 13,
      category: "程式語言",
      command: "請用 JavaScript 寫一段程式碼判斷字串是否為迴文",
      search: "判斷回文 JavaScript",
      description: "實作字串迴文判斷演算法"
    },
    {
      id: 14,
      category: "程式語言",
      command: "幫我用 TypeScript 寫一個 TodoList 的類別與介面定義",
      search: "TypeScript TodoList 範例",
      description: "使用 TypeScript 建立型別安全的待辦清單"
    },
    {
      id: 15,
      category: "程式語言",
      command: "用 C# 撰寫一個從 JSON 檔案讀取並顯示內容的程式",
      search: "C# 讀取 JSON 檔",
      description: "在 C# 中處理 JSON 資料的讀取操作"
    },
    {
      id: 16,
      category: "程式語言",
      command: "Python 如何使用 try/except 處理例外，請搭配範例說明",
      search: "Python 例外處理",
      description: "學習 Python 的錯誤處理機制"
    },
    {
      id: 17,
      category: "程式語言",
      command: "請用 JavaScript 示範如何使用 debounce 與 throttle 控制事件頻率",
      search: "debounce throttle 差異",
      description: "實作事件頻率控制的最佳實踐"
    },
    {
      id: 18,
      category: "程式語言",
      command: "用 Go 寫一個 HTTP server 並顯示 hello world",
      search: "Go 建立 http server",
      description: "使用 Go 語言建立簡單的網頁伺服器"
    },
    {
      id: 19,
      category: "程式語言",
      command: "說明 Java 中 ArrayList 與 LinkedList 的差異並附範例",
      search: "Java List 差異比較",
      description: "比較 Java 中不同 List 實作的特性"
    },
    {
      id: 20,
      category: "程式語言",
      command: "請用 Python 寫作一個 RESTful API 並回傳 JSON",
      search: "Python API 實作方式",
      description: "使用 Python 開發 RESTful API 服務"
    },

    // 資料整理 (Data Organization) - 10個
    {
      id: 21,
      category: "資料整理",
      command: "幫我設計一個 Excel 範本，能整理問卷收集資料並自動統計",
      search: "Excel 問卷整理教學",
      description: "建立自動化的問卷資料分析範本"
    },
    {
      id: 22,
      category: "資料整理",
      command: "用 Notion 幫我建立一份研究筆記架構，含分類、標籤與狀態欄",
      search: "Notion 資料整理模板",
      description: "設計 Notion 研究筆記的組織架構"
    },
    {
      id: 23,
      category: "資料整理",
      command: "我有多個 Google 表單回覆，要如何整合與分析",
      search: "Google 表單合併分析",
      description: "整合多個 Google 表單的回應資料"
    },
    {
      id: 24,
      category: "資料整理",
      command: "Python 有什麼函式庫可以協助清理資料，請舉例說明",
      search: "Python 資料清理方法",
      description: "介紹 Python 資料清理的工具與方法"
    },
    {
      id: 25,
      category: "資料整理",
      command: "幫我規劃一份 Google Sheets 的資料整理自動化流程",
      search: "Google Sheet 自動整理",
      description: "設計 Google Sheets 的自動化工作流程"
    },
    {
      id: 26,
      category: "資料整理",
      command: "請教我如何使用 Excel 的樞紐分析表來分組統計",
      search: "Excel 樞紐分析表怎麼用",
      description: "學習 Excel 樞紐分析表的使用技巧"
    },
    {
      id: 27,
      category: "資料整理",
      command: "我想用 Notion 建立一份專案追蹤資料庫，請詳細規畫位與分類",
      search: "Notion 專案追蹤表格",
      description: "建立 Notion 專案管理資料庫"
    },
    {
      id: 28,
      category: "資料整理",
      command: "有沒有推薦的 Notion template 可以整理讀書筆記",
      search: "Notion 筆記整理推薦",
      description: "推薦適合讀書筆記的 Notion 範本"
    },
    {
      id: 29,
      category: "資料整理",
      command: "如何將多個 Excel 工作簿的資料整合到一張表",
      search: "多檔 Excel 合併",
      description: "學習合併多個 Excel 檔案的方法"
    },
    {
      id: 30,
      category: "資料整理",
      command: "Python pandas 怎麼把 Excel 轉成 CSV 並只要下需要的欄位",
      search: "pandas Excel 轉 CSV",
      description: "使用 pandas 進行資料格式轉換與篩選"
    },

    // 求職面試 (Job Interview & Resume) - 10個
    {
      id: 31,
      category: "求職面試",
      command: "幫我撰寫一段自我介紹，針對前端工程師職位設計",
      search: "面試自我介紹怎麼說",
      description: "為特定職位量身打造自我介紹內容"
    },
    {
      id: 32,
      category: "求職面試",
      command: "前端工程師常見的技術面試題有哪些，請列出並解釋答案",
      search: "前端面試題庫",
      description: "整理前端工程師技術面試常見問題"
    },
    {
      id: 33,
      category: "求職面試",
      command: "面試官問「你的缺點是什麼」時，該怎麼回答比較得體？",
      search: "面試回答缺點技巧",
      description: "學習面試中回答缺點問題的策略"
    },
    {
      id: 34,
      category: "求職面試",
      command: "請幫我模擬一場針對 UI 設計師的行為面試情境問答",
      search: "UI 行為面試題目",
      description: "模擬 UI 設計師的行為面試問答"
    },
    {
      id: 35,
      category: "求職面試",
      command: "幫我寫一封面試後的感謝信，語氣專業但親切",
      search: "面試後感謝信範例",
      description: "撰寫專業的面試後續追蹤信件"
    },
    {
      id: 36,
      category: "求職面試",
      command: "我要參加跨國企業的遠端面試，有哪些要注意的細節？",
      search: "遠端面試技巧",
      description: "掌握遠端面試的成功要訣"
    },
    {
      id: 37,
      category: "求職面試",
      command: "請幫我準備 5 個可以反問面試官的好問題",
      search: "面試官反問問題建議",
      description: "準備優質的面試反問問題清單"
    },
    {
      id: 38,
      category: "求職面試",
      command: "幫我重寫履歷開發經歷段落，適合產品經理職位",
      search: "履歷撰寫怎麼寫",
      description: "針對產品經理職位優化履歷內容"
    },
    {
      id: 39,
      category: "求職面試",
      command: "幫我模擬一段針對新鮮人的英文面試問答",
      search: "新鮮人英文面試練習",
      description: "練習新鮮人英文面試對話"
    },
    {
      id: 40,
      category: "求職面試",
      command: "想轉職成資料分析師，請幫我列出應準備的面試重點與題型",
      search: "資料分析師面試題庫",
      description: "整理資料分析師轉職面試準備重點"
    }
  ]

  // 根據類別分組
  const getPromptsByCategory = (category: string) => {
    return prompts.filter(prompt => prompt.category === category)
  }

  // 獲取所有類別
  const getCategories = () => {
    return [...new Set(prompts.map(prompt => prompt.category))]
  }

  // 搜尋提示詞
  const searchPrompts = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return prompts.filter(prompt => 
      prompt.command.toLowerCase().includes(lowerQuery) ||
      prompt.search.toLowerCase().includes(lowerQuery) ||
      prompt.category.toLowerCase().includes(lowerQuery) ||
      prompt.description?.toLowerCase().includes(lowerQuery)
    )
  }

  return {
    prompts,
    getPromptsByCategory,
    getCategories,
    searchPrompts
  }
} 