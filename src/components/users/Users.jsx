import React, { useContext } from "react";
import User from "./User";
import Spinner from "../Spinner";
import GithubContext from "../../context/github/GithubContext";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            profileName={user.login}
            imgUrl={user.avatar_url}
            githubProfile={user.html_url}
          />
        ))
      )}
    </div>
  );
};

export default Users;
