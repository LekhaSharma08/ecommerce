import React from "react";

function ColorButton() {
  const color = [
    {
      no: 1,
      color: "rgba(235, 41, 41, 0.884)",
    },
    {
      no: 2,
      color: "rgba(31, 175, 204, 0.849)",
    },
    {
      no: 3,
      color: "rgba(31, 204, 97, 0.849)",
    },
    {
      no: 4,
      color: "rgba(241, 238, 55, 0.849)",
    },
    {
      no: 5,
      color: "rgba(181, 189, 21, 0.849)",
    },
  ];
  return (
    <div>
      {color.map((color) => (
        <button
          key={color.no}
          className="button space"
          style={{ backgroundColor: color.color }}
        ></button>
      ))}
    </div>
  );
}

export default ColorButton;
