import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}{" "}
        </a>
      </h3>
    </div>
  );
};

export default Repo;
