<template>
  <div id="app">
    <el-container>
      <el-header :height="'auto'" :style="{ padding: '0px' }">
        <Header />
      </el-header>
      <el-main class="body">
        <router-view />
      </el-main>
      <el-footer :style="{ padding: '0px' }">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}
.body {
  background-color: rgba(255, 255, 255, 0.5);
}
body {
  margin: 0px;
}
.el-footer {
  padding: 0px;
}
</style>
