import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newColor) {
    setChildrenColor(newColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: randomColor }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
