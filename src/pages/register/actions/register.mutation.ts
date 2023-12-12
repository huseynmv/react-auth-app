import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { IRegisterFormValues } from "../register";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { setToken } from "../../../core/helpers/get-token";
import { Routes } from "../../../router/routes";
import { register } from "./register.service";
import { jwtDecode } from "jwt-decode";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: IRegisterFormValues) => {
      return register(credentials);
    },
    onSuccess: (response) => {
      setToken(response.accessToken);
      const user = jwtDecode(response.accessToken);
      store.dispatch(setUser(user));
      navigate(Routes.home);
    },
    onError: (error: Error) => {
      console.log("Register failed", error);
    },
  });
};
