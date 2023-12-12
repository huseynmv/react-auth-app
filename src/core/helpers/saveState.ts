// saveState.ts
import { IState } from "../../store/store";

const saveState = (state: IState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("Architecture (Mode: Default)-token", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage", err);
  }
};

export default saveState;
