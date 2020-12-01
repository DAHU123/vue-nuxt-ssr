<template>
    <div>
      产品中心对应的页面
      <el-button type="primary" @click="handleClick">哈哈哈</el-button>
    </div>
</template>

<script>
  export default {
    transition: 'test',
    methods:{
      handleClick(){
        this.showLoginError()
        this.$meanWhileFn('oh,My god!在vue实例中')
      }
    },
    asyncData(context){
      context.app.$meanWhileFn('Hello,world，在context')
    },
    notifications: {
      showLoginError: {
        title: 'Login Failed',
        message: 'Failed to authenticate',
        type: 'warn'
      }
    },
    name: "index"
  }
</script>

<style scoped>

</style>
