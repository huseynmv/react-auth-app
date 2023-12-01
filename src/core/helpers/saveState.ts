// saveState.ts
import { IState } from "../../store/store";

const saveState = (state: IState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage", err);
  }
};

export default saveState;
