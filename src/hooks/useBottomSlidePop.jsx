import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";

const slideInAnime = keyframes`
  from {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
`;

export const SlidePopContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  z-index: ${({ state }) => (state === "exited" ? -1 : 100)};
  background-color: ${({ state }) =>
    state === "exited" || state === "exiting"
      ? "rgba(0, 0, 0, 0)"
      : "rgba(0, 0, 0, 0.3)"};
  transition: background-color 0.2s linear;

  .main {
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    bottom: -1px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    overflow-y: auto;
    transform: translateY(100%);
    transition: transform 0.2s linear;
    animation: ${slideInAnime} 0.1s linear;

    &.entered,
    &.entering {
      transform: translateY(0%);
    }
  }
`;

const BottomSlidePop = ({ isShowing, close, container, children }) =>
  ReactDOM.createPortal(
    <CSSTransition in={isShowing} timeout={200} unmountOnExit={true}>
      {(value) => (
        <SlidePopContent onClick={close} state={value}>
          <div className={`main ${value}`}>{children}</div>
        </SlidePopContent>
      )}
    </CSSTransition>,
    container
  );

const useBottomSlidePop = (init) => {
  const [isShowing, setIsShowing] = useState(init || false);

  const handleToggle = useCallback((state) => {
    if (state === undefined) {
      setIsShowing(!isShowing);
    } else {
      setIsShowing(state);
    }
  }, []);

  return {
    BottomSlidePopDom: (children) =>
      BottomSlidePop({
        isShowing: isShowing,
        close: () => handleToggle(false),
        container: document.body,
        children: children,
      }),
    toggleBottomSlidePop: handleToggle,
    showState: isShowing,
  };
};

export default useBottomSlidePop;
