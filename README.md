# Vue 3 + Typescript + Vite



这个库是一个最基本的ts组件库，能导出按需加载并且具有ts类型提示



## 注意点

build命令必须是"vite build && vue-tsc"，不能反过来，不然会覆盖掉声明文件

```
package.json
  "scripts": {
      "dev": "vite",
      "build": "vite build && vue-tsc",
      "preview": "vite preview"
    }
```

