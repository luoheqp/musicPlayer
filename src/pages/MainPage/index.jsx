import React from "react";
import { useHistory } from "react-router-dom";
import { MainPageContent, ListItem } from "./style";

const LIST_ITEM = [
  {
    name: "MUSIC LIST",
    target: "musicList",
  },
  {
    name: "MUSIC PLAYER",
    target: "musicPlayer",
  },
];

const MainPage = () => {
  const history = useHistory();

  const handlePageJump = (target) => {
    history.push(`/${target}`);
  };

  return (
    <MainPageContent>
      {LIST_ITEM.map(({ name, target }) => (
        <div
          className="list-item-wrap"
          key={target}
          onClick={() => handlePageJump(target)}
        >
          <ListItem>{name}</ListItem>
        </div>
      ))}
    </MainPageContent>
  );
};

export default MainPage;
