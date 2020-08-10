import React, { useEffect } from "react";
import useLoading from "@/hooks/useLoading";
import { useSelector, useDispatch } from "react-redux";
import { handleGetPersonalFmList } from "@r/casual/action.js";

// components
import { CasualContent } from "./style.jsx";
import { CSSTransition } from "react-transition-group";
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

  return (
    <CasualContent>
      {!casualList.length && <TheBtn musicPowerFull={handleGetPersonalFm} />}
      <CSSTransition unmountOnExit={true} in={casualList.length}>
        <MoveableCardGroup cardGroupInfo={casualList} />
      </CSSTransition>
      {LoadingDom}
    </CasualContent>
  );
};

export default Casual;
