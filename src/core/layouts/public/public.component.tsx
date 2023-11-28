import { Outlet } from "react-router-dom";
import { useStore } from "../../../store/store.config";

// import { useStore } from "react-redux";

const PublicComponent = () => {
  return <Outlet />;
};

export default PublicComponent;
