// 需要同时在context，Vue实例，Vuex中注入，系统会自动将￥添加到方法名的前面
export default ({ app }, inject) => {
  inject('meanWhileFn', string => console.warn('同时注入了!', string))
}
