import React, { useEffect } from "react";
import useLoading from "@/hooks/useLoading";
import { useSelector, useDispatch } from "react-redux";
import { handleGetPersonalFmList } from "@r/casual/action.js";

// components
import { CasualContent } from "./style.jsx";
import TheBtn from "./components/TheBtn";
import MoveableCardGroup from "@/components/MoveableCardGroup";

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

  useEffect(() => {
    handleGetPersonalFm();
  }, []);

  return (
    <CasualContent>
      {/* <TheBtn musicPowerFull={handleGetPersonalFm} /> */}
      <MoveableCardGroup cardGroupInfo={casualList} />
      {LoadingDom}
    </CasualContent>
  );
};

export default Casual;
