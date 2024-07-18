# Next.js全端履歷
前後端皆為Next.js 14製作，佈署於Vercel，
網址為:https://next-portfolio-phi-black.vercel.app/

## 啟動方式
於根目錄創建一個.env檔案，內容如下
```
MONGO = mongodb://127.0.0.1:27017/test

AUTH_SECRET = <一般登入密鑰>
AUTH_URL = http://localhost:3000/api/auth
BLOG_URL = http://localhost:3000/api/blog
MEDIA_URL = http://localhost:3000/api/upload/media
PRODUCT_URL = http://localhost:3000/api/product

GITHUB_ID = <第三方登入ID>
GITHUB_SECRET = <第三方登入密鑰>

GOOGLE_ID = <第三方登入ID>
GOOGLE_SECRET = <第三方登入密鑰>
```

接著運作
```
npm run dev
```
## 資料表

1. 使用者(User)–用於登入驗證
2. 媒體(Media)–有單獨的媒體相簿
3. 專案(Product)–專案內容有1張封面及多張配圖，從媒體相簿中拿取
4. 類別(Category)–專案可以有多個類別

## 佈署
佈署之前，讓ESlint檢查錯誤
```
npm run build
```
把多餘的程式碼或錯誤排除後，再把檔案push到master或branch
以下是.gitignore
```
# addchange
/node_modules
/.pnp

# public/uploads/*
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```