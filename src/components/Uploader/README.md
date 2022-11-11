# 文件上传组件

> 不依赖任何 UI、只做上传逻辑封装，满足各种 UI 和上传场景

## 功能

- 自定义文件类型
- 上传进度条
- 删除对应文件

## 引入

```javascript
import { Uploader } from '@/components';
```

## 使用

```javascript
<Uploader
  value={[
    'https://hysd-web-static-develop.shengdiudiu.com/mp/assets/gift_box.png',
    'https://hysd-web-static-develop.shengdiudiu.com/mp/assets/hysd_logo.png',
  ]}
  onChange={console.log}
>
  {({ File, percent, fileList, onRemove }) => {
    return (
      <>
        <File>选择文件</File>
        <div>上传进度：{percent}</div>
        {fileList.map(({ url, id }) => (
          <div key={id}>
            <img src={url} width="50" />
            <span onClick={() => onRemove(id)}>删除</span>
          </div>
        ))}
      </>
    );
  }}
</Uploader>
```
