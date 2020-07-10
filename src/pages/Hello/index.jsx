import React, { useEffect } from "react";
import { HelloContent } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleGetSongCatList } from "@r/common";

const Hello = (props) => {
  const dispatch = useDispatch();

  const songCatList = useSelector(({ common }) => common.songCatList);

  useEffect(() => {
    dispatch(handleGetSongCatList());
  }, [dispatch]);

  return (
    <HelloContent>
      {songCatList?.map(({ name }, index) => (
        <li className="list-item" key={index}>
          {name}
        </li>
      ))}
    </HelloContent>
  );
};

export default Hello;
