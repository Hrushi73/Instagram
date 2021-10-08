import axios from "axios";
import React from "react";
import profilePic from "./profile-pic.jpg";
import "./style.css";

function Follow({ username, id, fetchSuggestions }) {
  // console.log(id);
  const addFollowing = async () => {
    try {
      const res = await axios.post("http://localhost:3001/following", {
        _id: id,
        userName: username,
      });
      fetchSuggestions();
    } catch (err) {
      console.log("Some error happened" + err);
    }
  };

  return (
    <div id={id} className="main-container">
      <div className="left-container">
        <img className="profile-image" src={profilePic} alt="Profile" />
        <div>{username}</div>
      </div>
      <div>
        <button className="follow-button" onClick={addFollowing}>
          Follow
        </button>
      </div>
    </div>
  );
}

export default Follow;
