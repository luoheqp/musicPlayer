import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleGetLoginStatus } from "@r/common";

// components
import { MineContent } from "./style";
import PreLogin from "./components/PreLogin";
import UserDashboard from "./components/UserDashboard";

const Mine = (props) => {
  const dispatch = useDispatch();

  const profile = useSelector(({ common }) => common.profile);

  useEffect(() => {
    dispatch(handleGetLoginStatus());
  }, [dispatch]);

  return (
    <MineContent>
      {!Object.keys(profile).length ? (
        <PreLogin />
      ) : (
        <UserDashboard info={profile} />
      )}
    </MineContent>
  );
};

export default Mine;
