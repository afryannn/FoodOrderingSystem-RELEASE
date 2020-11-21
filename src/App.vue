<template>
  <div id="app">
    <router-view />
    <footerr />
  </div>
</template>

<script>

import footerr from "@/components/Footer.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "app",
  components: {
    footerr,
  }
};
</script>

<style>
</style>
