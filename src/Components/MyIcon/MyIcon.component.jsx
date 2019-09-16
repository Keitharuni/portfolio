import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MyIcon.scss";

const MyIcons = ({
  setSelectedIndex,
  selectedIndex,
  iconIndex,
  icon,
  classes
}) => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (selectedIndex === iconIndex) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [selectedIndex, iconIndex]);

  const handleClick = () => {
    setSelectedIndex(iconIndex);
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      style={{ color: color ? "#348498" : "gray" }}
      className='myIcon'
      icon={icon}
      size='2x'
    />
  );
};

export default MyIcons;
