import "./App.scss";
import useGlobalStyles from "./assets/styles/style";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = () => {
  useGlobalStyles();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
