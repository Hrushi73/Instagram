import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import AllComments from "./Components/AllComments/AllComments";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/allComments">
          <AllComments />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
