# Function: accAdd

**accAdd**(`arg1`, `arg2`): `number`

加法函数，用来得到精确的加法结果<br>
javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `number` |
| `arg2` | `number` |

#### Returns

`number`

arg1加上arg2的精确结果

**`Example`**

```ts
accAdd(0.1, 0.2)
// => 0.3
```

**`Example`**

```ts
accAdd(1.2345, 5.4321)
// => 6.6666
```

**`Example`**

```ts
accAdd(100, -50)
// => 50
```
