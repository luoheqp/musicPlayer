import React, { useEffect, useState } from "react";

// components
import { MoveableCardGroupContent } from "./style";
import MoveableCard from "./components/MoveableCard";

const MoveableCardGroup = (props) => {
  const { cardGroupInfo } = props;

  const [groupInfo, setGroupInfo] = useState([]);
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(cardGroupInfo));

    setShowInfo(temp.splice(0, 2));
    setGroupInfo(temp);
  }, [cardGroupInfo]);

  return (
    <MoveableCardGroupContent>
      {showInfo?.map((item) => (
        <div className="card-contant" key={item.id}>
          <MoveableCard info={item} />
        </div>
      ))}
    </MoveableCardGroupContent>
  );
};

export default MoveableCardGroup;
