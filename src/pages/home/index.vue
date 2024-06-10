<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
     <Search />
     <!-- 底部展示医院的结构 -->
      <el-row gutter="20">
        <el-col :span="20">
          <!-- 等级子组件 -->
          <Level />
          <!-- 地区子组件 -->
           <Region />
        </el-col>
        <el-col :span="4">456</el-col>
      </el-row>
  </div>
</template>

<script lang="ts" setup>
// 引入首页轮播图组件
import Carousel from './carousel/index.vue';
// 引入首页搜索组件
import Search from './search/index.vue'
// 引入首页等级组件
import Level from './level/index.vue'
// 引入首页地区选择组件
import Region from './region/index.vue'
</script>

<style scoped lang="scss"></style> 