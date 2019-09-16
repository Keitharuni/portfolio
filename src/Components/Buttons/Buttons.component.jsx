import React from "react";

import "./Buttons.styles.scss";

const Buttons = ({ title, toggleDetails }) => {
  return (
    <>
      <button className='details' onClick={toggleDetails}>
        {title} Details
      </button>
    </>
  );
};

export default Buttons;
