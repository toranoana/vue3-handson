<template>
  <div>
    <p>localMesssage: {{ state.localMessage }}</p>
    <p>parentMessage: {{ parentMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface State {
  localMessage: string;
}

export default defineComponent({
  props: {
    parentMessage: {
      type: String,
      required: true,
    }
  },
  setup() {
    const state = reactive<State>({ localMessage: "child component" });
    return { state };
  },
})
</script>
