import React from "react";
// import { useState, useEffect } from "react";

const InformationBox = ({ title, desc, icon, id }) => {
  return (
    <div className="box flex column-mobile">
      <div className="icon">
        <img src={icon} alt="icon-text" />
      </div>
      <div className={id}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InformationBox;
