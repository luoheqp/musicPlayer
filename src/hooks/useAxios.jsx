import { useCallback, useState, useEffect } from "react";
import request from "@/server/request";

const useAxios = (props) => {
  const { url = "", method = "GET" } = props;

  const [data, setData] = useState();

  useEffect(() => {
    request({ url, method }).then((res) => {
      setData(res);
    });
  }, [method, url]);

  return { data };
};

export default useAxios;
