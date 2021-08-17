<template>
  <div>Topページ</div>
  <Suspense>
    <template #default>
      <async />
    </template>
    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>

i
<script lang="ts">
import { defineComponent } from "vue";
import Async from "../components/Async.vue";

export default defineComponent({
  components: { Async },
});
</script>
