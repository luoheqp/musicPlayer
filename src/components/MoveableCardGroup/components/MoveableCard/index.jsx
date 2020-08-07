import React from "react";

import { MoveableCardContent } from "./style";

const MoveableCard = (props) => {
  const { info } = props;

  return (
    <MoveableCardContent>
      {/* <img src={`${info.album.picUrl}?param=300y300`} alt="" /> */}
    </MoveableCardContent>
  );
};

export default MoveableCard;
