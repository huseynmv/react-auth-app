import React from "react";
import { useStore } from "../../store/store.config";

const HomeComponent = () => {
  const user = useStore("user");
  console.log(user);

  return <div>HomeComponent</div>;
};

export default HomeComponent;
