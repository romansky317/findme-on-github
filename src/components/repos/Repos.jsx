import React from 'react'
import Repo from './Repo'
const Repos = ({repositories}) => {
    return (
      repositories.map(repo => (
          <Repo repo={repo} key={repo.id}  />
      ))
    )
}

export default Repos;
