import { Personal as PersonalApi } from "@/server/apis";
import { SET_PERSONAL_FM_LIST } from "./constant";

export const handleGetPersonalFmList = () => async (dispatch) => {
  const data = await PersonalApi.getPersonalFmList();

  dispatch({
    type: SET_PERSONAL_FM_LIST,
    data: data,
  });
};
