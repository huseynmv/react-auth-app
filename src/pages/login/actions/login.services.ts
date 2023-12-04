import { ILoginFormValues } from "../login";
import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const login = (credentials: ILoginFormValues): Promise<any> => {
  return axiosInstance.post(API.login, credentials).then((res) => res.data);
};
