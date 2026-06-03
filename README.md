# DeepSeek API Proxy

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/node-%3E%3D16-brightgreen" alt="Node Version">
  <img src="https://img.shields.io/badge/platform-Linux%20%7C%20macOS%20%7C%20Windows-lightgrey" alt="Platform">
</p>

一个轻量级的 DeepSeek API 代理工具，解决国内开发者访问 DeepSeek API 时遇到的网络问题，并提供多 API Key 负载均衡、用量统计等增强功能。

## ✨ 功能特性

- **🔄 智能负载均衡** — 自动在多组 API Key 之间轮询，避免单 Key 超限
- **⚡ 请求缓存** — 相同请求自动缓存，节省 Token 消耗
- **📊 用量统计** — 实时查看 Token 消耗和请求次数
- **🔑 多 Key 管理** — 支持绑定多个 API Key，自动切换
- **🛡️ 请求重试** — 失败自动重试（可配置次数）

## 🚀 快速开始

### 方式一：使用在线服务（推荐）

无需部署，直接使用：**[https://api.jiuzhaopian.com.cn](https://api.jiuzhaopian.com.cn)**

注册即送免费额度，支持 DeepSeek V3、R1 等全系列模型。

### 方式二：自行部署

```bash
git clone https://github.com/yy000108/deepseek-api-proxy.git
cd deepseek-api-proxy
npm install
cp .env.example .env
# 编辑 .env 填入你的 DeepSeek API Key
npm start
```

## 📋 环境要求

- Node.js >= 16.x
- 一个 DeepSeek API Key（可在 [DeepSeek 平台](https://platform.deepseek.com) 获取）

## 🔧 配置说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `DEEPSEEK_API_KEY` | DeepSeek API Key | 必填 |
| `PORT` | 服务端口 | 3000 |
| `CACHE_TTL` | 缓存时间（秒） | 300 |
| `MAX_RETRIES` | 最大重试次数 | 3 |

## 📚 API 文档

兼容 OpenAI API 格式，可直接替换 OpenAI 客户端。

```bash
POST /v1/chat/completions
Content-Type: application/json
Authorization: Bearer your_api_key_here

{
  "model": "deepseek-chat",
  "messages": [{"role": "user", "content": "Hello"}]
}
```

## 📄 许可证

MIT License

---

如果这个项目对你有帮助，欢迎 Star ⭐ 支持！
