# 全局 Toast 组件

> 避免每次使用都去连接 redux

## 使用

```jsx
import { Toast } from '@/components';

Toast('气泡提示');
```

或者

```jsx
import { Toast } from '@/components';

Toast({
  msg: '气泡提示',
  position: 'middle',
  timeout: 1000,
});
```

## API

#### options（String | Object）

> `options` 支持字符串和对象。
>
> 当只传字符串时作为 `msg`。`position` 和 `timeout` 使用默认值。

| Prop       | Description                 | Type                          | Default  |
| ---------- | --------------------------- | ----------------------------- | -------- | --- |
| msg        | 展示的信息                  | String \| Component           | ''       |     |
| position   | 展示的位置                  | 'top' \| 'middle' \| 'bottom' | 'bottom' |
| timeout    | 展示的持续时长（毫秒）      | Number                        | 3000     |
| isMultiple | 是否可以显示多个 toast 元素 | Boolean                       | false    |
