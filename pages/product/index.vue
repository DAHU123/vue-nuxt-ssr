<template>
  <div>
    产品中心对应的页面
    <el-button type="primary" @click="handleClick"> 哈哈哈 </el-button>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" >
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  transition: "test",
  computed: {
    todos() {
      return this.$store.state.product.list
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit("product/add", e.target.value)
      e.target.value = ""
    },
    handleClick() {
      console.log("client" + process.client)
      console.log("server" + process.server)
      this.showLoginError()
      this.$meanWhileFn("oh,My god!在vue实例中")
    },
    ...mapMutations({
      toggle: "product/toggle",
    }),
  },
  asyncData(context) {
    context.app.$meanWhileFn("Hello,world，在context")
  },
  notifications: {
    showLoginError: {
      title: "Login Failed",
      message: "Failed to authenticate",
      type: "success",
    },
  },
  name: "Index",
}
</script>

<style scoped></style>
