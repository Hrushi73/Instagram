import React from "react";
import { Link } from "react-router-dom";
//styles
import { Wrapper, NavItems } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Navbar</h2>
      <NavItems>
        <ul>
          <Link to="/home">
            <a href="#" className="Home">
              <div>
                <li>Home</li>
              </div>
            </a>
          </Link>
          <Link to="/post">
            <a href="##" className="post">
              <li>Posts</li>
            </a>
          </Link>
          <Link to="/request">
            <a href="###" className="new-friend">
              <li>Requests</li>
            </a>
          </Link>
          <Link to="/profile">
            <a href="#" className="profile">
              <li>Profile</li>
            </a>
          </Link>
          <Link to="/search">
            <a href="#" className="search">
              <li>Search</li>
            </a>
          </Link>

          <Link to="/home">
            <a href="#" className="Home-icon" style={{ color: "#03BFFF" }}>
              <div>
                <li>
                  <i className="fas fa-home"></i>
                </li>
              </div>
            </a>
          </Link>
          <Link to="/request">
            <a
              href="###"
              className="new-friend-icon"
              style={{ color: "#03BFFF" }}
            >
              <li>
                <i className="fas fa-user-plus"></i>
              </li>
            </a>
          </Link>
          <Link to="/search">
            <a href="#" className="search-icon" style={{ color: "#03BFFF" }}>
              <li>
                <i class="fas fa-search"></i>
              </li>
            </a>
          </Link>
          <Link to="/profile">
            <a href="#" className="profile-icon" style={{ color: "#03BFFF" }}>
              <li>
                <i class="fas fa-user-circle"></i>
              </li>
            </a>
          </Link>
        </ul>
        <Link to="">
          <a href="##" className="post-icon" style={{ color: "white" }}>
            <li>
              <i className="fas fa-paper-plane"></i>
            </li>
          </a>
        </Link>
      </NavItems>
    </Wrapper>
  );
};

export default Navbar;
