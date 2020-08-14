import React from "react";

// components
import { DiskListSlideGroupContent } from "./style";
import Title from "../Title";

const DiskListSlideGroup = (props) => {
  const { title, musicList } = props;
  
  return (
    <DiskListSlideGroupContent>
      <Title title={title} />
    </DiskListSlideGroupContent>
  );
};

export default DiskListSlideGroup;
