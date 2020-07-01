import React, { useState, useEffect } from "react";
import { PlaygroundContent } from "./style";
import anime from "animejs";

const Playground = (props) => {
  const [animeInstance, setAnimeInstance] = useState();

  const handleClick = () => {
    animeInstance.restart();
  };

  useEffect(() => {
    let animeTimeLink = anime
      .timeline({
        targets: ".ball",
        loop: false,
      })
      .add({
        scale: 1.2,
        duration: 500,
      })
      .add({
        scale: 1,
        duration: 500,
      });

    setAnimeInstance(animeTimeLink);
  }, []);

  return (
    <PlaygroundContent>
      <div className="ball-wrap">
        <div className="ball"></div>
      </div>

      <input type="button" value="click" onClick={handleClick} />
    </PlaygroundContent>
  );
};

export default Playground;
