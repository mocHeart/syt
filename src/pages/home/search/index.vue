<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
// 深度选择器 /deep/  ::v-deep

.search {
  width: 60%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep(.el-input__wrapper) {
    margin-right: 10px;
  }
}
</style>
