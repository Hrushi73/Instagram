import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faSearch,
  faUserCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

//styles
import { Wrapper, NavItems } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>FrienZone</h2>
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
              <li>Post</li>
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
            <div>
              <li className="Home-icon">
                <FontAwesomeIcon icon={faHome} />
              </li>
            </div>
          </Link>
          <Link to="/request">
            <li className="new-friend-icon">
              <FontAwesomeIcon icon={faUserPlus} />
            </li>
          </Link>
          <Link to="/search">
            <li className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </li>
          </Link>
          <Link to="/profile">
            <li className="profile-icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </li>
          </Link>
        </ul>
        <Link to="/post">
          <li className="post-icon">
            <FontAwesomeIcon icon={faPaperPlane} />
          </li>
        </Link>
      </NavItems>
    </Wrapper>
  );
};

export default Navbar;
