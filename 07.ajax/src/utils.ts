import { reactive } from "vue";

export interface AppState {
  message: string;
}

export const useAppState = (): [AppState, ()=> void] => {
  const state = reactive<AppState>({
    message: "Hello Sample",
  });

  const onClick = () => {
    state.message = "clicked";
  };

  return [state, onClick];
};