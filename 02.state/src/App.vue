<template>
  <div id="app">
    <div id="nav">
      <p>{{ state.message }}</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface State {
  message: String;
}

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<State>({
      message: "Hello Sample"
    });
    return { state }
  }
});
</script>

<style lang="css" scoped>
#nav {
  margin-top: 30px;
}
</style>

