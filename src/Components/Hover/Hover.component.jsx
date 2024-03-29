import React from "react";
import "./Hover.styles.scss";

const Hover = ({ onHover, children }) => (
  <div className='hover'>
    <div className='hover__no-hover'>{children}</div>
    <div className='hover__hover'>{onHover}</div>
  </div>
);

export default Hover;
