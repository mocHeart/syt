### 1. 说明
此仓库是学校尚硅谷Vue3实战项目商医通的学习代码，仅供参考。

### 2. 接口
服务器地址:http://syt.atguigu.cn
医院接口：http://139.198.34.216:8201/swagger-ui.html
公共数据接口：http://139.198.34.216:8202/swagger-ui.html
会员接口：http://139.198.34.216:8203/swagger-ui.html
短信验证码接口：http://139.198.34.216:8204/swagger-ui.html
订单接口：http://139.198.34.216:8206/swagger-ui.html
文件上传接口：http://139.198.34.216:8205/swagger-ui.html
后台用户接口：http://139.198.34.216:8212/swagger-ui.html


### 3. 项目配置

#### 3.1 浏览器自动打开
`package.json`中配置:
```json
 "scripts": {
  "dev": "vite --open",
  "build": "vue-tsc && vite build",
  "preview": "vite preview"
 }
```

#### 3.2 src别名的配置

`vite.config.ts`中配置:

如果红色语法提示请安装`@types/node`是`TypeScript`的一个声明文件包，用于描述`Node.js`核心模块和常用的第三方库的类型信息.

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, 'src')
  }
 }
})
```

找到`tsconfig.json`配置文件,找到配置项`compilerOptions`添加配置,这一步的作用是让`IDE`可以对路径进行智能提示.

```json
 "baseUrl": ".",
  "paths": {
   "@/*": ["src/*"]
  }
```

#### 3.3 其他资料

+ 微信开放平台官网地址
https://open.weixin.qq.com

+ 查看微信扫码登录文档
https://mp.weixin.qq.com/

### 4. 相关插件

+ SCSS样式
`pnpn i scss`

+ 路由组件
`pnpm i vue-router`

+ element-plus
`pnpm i element-plus`

+ element-plus图标
`pnpm install @element-plus/icons-vue`

+ axios
`pnpm i axios`

