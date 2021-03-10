import React from "react";
import { Link } from "react-router-dom"
import imageNotFound from "../images/404.svg";

const NotFound = () => {
  return (
    <>
      <div className="notfound flex justify-around align-center full-screen">
        <div className="flex column justify-center align-start half-width">
          <h2>404 page not found</h2>
          <p className="half-width">
            culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
            harum nesciuntculpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
            harum nesciunt
          </p>
          
          <Link to="/" className="button">
          Back Home
        </Link>
        </div>
        <div className="flex justify-center align-center half-width">
          <img alt="liveperson logo" src={imageNotFound} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
