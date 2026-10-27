# 消防熱顯像儀操作與評估指南

這個資料夾已可直接部署為 GitHub Pages 靜態網站，不需安裝套件或編譯。

## 上傳位置

將「這個資料夾內」的 index.html、assets 資料夾、.nojekyll、README.md 一起上傳到 GitHub 儲存庫根目錄。
不要只上傳 index.html，也不要把 ZIP 檔直接當成網站檔案上傳。
若使用現有網站儲存庫，請先確認不會覆蓋既有首頁；也可以放在獨立子資料夾，並使用該子路徑網址。

```text
儲存庫根目錄/
├── index.html
├── assets/
│   ├── style.css
│   ├── main.js
│   └── image-001.webp … image-041.webp
├── .nojekyll
└── README.md
```

## 啟用 GitHub Pages

1. 在 GitHub 儲存庫開啟 Settings → Pages。
2. Build and deployment 的 Source 選擇 Deploy from a branch。
3. Branch 選擇你上傳檔案的分支（通常是 main），資料夾選擇 /(root)，按 Save。
4. 等待部署完成，使用 Pages 頁面顯示的實際網站網址。
5. 先直接開啟網站，確認圖片、資源搜尋與比較表正常。

分支發布也可選 /docs，但必須將整套檔案放在該資料夾；不能只更改設定卻不移動檔案。

GitHub 官方說明：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 放進 Google Sites

1. 開啟 Google Sites 編輯器，右側選擇「頁面」。
2. 從新增選單選擇「整頁嵌入」。
3. 貼上 GitHub Pages「已發布的網站網址」，完成插入並發布網站。
4. 若用「插入 → 內嵌」作為一般區塊，請將嵌入框拉寬、拉高，再測試手機畫面。
5. 不要使用 github.com 的程式碼檔案網址、raw.githubusercontent.com、file:// 或 localhost 網址。
6. 確認訪客有權限開啟原始 Google Drive 文件與操作影片；Pages 本身的公開狀態不會改變 Drive 權限。

Google 官方說明：
https://support.google.com/sites/answer/90569?hl=zh-Hant

## 網頁版調整

- 41 張圖片改為獨立 WebP，保留全部原內容、圖說與來源。
- 主題可展開／收合；頁內連結會展開對應主題。
- 圖片延遲載入；不會在頁面開啟時同時播放影片。
- 頁首縮小，移除「列印／另存 PDF」與「另開完整網頁」按鈕。
- 固定導覽下方顯示目前章節、小節及章節編號，隨捲動與展開狀態更新；導覽同步標示目前位置。
- 資源搜尋、篩選、圖片放大及三機評分表保留。
- 評分與備註只存在當次頁面，重新整理後不保留；請列印保存。

## 後續更新

更新 index.html 或 assets 後，提交到發布分支，等待 Pages 重新部署。
Google Sites 使用相同網址時，通常不需重新貼網址；可重新整理查看更新。
部署網址與 Google Sites 的實際嵌入效果仍需在你的帳號與發布頁驗證。

## 來源與權利

資料來源、時間碼、原廠說明及版權署名保留於網頁各段落。
本教材包含第三方文件及影片擷圖，權利歸原權利人。
