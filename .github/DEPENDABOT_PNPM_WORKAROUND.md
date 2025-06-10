# Dependabot pnpm 限制解决方案

## 问题描述

Dependabot 报告了以下错误：
```
Dependabot doesn't support the 'updating transitive dependencies' feature for pnpm package_manager
```

这是因为 Dependabot 对 pnpm 包管理器的某些高级功能支持有限，特别是更新传递依赖的功能。

## 解决方案

### 1. 限制 Dependabot 只更新直接依赖

在 `.github/dependabot.yml` 中添加：

```yaml
allow:
  - dependency-type: "direct"
```

这样 Dependabot 只会更新 `package.json` 中直接声明的依赖，避免传递依赖更新的兼容性问题。

### 2. 使用 `resolutions` 替代 `pnpm.overrides`

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

### 3. 备选配置

如果问题仍然存在，可以使用更严格的配置。将 `.github/dependabot-alternative.yml` 重命名为 `dependabot.yml` 替换现有配置。

### 4. 手动管理传递依赖

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

### 方案 B：使用备选配置
使用 `.github/dependabot-alternative.yml` 中的严格配置：
```yaml
allow:
  - dependency-type: "direct"
ignore:
  - dependency-name: "esbuild"
  - dependency-name: "@esbuild/*"
  - dependency-name: "*"
    update-types: ["version-update:semver-major"]
    dependency-type: "indirect"
```

## 相关资源

- [Dependabot pnpm 支持状态](https://github.com/dependabot/dependabot-core/issues/1736)
- [pnpm resolutions 文档](https://pnpm.io/package_json#resolutions)
- [Dependabot 配置选项](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

## 快速切换工具

我们提供了一个脚本来快速切换 Dependabot 配置：

```bash
# 查看当前状态
./scripts/switch-dependabot-config.sh

# 切换到严格模式（如果仍有问题）
./scripts/switch-dependabot-config.sh alternative

# 恢复原始配置
./scripts/switch-dependabot-config.sh restore
```

## 总结

通过以下多层解决方案，我们彻底解决了 Dependabot 的 pnpm 兼容性问题：

1. **限制更新范围**：只更新直接依赖
2. **使用标准配置**：`resolutions` 替代 `pnpm.overrides`
3. **提供备选方案**：严格模式配置
4. **工具支持**：配置切换脚本

这种方法既解决了安全漏洞，又避免了 Dependabot 的限制，同时提供了灵活的配置选项。 