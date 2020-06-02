import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// API Url
const githubUserSearch = `https://api.github.com/search/users`;
const githubSingleUser = `https://api.github.com/users`;

// Global State of the App
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repositories: [],
    loading: false,
  };

  // Global Reducer of the app - takes the reducer & the state
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (user) => {
    setLoading();
    const response = await axios.get(
      `${githubUserSearch}?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // Get User
  const getSingleUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `${githubSingleUser}/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  // Get Repositories
  const getUserRepos = async (username) => {
    setLoading();
    const response = await axios.get(
      `${githubSingleUser}/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  //  Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repositories: state.repositories,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
