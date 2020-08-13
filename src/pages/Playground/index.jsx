import React, { useEffect, useCallback, useState, useRef } from "react";
import { PlaygroundContent } from "./style";

const Playground = (props) => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const textArea = useRef();
  const maxWidth = useRef();

  const handleChange = useCallback((e) => {
    const {
      target: { value },
    } = e;

    if (!value) return setText("");

    // 创建节点获取文字长度
    const textContent = document.createElement("div");
    textContent.innerText = e.target.value;
    textContent.style.cssText =
      "position: absolute; opacity: 0; font-size: 16px";

    document.body.appendChild(textContent);

    const textWidth = textContent.offsetWidth;

    // 计算和容器的长度比例 设置合理字体大小
    setFontSize((maxWidth.current / textWidth) * 16);

    document.body.removeChild(textContent);

    setText(e.target.value);
  }, []);

  useEffect(() => {
    maxWidth.current = textArea.current.offsetWidth;
  }, []);

  return (
    <PlaygroundContent>
      <p className="text-area" style={{ fontSize: fontSize }} ref={textArea}>
        {text}
      </p>
      <input type="text" onChange={handleChange} />
    </PlaygroundContent>
  );
};

export default Playground;
