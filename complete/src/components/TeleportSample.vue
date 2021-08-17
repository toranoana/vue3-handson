<template>
  <a
    v-if="state.isLink"
    href="https://yumenosora.co.jp/tora-lab"
    id="link-container"
    target="_blank"
  >
    <p>リンクになってる画像</p>
  </a>
  <span v-else id="not-link-container">
    <p>リンクになってない画像</p>
  </span>
  <teleport v-if="state.isMount" :to="targetContainerId">
    <img
      src="https://yumenosora.co.jp/wp-content/themes/theme/assets/images/tora-lab/top_recruit.jpg"
      alt="とらラボエンジニア募集"
    />
  </teleport>

  <teleport to="#app">
    <div>id=appにテレポートされてきた要素</div>
  </teleport>

  <button @click="state.isLink = !state.isLink">リンク入れ替え</button>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";

interface State {
  isLink: boolean;
  isMount: boolean;
}

export default defineComponent({
  setup() {
    const state = reactive<State>({ isLink: true, isMount: false });
    const targetContainerId = computed<string>(() =>
      state.isLink ? "#link-container" : "#not-link-container"
    );
    onMounted(() => (state.isMount = true));
    return { state, targetContainerId };
  },
});
</script>
