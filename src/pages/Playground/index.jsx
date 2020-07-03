import React, { useState } from "react";
import { PlaygroundContent } from "./style";
import anime from "animejs";

const Playground = (props) => {
  const [obj, setObj] = useState({
    num: 0,
  });

  const handleRaise = () => {
    anime({
      targets: obj,
      num: obj.num + 10,
      easing: "linear",
      round: 1,
      update: function () {
        setObj({ num: obj.num });
      },
    });
  };

  return (
    <PlaygroundContent>
      {obj.num}
      <input type="button" value="click" onClick={handleRaise} />
    </PlaygroundContent>
  );
};

export default Playground;
