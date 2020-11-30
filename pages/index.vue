<template>
  <div>
    <h1>Hello, {{name}}</h1>
  </div>
</template>

<script>
  export default {
    transitions: 'test',
    data(){
      return {
        title: '陈丽丽，真漂亮呀！'
      }
    },
    asyncData(){
      return {
        name: 'World'
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
    fetch(){

    }
  }
</script>
