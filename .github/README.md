# GitHub Actions 工作流说明

本项目包含完整的 CI/CD 工作流，支持自动化测试、发布和文档部署。

## 🚀 工作流概览

### 1. CI 工作流 (`ci.yml`)
- **触发条件**: 推送到主分支或创建 PR
- **功能**: 
  - 多 Node.js 版本测试 (16, 18, 20)
  - 代码格式检查
  - 类型检查
  - 单元测试
  - 构建验证
  - 包检查
  - 测试覆盖率报告

### 2. 发布工作流 (`release.yml`)
- **触发条件**: 
  - 推送版本标签 (如 `v1.0.0`)
  - 手动触发 (可指定版本号)
- **功能**:
  - 完整的 CI 检查
  - 自动生成变更日志
  - 发布到 npm
  - 创建 GitHub Release

### 3. 文档部署工作流 (`docs.yml`)
- **触发条件**:
  - 推送到主分支 (文档相关文件变更)
  - 新版本发布
  - 手动触发
- **功能**:
  - 构建 rspress 文档
  - 部署到 GitHub Pages

### 4. 依赖更新 (`dependabot.yml`)
- **功能**: 自动检查并更新依赖
- **频率**: 每周一上午 9 点
- **范围**: npm 依赖和 GitHub Actions

## 📋 使用前准备

### 1. 设置 Secrets
在 GitHub 仓库设置中添加以下 Secrets：

```
NPM_TOKEN          # npm 发布令牌
CODECOV_TOKEN      # Codecov 令牌 (可选)
```

### 2. 启用 GitHub Pages
1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 保存设置

### 3. 配置分支保护 (推荐)
为主分支设置保护规则：
- 要求 PR 审查
- 要求状态检查通过
- 要求分支为最新

## 🎯 发布流程

### 方式一：标签发布 (推荐)
```bash
# 1. 更新版本号
npm version patch  # 或 minor, major

# 2. 推送标签
git push origin --tags

# 3. 工作流自动执行发布
```

### 方式二：手动发布
1. 进入 GitHub Actions 页面
2. 选择 "Release" 工作流
3. 点击 "Run workflow"
4. 输入版本号 (如 `1.0.1`)
5. 点击运行

## 📚 文档部署

文档会在以下情况自动部署：
- 推送到主分支且包含文档相关文件变更
- 发布新版本
- 手动触发部署

访问地址：`https://winjs-dev.github.io/cloud-utils/`

## 🔧 本地开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 运行测试
pnpm test

# 构建项目
pnpm build

# 本地预览文档
pnpm docs:dev
```

## 📊 状态徽章

可以在项目 README 中添加以下徽章：

```markdown
![CI](https://github.com/winjs-dev/cloud-utils/workflows/CI/badge.svg)
![Release](https://github.com/winjs-dev/cloud-utils/workflows/Release/badge.svg)
![Deploy Docs](https://github.com/winjs-dev/cloud-utils/workflows/Deploy%20Docs/badge.svg)
```

## 🐛 故障排除

### 发布失败
1. 检查 `NPM_TOKEN` 是否正确设置
2. 确认包名在 npm 上可用
3. 检查版本号是否符合语义化版本规范

### 文档部署失败
1. 确认 GitHub Pages 已启用
2. 检查 `rspress.config.ts` 配置
3. 确认构建产物路径正确

### CI 测试失败
1. 本地运行测试确认问题
2. 检查 Node.js 版本兼容性
3. 确认依赖安装正常

## 📝 自定义配置

可以根据项目需求调整工作流：

- 修改 Node.js 版本矩阵
- 调整触发条件
- 添加额外的检查步骤
- 自定义部署目标 