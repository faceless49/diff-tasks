import axios from "axios";

type ResponseType<D = {}> = {
  errorText: string;
  info: string;
  yourBody: { success: boolean };
  yourQuery: D;
};
export const RequestsApi = {
  request(value: boolean) {
    return axios.post<ResponseType>(
      "https://neko-cafe-back.herokuapp.com/auth/test",
      {
        success: value,
      }
    );
  },
};
