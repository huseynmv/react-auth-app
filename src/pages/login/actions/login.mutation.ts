import { useNavigate } from "react-router-dom";
import { ILoginFormValues } from "../login";
import { useMutation } from "react-query";
import { login } from "./login.services";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { setToken } from "../../../core/helpers/get-token";
import { Routes } from "../../../router/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ILoginFormValues) => {
      return login(credentials);
    },
    onSuccess: (response) => {
      console.log(response.user.email);
      setToken(response.accessToken);
      store.dispatch(setUser(response.user.email));
      navigate(Routes.home);
    },
    onError: (error: Error) => {
      console.log("Login failed", error);
    },
  });
};
