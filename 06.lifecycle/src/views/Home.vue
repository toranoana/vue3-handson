<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    // 追加
    const resizeEvent = () => {
      console.log("resize window");
    };
    // 2つ追加
    onMounted(() => {
      window.addEventListener("resize", resizeEvent);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resizeEvent);
    });
  },
});
</script>

<style lang="css" scoped>
img {
  margin-top: 30px;
}
</style>
