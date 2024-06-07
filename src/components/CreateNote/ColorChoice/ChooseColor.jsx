import React, { useEffect, useRef } from "react";
import "./_chooseColor.css";

const ChooseColor = ({ setSelectedColor, setShowPicker, btnRef }) => {
  const colors = [
    "papayawhip",
    "peachpuff",
    "palegreen",
    "powderblue",
    "thistle",
    "lightpink",
    "mistyrose",
  ];
  const pickerRef = useRef();
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setShowPicker(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !pickerRef.current.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [pickerRef, setShowPicker, btnRef]);

  return (
    <div className="color_option" ref={pickerRef}>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColorChange(color)}
          className="color_pallet"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default React.memo(ChooseColor);
