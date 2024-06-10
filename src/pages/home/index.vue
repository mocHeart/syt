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
          <Card
            class="item"
            v-for="item in hasHospitalArr"
            :key="item.id"
            :hospitalInfo="item"
          />
        </div>
        <!-- 分页器  -->
        <!-- ->表示把内容放在最右侧 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
// 引入组合式API函数
import { onMounted, ref } from "vue";
import { reqHospital } from "@/api/home";
import type { Content, HospitalResponseData } from "@/api/home/type";

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

// 分页器需要的数据
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
// 存储医院的总个数
let total = ref<number>(0);
//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");

// 组件挂载完毕就执行
onMounted(() => {
  getHospitalInfo();
});

// 获取已有的医院数据
const getHospitalInfo = async () => {
  //获取医院的数据:默认获取第一页、一页十个医院的数据
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  if (result.code == 200) {
    //存储已有的医院的数据
    hasHospitalArr.value = result.data.content;
    //存储医院的总个数
    total.value = result.data.totalElements;
  }
};

// 分页器页码发生变化时候回调
const currentChange = () => {
  getHospitalInfo();
};
// 分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  // 当前页码归第一页
  pageNo.value = 1;
  // 再次发请求获取医院的数据
  getHospitalInfo();
};
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
