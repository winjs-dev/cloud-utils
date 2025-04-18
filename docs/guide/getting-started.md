---
title: 快速开始
---

# 快速开始

## 安装

使用 npm 或 yarn 安装：

```bash
# 使用 npm
npm install @winner-fed/cloud-utils

# 使用 yarn
yarn add @winner-fed/cloud-utils

# 使用 pnpm
pnpm add @winner-fed/cloud-utils
```

## 基本使用

### 按需引入

```typescript
import { formatDate, debounce } from '@winner-fed/cloud-utils';

// 使用日期格式化
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');

// 使用防抖函数
const debouncedFn = debounce(() => {
  console.log('执行防抖函数');
}, 300);
```

### 完整引入

```typescript
import * as utils from '@winner-fed/cloud-utils';

// 使用工具函数
const result = utils.formatDate(new Date(), 'YYYY-MM-DD');
```

## 示例

### 日期处理

```typescript
import { formatDate, getDateRange } from '@winner-fed/cloud-utils';

// 格式化日期
const date = new Date();
console.log(formatDate(date, 'YYYY-MM-DD HH:mm:ss')); // 2024-03-21 14:30:00

// 获取日期范围
const { start, end } = getDateRange('week');
console.log(start, end); // 本周的开始和结束日期
```

### 函数工具

```typescript
import { debounce, throttle } from '@winner-fed/cloud-utils';

// 防抖函数
const search = debounce((keyword: string) => {
  console.log('搜索:', keyword);
}, 300);

// 节流函数
const scrollHandler = throttle(() => {
  console.log('滚动事件');
}, 200);
```

### 类型工具

```typescript
import { isNumber, isObject } from '@winner-fed/cloud-utils';

// 类型判断
console.log(isNumber(123)); // true
console.log(isObject({})); // true
```

## 注意事项

1. 建议使用 TypeScript 以获得更好的类型支持
2. 按需引入可以减小打包体积
3. 所有函数都有完整的类型定义
4. 详细的 API 文档请参考 [API 文档](/api/) 