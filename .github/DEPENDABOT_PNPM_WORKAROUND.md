# Dependabot pnpm 限制解决方案

## 问题描述

Dependabot 报告了以下错误：
```
Dependabot doesn't support the 'updating transitive dependencies' feature for pnpm package_manager
```

这是因为 Dependabot 对 pnpm 包管理器的某些高级功能支持有限，特别是更新传递依赖的功能。

## 解决方案

### 1. 使用 `resolutions` 替代 `pnpm.overrides`

我们将配置从 `pnpm.overrides` 改为 `resolutions`：

```json
{
  "resolutions": {
    "esbuild": "^0.25.0"
  }
}
```

**优势**：
- `resolutions` 是更通用的标准
- 被多个包管理器支持（yarn, pnpm）
- Dependabot 兼容性更好

### 2. 配置 Dependabot 忽略规则

在 `.github/dependabot.yml` 中添加忽略规则：

```yaml
ignore:
  - dependency-name: "esbuild"
    update-types: ["version-update:semver-major", "version-update:semver-minor", "version-update:semver-patch"]
```

### 3. 手动管理传递依赖

对于需要强制更新的传递依赖：
1. 使用 `resolutions` 指定版本
2. 在 Dependabot 中忽略该依赖
3. 定期手动检查和更新

## 验证步骤

1. **检查依赖版本**：
   ```bash
   pnpm ls --depth=10 | grep esbuild
   ```

2. **验证构建**：
   ```bash
   pnpm run build
   ```

3. **运行测试**：
   ```bash
   pnpm test
   ```

## 监控和维护

### 定期检查
- 每月检查上游依赖（如 `@rslib/core`）的更新
- 关注安全公告和漏洞报告
- 验证强制版本是否仍然必要

### 清理时机
当上游依赖更新到安全版本时：
1. 移除 `resolutions` 中的对应条目
2. 移除 Dependabot 忽略规则
3. 重新安装依赖验证

## 替代方案

### 方案 A：切换到 npm/yarn
如果 pnpm 限制影响较大，可以考虑：
- 使用 npm 或 yarn 作为包管理器
- 更新 GitHub Actions 工作流
- 更新开发文档

### 方案 B：禁用 Dependabot 的传递依赖更新
在 `dependabot.yml` 中添加：
```yaml
- package-ecosystem: "npm"
  # ... 其他配置
  allow:
    - dependency-type: "direct"  # 只更新直接依赖
```

## 相关资源

- [Dependabot pnpm 支持状态](https://github.com/dependabot/dependabot-core/issues/1736)
- [pnpm resolutions 文档](https://pnpm.io/package_json#resolutions)
- [Dependabot 配置选项](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

## 总结

通过使用 `resolutions` 替代 `pnpm.overrides`，我们成功解决了 Dependabot 的兼容性问题，同时保持了对传递依赖的控制能力。这种方法既解决了安全漏洞，又避免了 Dependabot 的限制。 