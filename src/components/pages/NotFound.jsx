import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p className="lead">The page doesn't exist</p>

      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
