import { useNavigate } from "react-router-dom";
import { ILoginFormValues } from "../login";
import { useMutation } from "react-query";
import { login } from "./login.services";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { setToken } from "../../../core/helpers/get-token";
import { Routes } from "../../../router/routes";

import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ILoginFormValues) => {
      return login(credentials);
    },
    onSuccess: (response) => {
      setToken(response.accessToken);
      const user = jwtDecode(response.accessToken);
      store.dispatch(setUser(user));
      navigate(Routes.home);
    },
    onError: (error: Error) => {
      console.log("Login failed", error);
    },
  });
};
