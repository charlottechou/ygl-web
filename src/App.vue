<template>
  <div id="app">
    <el-container>
      <el-header :height="'auto'">
        <Header />
      </el-header>
      <el-main class="body">
        <router-view />
      </el-main>
      <el-footer>
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
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/header.jpg");
  background-repeat: round;
}
.body {
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 150px;
  margin-left: 150px;
}
</style>
