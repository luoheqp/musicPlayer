import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const LoadingContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = ({ isShowing, close, container }) =>
  isShowing
    ? ReactDOM.createPortal(
        <LoadingContent>
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

const useModal = (initState) => {
  const isShowing = useRef(false);

  const handleToggle = () => {
    isShowing.current = !isShowing.current;
  };

  const handleClose = () => {
    isShowing.current = false;
  };

  useEffect(() => {
    isShowing.current = initState;
  }, [initState]);

  return [
    Loading({
      isShowing: isShowing.current,
      close: handleClose,
      container: document.body,
    }),
    handleToggle,
    isShowing.current,
  ];
};

export default useModal;
