import { IState } from "../../store/store";

const loadState = (): IState => {
  try {
    const serializedState = localStorage.getItem(
      "Architecture (Mode: Default)-token"
    );
    if (serializedState === null) {
      return {
        user: null,
        loader: false,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage", err);
    return {
      user: null,
      loader: false,
    };
  }
};

export default loadState;
