<script lang="tsx">
import { defineComponent, reactive } from "vue";

interface State {
	message: string;
	clickCount: number;
}

export default defineComponent({
  setup() {
    const state = reactive<State>({message: "test", clickCount: 0});
		const onClick = () => {
			state.clickCount += 1;
			state.message = `${state.clickCount}回clickされました`;
		};
    return () => (
      <div class="home">
        {state.message}
				<button onClick={onClick}>カウントボタン</button>
      </div>
    );
  },
});
</script>
<style scoped>
.home {
	color: red;
}
</style>