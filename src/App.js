import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import UserProfile from "./components/users/UserProfile";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import ScreenLoader from "./components/ScreenLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <GithubState>
      <AlertState>
        {isLoading ? (
          <ScreenLoader />
        ) : (
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/profile/:login" component={UserProfile} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        )}
      </AlertState>
    </GithubState>
  );
};

export default App;