<template>
  <div>
    <p>{{ localFullMessage }}</p>
    <p>{{ parentFullMessage }}</p>
  </div>
  <!-- 以下追加 -->
  <p>
    <button type="button" @click="updateMessage">propで更新</button>
  </p>
  <p>
    <button type="button" @click="emitClick">emitで更新</button>
  </p>
</template>

<script lang="ts">
import {
  computed,
  watch,
  watchEffect,
  defineComponent,
  PropType,
  reactive,
  SetupContext,
} from "vue";

interface State {
  localMessage: string;
}

export default defineComponent({
  props: {
    parentMessage: {
      type: String,
      required: true,
    },
    // 追加(propsで変更用の関数を受け取るケース)
    updateMessage: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
  },
  setup(props, { emit }: SetupContext) {
    const state = reactive<State>({ localMessage: "child component" });
    // 以下色々追加
    const localFullMessage = computed(
      () => `localMessage: ${state.localMessage}`
    );
    const parentFullMessage = computed(
      () => `parentMessage: ${props.parentMessage}`
    );
    watchEffect(() => {
      alert(
        `localMessageかparentMessageが変更されました。
       ${localFullMessage.value}
       ${parentFullMessage.value}`
      );
    });
    watch(
      () => props.parentMessage,
      () => alert("parentMessageが変更されました。")
    );

    const emitClick = () => {
      emit("click");
    };

    return { state, emitClick, localFullMessage, parentFullMessage };
  },
});
</script>
