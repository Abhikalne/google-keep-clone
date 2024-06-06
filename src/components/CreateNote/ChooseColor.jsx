import React, {  useRef } from "react";
import "./_chooseColor.css";
import useHandleClickOutside from "../../hooks/useHandleClickOutside";
const ChooseColor = ({ setSelectedColor, setShowPicker }) => {
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
  useHandleClickOutside(pickerRef, () => setShowPicker(false));
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
