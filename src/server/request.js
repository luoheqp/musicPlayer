import axios from "axios";
import { typeJudgment } from "@/utils";

const request = axios.create({
  baseURL: window.location.origin.replace(/[0-9]{4}$/, "3000"),
  timeout: 3000,
  withCredentials: true, // 网易云 API 特殊字段
});

request.interceptors.response.use(
  (res) =>
    new Promise((resolve, reject) => {
      let { data } = res;
      let { code } = data;

      if (code === 200) {
        // if 字段中存在 data
        if (data.data) {
          // if data 为只含有单个内容的数组
          let info = data.data;
          if (typeJudgment(info, "array") && info.length === 1) {
            info = info[0];
          }

          resolve(info);
        } else {
          resolve(data);
        }
      }
    })
);

export default request;
