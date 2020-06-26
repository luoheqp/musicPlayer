import axios from "axios";
import { typeJudgment } from "@/utils";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

request.interceptors.response.use(
  ({ data: { data, code } }) =>
    new Promise((resolve, reject) => {
      if (code === 200) {
        if (typeJudgment(data, "array") && data.length === 1) {
          data = data[0];
        }

        resolve(data);
      }
    })
);

export default request;
