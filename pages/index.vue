<template>
  <div>
    <h1 class="red">Hello, {{name}}</h1>
    <div v-for="(item, index) in arr" :key="index">
      {{item.name}}
    </div>
    <el-button @click="$myInjectedFunction('呵呵呵！')">点击</el-button>
    <el-button type="primary" @click="handleClick">注入到了Vue实例</el-button>
  </div>
</template>

<script>
  export default {
    transitions: 'test',
    data(){
      return {
        title: '陈丽丽，真漂亮呀！',
      }
    },
    asyncData({ $axios }){
      return $axios.post('/edu-cms-web-api/v1/list-all-categories-in-site').then(res => {
        // JSON.parse(res)
        // console.log(res.data);
        return { name: '美女', arr: res?.data?.data || [] }
      })
    },
    methods: {
      handleClick(){
        this.$myInjectedFunction('哈哈哈！')
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .red{
    color: red;
  }
</style>
