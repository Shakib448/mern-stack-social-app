import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <h1>This page is not found</h1>
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
