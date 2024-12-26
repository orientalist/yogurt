# Random ID Generator API

## 簡介
這是一個使用 Node.js 開發的 API 函數，旨在生成隨機 ID，並將其與其他數據一起發送到指定的 URL。此函數的目的是為了整合在不同的服務或應用程序中，從而提供唯一的識別碼。

## 功能
- 生成隨機的 8 位數 ID，範圍從 10000000 到 99999999。
- 將生成的 ID 與其他數據組合，並透過 POST 請求發送到指定的服務端。
- 將服務端的響應中重定向的 URL 返回給請求者。

## 安裝與使用方式
1. 確保已安裝 [Node.js](https://nodejs.org/) 和 npm（Node Package Manager）。
2. 克隆此專案至本地端：
   ```bash
   git clone https://github.com/yourusername/random-id-generator-api.git
   ```
3. 進入專案目錄：
   ```bash
   cd random-id-generator-api
   ```
4. 安裝必要的依賴模組：
   ```bash
   npm install
   ```
5. 修改程式碼中的 `url` 變數，使其指向您要發送請求的 API 端點。
6. 您可以將此函數作為 AWS Lambda 函數進行部署，或根據需要集成到其他 Node.js 應用程序中。

## 必要的依賴模組清單
- axios: 用於發送 HTTP 請求的 Promise 基於的 JavaScript 庫。

## 授權條款
此專案基於 MIT 許可證。詳細信息請參閱 [LICENSE](LICENSE) 文件。