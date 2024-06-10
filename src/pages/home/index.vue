<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level />
        <!-- 地区子组件 -->
        <Region />
        <!-- 展示医院结构 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页器  -->
        <!-- ->表示把内容放在最右侧 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="13"
        />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// 引入首页轮播图组件
import Carousel from "./carousel/index.vue";
// 引入首页搜索组件
import Search from "./search/index.vue";
// 引入首页等级组件
import Level from "./level/index.vue";
// 引入首页地区选择组件
import Region from "./region/index.vue";
// 引入医院卡片组件
import Card from "./card/index.vue";
// 响应式数据 ref
import { ref } from "vue";

// 分页器需要的数据
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
