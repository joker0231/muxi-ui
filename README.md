# muxi-ui
> 打造木犀前端高质量、可扩展的公共UI库

## 项目构建
本项目参考[博客教程](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) 搭建。
核心技术：
- rollup构建
- storybook组件文档
- jest测试

## 开发说明
本地开发
```shell
yarn install      // 安装依赖
yarn storybook    // 启动本地服务 根据文档需求开发组件
```

组件测试
```shell
yarn rollup       // 打包构建组件库
yarn link         // 本机电脑全局安装

cd muxi_workbench_fe  //切换到需要使用muxi-ui仓库
yarn link muxi-ui     // 连接本地仓库
import {Button} from 'muxi-ui'     // 测试打包后组件
```

## 开发重点
- eslint
- prettier
- commitlint
- less
- 规范ts（禁止any）
- jest组件测试
- 严格按照文档需求，先写需求再开发
- 代码审核
- rollup构建规范：less、静态资源

## 开发文档
借助金山文档在线文档组，利用**画图能力**和**协作能力**实现组件原型设计文档。

组件开发规范：https://kdocs.cn/l/chHqqGN0rQSR