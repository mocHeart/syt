import { createRouter, createWebHistory } from "vue-router";

// createRouter方法，创建路由器实例，管理多个路由
export default createRouter({
  // 路由器的模式设置
  history: createWebHistory(),
  // 管理路由
  routes: [
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
