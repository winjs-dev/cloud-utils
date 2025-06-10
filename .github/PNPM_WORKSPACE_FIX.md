# pnpm Workspace 配置修复

## 问题描述

在 GitHub Actions 中运行 `pnpm install --frozen-lockfile` 时出现错误：

```
ERR_PNPM_INVALID_WORKSPACE_CONFIGURATION  packages field missing or empty
```

## 问题原因

项目中存在 `pnpm-workspace.yaml` 文件，但配置不完整：

```yaml
# 原始配置 - 缺少必需的 packages 字段
onlyBuiltDependencies:
  - core-js
```

pnpm 要求 workspace 配置文件必须包含 `packages` 字段，即使是空数组也需要声明。

## 解决方案

### 方案 1：删除 workspace 配置（已采用）

由于这是单包项目，不需要 workspace 功能：

1. **删除 `pnpm-workspace.yaml` 文件**
2. **将配置移到 `package.json`**：
   ```json
   {
     "pnpm": {
       "onlyBuiltDependencies": ["core-js"]
     }
   }
   ```

### 方案 2：修复 workspace 配置（备选）

如果需要保留 workspace 配置，可以这样修复：

```yaml
# pnpm-workspace.yaml
packages:
  - "."  # 包含当前目录

onlyBuiltDependencies:
  - core-js
```

## 验证步骤

1. **本地验证**：
   ```bash
   pnpm install --frozen-lockfile
   ```

2. **GitHub Actions 验证**：
   - 推送代码触发 CI
   - 检查 Actions 日志确认无错误

## 相关配置

### package.json 中的 pnpm 配置
```json
{
  "pnpm": {
    "onlyBuiltDependencies": ["core-js"]
  }
}
```

### GitHub Actions 工作流
所有工作流中的 `pnpm install --frozen-lockfile` 命令现在都能正常工作：
- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`
- `.github/workflows/docs.yml`

## 最佳实践

### 单包项目
- 不需要 `pnpm-workspace.yaml` 文件
- 将 pnpm 特定配置放在 `package.json` 的 `pnpm` 字段中

### 多包项目（monorepo）
- 必须有 `pnpm-workspace.yaml` 文件
- 必须包含 `packages` 字段
- 示例配置：
  ```yaml
  packages:
    - "packages/*"
    - "apps/*"
  ```

## 相关资源

- [pnpm workspace 文档](https://pnpm.io/workspaces)
- [pnpm 配置文档](https://pnpm.io/package_json)
- [GitHub Actions pnpm 设置](https://github.com/pnpm/action-setup)

## 总结

通过删除不必要的 `pnpm-workspace.yaml` 文件并将配置移到 `package.json`，我们解决了 GitHub Actions 中的 pnpm 配置错误，同时保持了项目的简洁性。 