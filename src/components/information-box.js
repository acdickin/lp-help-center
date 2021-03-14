import React from "react";
import { useState, useEffect } from "react";

const InformationBox = ({ title, desc, icon, id }) => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json().then((data) => {
          // console.log(data[0].username);
          setPerson(data[id].username);
        });
      })
      .catch((err) => {
        console.log("An Error");
      });
  }, []);

  return (
    <div className="box flex justify-center ">
      <div className="icon">
        <img src={icon} alt="icon-text" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{person} + read this post</p>
      </div>
    </div>
  );
};

export default InformationBox;
