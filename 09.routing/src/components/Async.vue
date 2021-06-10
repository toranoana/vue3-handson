<template>
  <pre v-if="state.apiData">
   <code>
     {{ state.apiData }}
   </code>
 </pre>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";

interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

interface Bpi {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface CurrentPrice {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: Bpi;
    GBP: Bpi;
    EUR: Bpi;
  };
}

interface State {
  apiData: CurrentPrice | null;
}

export default defineComponent({
  async setup() {
    const state = reactive<State>({ apiData: null });
    const res = await axios.get<CurrentPrice>(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    state.apiData = res.data;
    return { state };
  },
});
</script>
<style scoped>
pre {
  height: 300px;
  overflow: scroll;
  border: solid 1px #8a8a8a;
}
</style>
