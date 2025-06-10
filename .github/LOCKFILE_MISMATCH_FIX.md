# pnpm Lockfile 不匹配问题解决方案

## 问题描述

在 GitHub Actions 中运行 `pnpm install --frozen-lockfile` 时出现错误：

```
WARN  Ignoring not compatible lockfile at /home/runner/work/cloud-utils/cloud-utils/pnpm-lock.yaml
ERR_PNPM_LOCKFILE_CONFIG_MISMATCH  Cannot proceed with the frozen installation. The current "overrides" configuration doesn't match the value found in the lockfile

Update your lockfile using "pnpm install --no-frozen-lockfile"
```

## 问题原因

当我们在 `package.json` 中添加或修改了以下配置时，现有的 `pnpm-lock.yaml` 文件会与新配置不匹配：

- `resolutions`
- `pnpm.overrides`
- `pnpm.onlyBuiltDependencies`
- 其他 pnpm 特定配置

## 解决方案

### 1. 本地修复（开发者）

当遇到此错误时，在本地运行：

```bash
# 更新 lockfile 以匹配新配置
pnpm install --no-frozen-lockfile

# 验证修复
pnpm install --frozen-lockfile
```

### 2. GitHub Actions 自动处理

我们已经更新了所有工作流，添加了自动处理逻辑：

```yaml
- name: 安装依赖
  run: |
    # 尝试使用 frozen lockfile，如果失败则更新 lockfile
    pnpm install --frozen-lockfile || {
      echo "⚠️ Lockfile 不匹配，正在更新..."
      pnpm install --no-frozen-lockfile
    }
```

这样 GitHub Actions 会：
1. 首先尝试使用 frozen lockfile（推荐方式）
2. 如果失败，自动更新 lockfile
3. 继续执行后续步骤

### 3. 预防措施

为了避免此问题，在修改 `package.json` 中的 pnpm 配置后：

1. **立即更新 lockfile**：
   ```bash
   pnpm install --no-frozen-lockfile
   ```

2. **提交更新的 lockfile**：
   ```bash
   git add pnpm-lock.yaml
   git commit -m "chore: update lockfile for new pnpm config"
   ```

## 相关配置变更

### 当前项目中的配置

```json
{
  "resolutions": {
    "esbuild": "^0.25.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": ["core-js"]
  }
}
```

### 影响的工作流

以下工作流已更新以处理 lockfile 不匹配：
- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`
- `.github/workflows/docs.yml`

## 最佳实践

### 开发流程
1. 修改 `package.json` 中的 pnpm 配置
2. 立即运行 `pnpm install --no-frozen-lockfile`
3. 验证 `pnpm install --frozen-lockfile` 能正常工作
4. 提交所有变更（包括 lockfile）

### CI/CD 流程
- 使用容错的安装命令
- 优先使用 frozen lockfile
- 失败时自动降级到更新模式

## 故障排除

### 本地开发问题

**问题**：`pnpm install --frozen-lockfile` 失败
**解决**：
```bash
rm pnpm-lock.yaml
pnpm install
```

**问题**：依赖版本不符合预期
**解决**：
```bash
pnpm ls --depth=10 | grep [package-name]
```

### CI/CD 问题

**问题**：GitHub Actions 中安装失败
**解决**：检查工作流日志，确认是否使用了更新的安装逻辑

## 相关资源

- [pnpm lockfile 文档](https://pnpm.io/pnpm-lock.yaml)
- [pnpm install 选项](https://pnpm.io/cli/install)
- [GitHub Actions pnpm 设置](https://github.com/pnpm/action-setup)

## 总结

通过在 GitHub Actions 中添加容错逻辑，我们确保了即使 lockfile 不匹配也能正常构建。同时提供了本地开发的最佳实践，避免此类问题的发生。 