<template>
  <div>
    <p>localMesssage: {{ state.localMessage }}</p>
    <p>parentMessage: {{ parentMessage }}</p>
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
import { defineComponent, PropType, reactive, SetupContext } from "vue";

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
  setup(_, { emit }: SetupContext) {
    const state = reactive<State>({ localMessage: "child component" });
    // 追加(Eventとして変更用の関数を受け取るケース)
    const emitClick = () => {
      emit("click");
    };

    return { state, emitClick };
  },
});
</script>
