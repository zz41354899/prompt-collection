# AI 指示詞大全 - Useful

![AI 指示詞大全](https://img.shields.io/badge/AI-指示詞大全-blue?style=for-the-badge)
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.x-00DC82?style=for-the-badge&logo=nuxt.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

> 🚀 **打造 AI 共同學習的共學平台** - 精選實用的 AI 指示詞合集，提升工作效率與創作靈感

## ✨ 特色功能

- 🎯 **40個精選指示詞** - 覆蓋四大核心領域
- 🎨 **現代化科技感UI** - 深色主題 + 毛玻璃效果
- 📱 **完全響應式設計** - 手機、平板、桌面完美適配
- 🔍 **即時搜尋功能** - 快速找到所需指示詞
- 📋 **一鍵複製功能** - 便捷的複製體驗
- 🏷️ **智能分類系統** - 按類別快速篩選

## 📚 指示詞分類

### 🌿 設計系統 (10個)
- 按鈕設計規範制定
- Atomic Design 架構應用
- 設計系統比較分析
- UI 元件庫建立
- Figma 設計系統建構

### 💻 程式語言 (10個)
- Python 快速排序實作
- JavaScript async/await 教學
- TypeScript 類型定義
- C# JSON 檔案處理
- Go HTTP 伺服器建立

### 📊 資料整理 (10個)
- Excel 問卷資料分析
- Notion 研究筆記架構
- Google 表單整合
- Python 資料清理
- 自動化流程設計

### 🎯 求職面試 (10個)
- 自我介紹撰寫技巧
- 技術面試題準備
- 履歷優化建議
- 面試後續追蹤
- 英文面試練習

## 🛠️ 技術棧

- **框架**: [Nuxt.js 3](https://nuxt.com/) - Vue.js 全端框架
- **語言**: [TypeScript](https://www.typescriptlang.org/) - 型別安全的 JavaScript
- **樣式**: [Tailwind CSS](https://tailwindcss.com/) - 實用優先的 CSS 框架
- **部署**: 支援 Vercel、Netlify 等平台

## 🚀 快速開始

### 環境需求

```bash
Node.js >= 16.0.0
npm >= 7.0.0
```

### 安裝步驟

1. **克隆專案**
```bash
git clone https://github.com/your-username/prompt-collection.git
cd prompt-collection
```

2. **安裝依賴**
```bash
npm install
```

3. **啟動開發伺服器**
```bash
npm run dev
```

4. **開啟瀏覽器**
訪問 [http://localhost:3000](http://localhost:3000)

### 其他指令

```bash
# 建立生產版本
npm run build

# 預覽生產版本
npm run preview

# 程式碼檢查
npm run lint

# 型別檢查
npm run typecheck
```

## 📁 專案結構

```
prompt-collection/
├── components/          # Vue 組件
│   └── PromptCard.vue  # 指示詞卡片組件
├── composables/         # Vue 組合式函數
│   └── usePrompts.ts   # 指示詞資料管理
├── pages/              # 頁面文件
│   └── index.vue       # 首頁
├── assets/             # 靜態資源
│   └── css/
├── public/             # 公共文件
├── nuxt.config.ts      # Nuxt 配置
└── tailwind.config.js  # Tailwind 配置
```

## 🎨 自定義設計

### 顏色配置
```typescript
// 類別配色
const categoryColors = {
  '設計系統': 'green',   // 綠色主題
  '程式語言': 'blue',    // 藍色主題
  '資料整理': 'purple',  // 紫色主題
  '求職面試': 'pink'     // 粉色主題
}
```

### 響應式設計
- **手機版** (< 768px): 1列顯示
- **電腦版** (≥ 768px): 3列顯示

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

1. Fork 此專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📝 新增指示詞

在 `composables/usePrompts.ts` 中新增指示詞：

```typescript
{
  id: 41,
  category: "新分類",
  command: "你的指示詞內容",
  search: "搜尋關鍵字",
  description: "指示詞描述"
}
```

## 🌐 部署

### Vercel 部署

1. 推送代碼到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入專案
3. 自動部署完成

### Netlify 部署

1. 連接 GitHub 儲存庫
2. 設定建置指令: `npm run build`
3. 設定輸出目錄: `.output/public`

## 📞 聯繫我們

- 🌐 **網站**: [AI 指示詞大全](https://prompt-collection.vercel.app/)
- 💬 **Discord**: [加入社群](https://discord.gg/BNVeh4TH)

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權。

---

<div align="center">

**🌟 如果這個專案對您有幫助，請給我們一顆星星！**

Made with ❤️ by [Useful Team](https://github.com/your-username)

</div>
