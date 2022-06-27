<template>
  <div id="app" class="text-center w-100">
    <Nav_component />

    <div>
      <router-view />
    </div>

    <Footer_component />
  </div>
</template>

<script>
import Nav_component from "./components/import_Components/Nav_component.vue";
import Footer_component from "./components/import_Components/Footer_component.vue";


export default {
  name: "App",

  components: {
    Nav_component,
    Footer_component,
  },
};
</script>

<style>
@import url(../style.css);
</style>
