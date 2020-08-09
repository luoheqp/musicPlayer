import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const LoadingContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    ${({ pos }) => {
      switch (pos) {
        case "top":
          return css`
            top: 20%;
          `;
        case "bottom":
          return css`
            bottom: 20%;
          `;
        default:
          return css`
            transform: translate(-50%, -50%);
          `;
      }
    }}
  }
`;

const Loading = ({ isShowing, close, container, position }) =>
  isShowing
    ? ReactDOM.createPortal(
        <LoadingContent pos={position}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24px"
            height="30px"
            viewBox="0 0 24 30"
            style={{ enableBackground: "new 0 0 50 50" }}
            className="loading"
          >
            <rect x="0" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="20" y="13" width="4" height="5" fill="#333">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </LoadingContent>,
        container
      )
    : null;

const useLoading = ({ init, position }) => {
  const [isShowing, setIsShowing] = useState(init || false);

  const handleToggle = useCallback((state) => {
    if (state === undefined) {
      setIsShowing(!isShowing);
    } else {
      setIsShowing(state);
    }
  }, []);

  return {
    LoadingDom: Loading({
      isShowing: isShowing,
      close: () => handleToggle(false),
      container: document.body,
      position: position,
    }),
    toggleLoading: handleToggle,
    showState: isShowing,
  };
};

export default useLoading;
