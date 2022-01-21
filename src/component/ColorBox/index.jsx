import React, { useState } from "react";
ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState();
  return (
    <div>
      {color}
      <button onClick={() => setColor("black")}>CLICK change black</button>
      <button onClick={() => setColor("white")}>CLICK change white</button>
    </div>
  );
}

export default ColorBox;
