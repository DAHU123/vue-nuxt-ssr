<template>
  <div>
    新闻动态对应的页面
    <el-button type="primary"> 查看新闻 </el-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  transition: "test",
  asyncData(context) {
    context.app.InjectToCtx("3434354")
  },
}
</script>

<style scoped></style>
