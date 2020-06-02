import React, { useEffect, Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";

const UserProfile = () => {
  const {
    user,
    loading,
    getSingleUser,
    repositories,
    getUserRepos,
  } = useContext(GithubContext);

  const { login } = useParams();
  useEffect(() => {
    getSingleUser(login);
    getUserRepos(login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      Hireable: {hireable ? <Fragment>Yes</Fragment> : <Fragment>No</Fragment>}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="roung-img"
            style={{ width: "150px" }}
            alt="profile"
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio: </h3>
              <p>{bio} </p>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark my-1"
          >
            Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Website: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repositories={repositories} />
    </Fragment>
  );
};

export default UserProfile;
