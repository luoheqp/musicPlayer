import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";

const Loading = ({ isShowing, close }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div>
            <button type="button" onClick={close}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>Hello, I'm a modal.</p>
        </div>,
        document.body
      )
    : null;

const useModal = (initState) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(initState);
  }, [initState]);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return [
    Loading({ isShowing: isShowing, close: handleClose }),
    isShowing,
    toggle,
  ];
};

export default useModal;
