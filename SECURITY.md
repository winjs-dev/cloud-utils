# 安全说明

## esbuild 安全漏洞解决方案

### 问题描述

Dependabot 报告了 esbuild 的安全漏洞：
- 当前版本：0.21.5（存在安全漏洞）
- 修复版本：0.25.0+

### 解决方案

由于 `@rslib/core` 依赖的 esbuild 版本较旧，我们使用 pnpm overrides 强制更新到安全版本。

#### 配置详情

在 `package.json` 中添加了以下配置：

```json
{
  "pnpm": {
    "overrides": {
      "esbuild": "^0.25.0"
    }
  }
}
```

#### Dependabot 配置

在 `.github/dependabot.yml` 中忽略 esbuild 的自动更新，因为我们手动管理：

```yaml
ignore:
  - dependency-name: "esbuild"
    update-types: ["version-update:semver-major", "version-update:semver-minor", "version-update:semver-patch"]
```

### 验证

- ✅ esbuild 已更新到 0.25.5
- ✅ 构建正常工作
- ✅ 测试通过
- ✅ 安全漏洞已修复

### 维护

当 `@rslib/core` 更新其 esbuild 依赖到安全版本时，可以移除 pnpm overrides 配置。

定期检查：
1. `@rslib/core` 的更新日志
2. esbuild 的安全公告
3. 项目构建和测试状态

### 相关链接

- [esbuild 安全公告](https://github.com/evanw/esbuild/security/advisories)
- [pnpm overrides 文档](https://pnpm.io/package_json#pnpmoverrides)
- [Dependabot 配置文档](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file) 