import React from "react";
import useLoading from "@/hooks/useLoading";
import { useSelector, useDispatch } from "react-redux";
import { handleGetPersonalFmList } from "@r/casual/action.js";

// components
import { CasualContent } from "./style.jsx";
import TheBtn from "./components/TheBtn";

const Casual = () => {
  const dispatch = useDispatch();

  const casualList = useSelector(({ casual }) => casual.casualList);

  const { LoadingDom, toggleLoading } = useLoading({
    init: false,
    position: "top",
  });

  const handleGetPersonalFm = async () => {
    toggleLoading(true);

    try {
      await dispatch(handleGetPersonalFmList());
    } catch (e) {}

    toggleLoading(false);
  };

  return (
    <CasualContent>
      <TheBtn musicPowerFull={handleGetPersonalFm} />
      {LoadingDom}
    </CasualContent>
  );
};

export default Casual;
