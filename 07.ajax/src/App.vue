<template>
  <div id="app">
    <div id="nav">
      <!-- 追加 -->
      <sample
        :parent-message="state.message"
        @click="onChildEmit"
        :update-message="onChildClick"
      />
      <!-- <p>{{ state.message }}</p> -->
      <p>
        <button type="button" @click="onClick">メッセージを変更</button>
      </p>
      <!-- <async /> -->
      <!-- 追加：Supenseで囲むことで非同期コンポーネントのフォールバックコンテンツを表示 -->
      <Suspense>
        <template #default>
          <async />
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Sample from "./components/Sample.vue";
import Async from "./components/Async.vue";
// import { AppState, useAppState } from './utils';
// type State = AppState

interface State {
  message: String;
}

export default defineComponent({
  name: "App",
  // Async追加
  components: { Sample, Async },
  setup() {
    const state = reactive<State>({
      message: "Hello Sample",
    });
    // 追加
    const onClick = () => {
      state.message = "clicked";
    };
    // const [state, onClick] = useAppState();

    // 追加(2つ)
    const onChildClick = () => {
      state.message = "child clicked";
    };
    const onChildEmit = () => {
      state.message = "child emit clicked";
    };

    return {
      state,
      // 追加
      onClick,
      onChildClick,
      onChildEmit,
    };
  },
});
</script>

<style lang="css" scoped>
#nav {
  margin-top: 30px;
}
</style>
