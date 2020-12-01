// 注入 context
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.InjectToCtx = string => console.warn('在context上注入了', string)
}
