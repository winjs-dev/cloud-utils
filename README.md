# @winner-fed/cloud-utils

一个实用的工具类库，提供丰富的工具函数，帮助开发者提高开发效率。

## 特性

- 🚀 开箱即用：提供丰富的工具函数，无需重复造轮子
- 🛠️ 类型安全：使用 TypeScript 开发，提供完整的类型定义
- 📦 **独立函数导入**：支持单个函数导入，极致的按需加载，减小打包体积
- 🎯 **多格式支持**：提供 ESM、CommonJS、UMD 多种格式，适配不同环境
- 🔧 可扩展：支持自定义配置，满足不同场景需求
- 📝 文档完善：提供详细的 API 文档和使用示例
- 🔄 持续更新：定期更新，保持代码质量
- ⚡ **零依赖**：除必要的运行时依赖外，无额外依赖

## 安装

```bash
# 使用 npm
npm install @winner-fed/cloud-utils

# 使用 yarn
yarn add @winner-fed/cloud-utils

# 使用 pnpm
pnpm add @winner-fed/cloud-utils
```

## 使用

### 完整引入（推荐）

```typescript
import { formatDate, accAdd, isEmpty } from '@winner-fed/cloud-utils';

// 使用日期格式化
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');

// 使用精确加法
const sum = accAdd(0.1, 0.2); // 0.3

// 判断是否为空
const empty = isEmpty(null); // true
```

### 独立函数导入（按需加载）

对于只需要少数几个函数的场景，可以直接导入独立函数，减少打包体积：

```typescript
// ESM 格式 - 自动选择合适的文件
import { accAdd } from '@winner-fed/cloud-utils/accAdd';
import { formatDate } from '@winner-fed/cloud-utils/formatDate';
import { isEmpty } from '@winner-fed/cloud-utils/isEmpty';

// CommonJS 格式
const { accAdd } = require('@winner-fed/cloud-utils/accAdd');
const { formatDate } = require('@winner-fed/cloud-utils/formatDate');
```

### 直接路径导入

如果需要明确指定导入格式：

```typescript
// 明确使用 ESM 格式
import { accAdd } from '@winner-fed/cloud-utils/dist/esm/accAdd.js';

// 明确使用 CommonJS 格式
const { accAdd } = require('@winner-fed/cloud-utils/dist/cjs/accAdd.js');
```

### 完整命名空间导入

```typescript
import * as utils from '@winner-fed/cloud-utils';

// 使用工具函数
const result = utils.formatDate(new Date(), 'YYYY-MM-DD');
const sum = utils.accAdd(0.1, 0.2);
```

## 包结构

本包提供了多种格式以适应不同的使用场景：

```
@winner-fed/cloud-utils/
├── dist/
│   ├── index.js           # ESM 主入口
│   ├── index.cjs          # CommonJS 主入口
│   ├── index.d.ts         # TypeScript 声明文件
│   ├── *.d.ts             # 独立函数的声明文件
│   ├── esm/               # ESM 格式的独立函数
│   │   ├── accAdd.js
│   │   ├── formatDate.js
│   │   └── ...
│   ├── cjs/               # CommonJS 格式的独立函数
│   │   ├── accAdd.js
│   │   ├── formatDate.js
│   │   └── ...
│   └── umd/               # UMD 格式（浏览器直接使用）
│       └── index.js
```

### 在浏览器中使用

```html
<!-- 通过 CDN 引入 UMD 格式 -->
<script src="https://unpkg.com/@winner-fed/cloud-utils/dist/umd/index.js"></script>
<script>
  // 全局变量 cloudUtils
  const result = cloudUtils.formatDate(new Date(), 'YYYY-MM-DD');
  const sum = cloudUtils.accAdd(0.1, 0.2);
</script>
```

## 性能对比

不同的导入方式适用于不同的使用场景：

| 导入方式 | 包体积 | 适用场景 | 示例 |
|---------|-------|---------|------|
| **完整引入** | ~94KB | 使用多个函数时推荐 | `import { a, b, c } from '@winner-fed/cloud-utils'` |
| **独立函数导入** | ~1-3KB/函数 | 只使用少数函数时 | `import { accAdd } from '@winner-fed/cloud-utils/accAdd'` |
| **直接路径导入** | ~1-3KB/函数 | 明确指定格式时 | `import { accAdd } from '@winner-fed/cloud-utils/dist/esm/accAdd.js'` |

### 选择建议

- 🚀 **使用 3 个以上函数**：推荐完整引入
- ⚡ **只使用 1-2 个函数**：推荐独立函数导入
- 🎯 **对包体积非常敏感**：使用独立函数导入
- 🛠️ **需要特定格式**：使用直接路径导入

## 功能分类

### 日期处理
- `formatDate`: 日期格式化
- `formatDateToTimeStamp`: 日期转时间戳
- `getMonthOfDay`: 获取月份天数
- `getYearOfDay`: 获取年份天数
- `isLeapYear`: 判断是否为闰年

### 数学计算
- `accAdd`: 精确加法
- `preZeroFill`: 数字前补零
- `toNonExponential`: 数字转非科学计数法
- `formatNumber`: 数字格式化

### 类型判断
- `is`: 类型判断工具集
- `isEmpty`: 判断是否为空
- `isEmptyObject`: 判断是否为空对象
- `isValidDate`: 判断是否为有效日期
- `isDigit`: 判断是否为数字
- `isLetters`: 判断是否为字母
- `isHTML`: 判断是否为 HTML 字符串

### 字符串处理
- `trim`: 去除空格
- `toZhCN`: 转中文数字
- `numberToChinese`: 数字转中文
- `toCamelCaseVar`: 转驼峰变量
- `toUnderlineVar`: 转下划线变量
- `transferHumpUnderline`: 驼峰下划线互转

### DOM 操作
- `addClass`: 添加类名
- `removeClass`: 移除类名
- `scrollToTop`: 滚动到顶部
- `getScrollPos`: 获取滚动位置
- `insertAtCaret`: 在光标处插入内容
- `getPixelRatio`: 获取设备像素比

### 工具函数
- `deepClone`: 深拷贝
- `deepMapKeys`: 深度映射键名
- `promisify`: Promise 化
- `timeTaken`: 计算执行时间
- `anagrams`: 生成字符串的所有排列组合
- `generateGUID`: 生成唯一标识符
- `combineURLs`: URL 组合
- `equals`: 深度比较两个值是否相等

### 数据处理
- `merge`: 对象合并
- `only`: 对象过滤
- `size`: 获取对象大小
- `dig`: 深度获取对象属性
- `objectToPairs`: 对象转键值对数组
- `objectFromPairs`: 键值对数组转对象
- `mapKeys`: 映射对象键名
- `mapValues`: 映射对象值

### 文件处理
- `photoCompress`: 图片压缩
- `exportXls`: 导出 Excel
- `prettyBytes`: 格式化文件大小
- `dynamicLoadScript`: 动态加载脚本

### 设备检测
- `getDevice`: 获取设备信息
- `isMobile`: 判断是否为移动设备
- `isMobileStrict`: 严格判断是否为移动设备
- `isMobileLoose`: 宽松判断是否为移动设备
- `isPhoneX`: 判断是否为 iPhone X
- `isLightOS`: 判断是否为轻量级操作系统

### 验证工具
- `isValidEmail`: 验证邮箱
- `isValidPassword`: 验证密码
- `isValidTelephone`: 验证电话号码
- `isValidChineseName`: 验证中文姓名
- `isValidEnglishName`: 验证英文姓名
- `isValidBankNo`: 验证银行卡号
- `isValidIPV4`: 验证 IPv4 地址
- `isValidIPV6`: 验证 IPv6 地址
- `isValidURI`: 验证 URI
- `isValidBase64Format`: 验证 Base64 格式
- `isValidMD5`: 验证 MD5 格式
- `isValidSemverVersion`: 验证语义化版本号
- `isValidSubnetMask`: 验证子网掩码
- `isValidTestScores`: 验证考试成绩
- `isValidZipcode`: 验证邮政编码
- `isValidWechatID`: 验证微信号
- `isValidQQ`: 验证 QQ 号
- `isValidPassport`: 验证护照号
- `isValidLicenseNo`: 验证车牌号
- `isValidNewEnergyLicenseNo`: 验证新能源车牌号
- `isValidUnifiedSocialCreditCode`: 验证统一社会信用代码
- `isValidAShareCode`: 验证 A 股代码

### URL 处理
- `urlJoin`: URL 拼接
- `getURLParameters`: 获取 URL 参数
- `getLocationSearchParam`: 获取 URL 搜索参数
- `getLocationHrefParam`: 获取 URL 哈希参数
- `getUrlNames`: 获取 URL 路径名

### 其他工具
- `cookie`: Cookie 操作
- `encrypt`: 加密工具
- `getRandomInt`: 获取随机整数
- `handleEmoji`: 处理表情符号
- `isEmoji`: 判断是否为表情符号
- `isSpecialChar`: 判断是否为特殊字符
- `rgbToHex`: RGB 转十六进制
- `setDocumentTitle`: 设置文档标题

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 测试
pnpm test

# 文档开发
pnpm docs:dev

# 文档构建
pnpm docs:build
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
