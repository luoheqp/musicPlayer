import React from "react";
import { Switch, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimeRouterSwitchContainer } from "./style";

const AnimeRouterSwitch = withRouter(({ location, children }) => {
  return (
    <AnimeRouterSwitchContainer>
      <TransitionGroup>
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
    </AnimeRouterSwitchContainer>
  );
});

export default AnimeRouterSwitch;
