<template>
  <div>
    <div class="container">
      <div class="wrap-title">
        <div class="sub">
          <nuxt-link to="/">首页</nuxt-link>
        </div>
        <div class="sub">
          <nuxt-link to="/news">新闻</nuxt-link>
        </div>
        <div class="sub">
          <nuxt-link to="/product">产品中心</nuxt-link>
        </div>
        <div class="sub">
          <nuxt-link to="/partner">合伙人</nuxt-link>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .wrap-title {
    display: flex;
    justify-content: flex-start;
    .sub {
      padding: 20px;
      color: $color;
      cursor: $cursor-p;
    }
  }

  html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
