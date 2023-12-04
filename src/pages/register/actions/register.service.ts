import { IRegisterFormValues } from "../register";
import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const register = (credentials: IRegisterFormValues): Promise<any> => {
  console.log("salam");

  return axiosInstance.post(API.register, credentials).then((res) => res.data);
};
