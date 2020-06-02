import React from "react";
import { Link } from "react-router-dom";

const User = ({ profileName, imgUrl, githubProfile }) => {
  // const styles = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(3, 1fr)",
  // };
  return (
    <div className="card text-center">
      <img
        src={imgUrl}
        alt="avatar-url"
        className="round-img"
        style={{
          width: "60px",
        }}
      />
      <h3>{profileName}</h3>
      <div>
        <Link
          to={`profile/${profileName}`}
          className="btn btn-dark btn-sm my-1"
        >
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default User;
