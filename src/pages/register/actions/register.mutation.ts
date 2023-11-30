import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { IRegisterFormValues } from "../register";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { setToken } from "../../../core/helpers/get-token";
import { Routes } from "../../../router/routes";
import { register } from "./register.service";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: IRegisterFormValues) => {
      return register(credentials);
    },
    onSuccess: (response) => {
      console.log(response);
      setToken(response.accessToken);
      store.dispatch(setUser(response.user.email));
      navigate(Routes.home);
    },
    onError: (error: Error) => {
      console.log("Register failed", error);
    },
  });
};
