import React from "react";

import { HeaderContent } from "./style";

const HEADER_LISLT = ["discovery", "ground"];

const Header = (props) => {
  const { toggle, activeHeader } = props;

  return (
    <HeaderContent>
      <div className="slide-menu iconfont icon-Menu"></div>
      <ul className="main-menu">
        {HEADER_LISLT.map((item, index) => (
          <li
            className={`menu-item ${index === activeHeader ? "active" : ""}`}
            key={index}
            onClick={() => toggle(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="search iconfont icon-chaxun"></div>
    </HeaderContent>
  );
};

export default Header;
