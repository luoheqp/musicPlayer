import React, { useState, useCallback } from "react";
import { PlaygroundContent, Animation } from "./styled";
import { Transition } from "react-transition-group";

const Playground = (props) => {
  const [animate, setAnimate] = useState(false);

  // Animate on click button and revert after 3000ms.
  const doAnimate = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 3000);
  }, []);

  return (
    <PlaygroundContent>
      {/* Transition change state with `in` props */}
      <Transition in={animate} timeout={500}>
        {(state) => (
          // state change: exited -> entering -> entered -> exiting -> exited
          <Animation state={state}>Hello</Animation>
        )}
      </Transition>
      <button onClick={doAnimate}>Animate</button>
    </PlaygroundContent>
  );
};

export default Playground;
