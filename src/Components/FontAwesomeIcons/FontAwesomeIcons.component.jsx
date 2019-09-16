import React, { useState } from "react";
import MyIcon from "../../Components/MyIcon/MyIcon.component";

export default function FontAwesomeIcons({ icons }) {
  const [selectedIndex, setSelectedIndex] = useState({});
  return icons.map((icon, iconIndex) => {
    return (
      <MyIcon
        key={iconIndex}
        icon={icon}
        selectedIndex={selectedIndex}
        iconIndex={iconIndex}
        setSelectedIndex={setSelectedIndex}
        size='2x'
      />
    );
  });
}
