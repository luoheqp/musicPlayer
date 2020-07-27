import React from "react";
import { Switch, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { RouterContainer } from "./style";

const AnimatedSwitch = withRouter(({ location, children }) => {
  return (
    <RouterContainer>
      <TransitionGroup className={"router-wrapper"}>
        <CSSTransition
          classNames={"fade"}
          appear={true}
          key={location.pathname}
          timeout={300}
          unmountOnExit={true}
        >
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    </RouterContainer>
  );
});

export default AnimatedSwitch;
