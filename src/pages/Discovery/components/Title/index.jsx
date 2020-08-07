import React from "react";

import { TitleContent } from "./style.jsx";

const Title = (props) => {
  const { title } = props;

  return <TitleContent>{title}</TitleContent>;
};

export default Title;
