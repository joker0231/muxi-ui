# muxi-ui

> 打造木犀前端高质量、可扩展的公共 UI 库
 
## src目录结构
```text
├─assets       // 少部分静态资源，需要rollup构建支持
│  └─images
├─components
│  ├─Index
│  └─Index
│      ├─Mobile
│      └─Pc
└─helpers   // 公共辅助函数，处理键盘事件，触摸事件等

```

## 项目构建

本项目参考[博客教程](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) 搭建。
核心技术：

-   rollup 构建
-   storybook 组件文档
-   jest 测试

## 开发说明

本地开发

```shell
yarn install      // 安装依赖
yarn start    // 启动storybook 开启本地服务，根据文档需求开发组件
```

组件构建
```shell
yarn build
```

组件测试

```shell
yarn build       // 利用roll 打包构建组件库
yarn link         // 本机电脑全局安装

cd muxi_workbench_fe  //切换到需要使用muxi-ui仓库
yarn link @joker0231/muxi-ui     // 连接本地仓库
import {Index} from '@joker0231/muxi-ui'     // 测试打包后组件
```

组件发布

```shell
yarn build
npm publish
```

## 开发重点

-   eslint
-   prettier
-   commitlint
-   less
-   规范 ts（禁止 any）
-   jest 组件测试
-   严格按照文档需求，先写需求再开发
-   代码审核
-   rollup 构建规范：less、静态资源
