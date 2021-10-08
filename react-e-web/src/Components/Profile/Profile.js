import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faTrash,
  faUpload,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Body, Wrapper, Content, Image, Info, Icons } from "./Profile.style";
import axios from "axios";

import IMAGE from "../../images/navback.jpg";
import Navbar from "../Navbar/Navbar";
import PopUp from "../PopUp/PopUp";

const Profile = () => {
  const [userData, setUserData] = useState({ followers: [], following: [] });
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState("");
  const [popup, setPopup] = useState(false);
  const [imageData, setImageData] = useState("");
  const History = useHistory();

  async function fetchData() {
    const res = await axios.get("http://localhost:3001/Profile");
    setUserData(res.data);
    console.log(res.data);
    setPosts(res.data.posts);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  const Update = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData();
      data.append("file", profile);
      const res = await axios.post("http://localhost:3001/Profile", data);
      // then print response status
      if (res.status !== 500 && res) {
        alert(res.data);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ProfileImg = (e) => {
    setProfile(e.target.files[0]);
  };

  const Popup = (data) => {
    setPopup(true);
    setImageData(data);
  };

  return (
    <>
      <Navbar />
      <Body>
        <Wrapper>
          {profile ? (
            <button onClick={Update}>
              <FontAwesomeIcon icon={faUpload} size="2x" />
            </button>
          ) : (
            ""
          )}
          <div className="edit-icon">
            <a href="##">
              <button
                title="Trash"
                style={{
                  color: "Red",
                }}
              >
                <FontAwesomeIcon icon={faTrash} size="2x" />
              </button>
            </a>
          </div>
          <Content>
            <Image>
              <label className="-label" for="file">
                <span className="glyphicon glyphicon-camera"> </span>
                <span> Change Image </span>
              </label>
              <input id="file" type="file" onChange={ProfileImg} />
              <img
                src={
                  userData.profile
                    ? `http://localhost:3001/ProfileImages/${userData.profile}`
                    : IMAGE
                }
                alt="profile"
                id="output"
                width="200"
              />
            </Image>
            {/* </input> */}
            {/* <div className = 'backImage'><Image src={IMAGE} /></div> */}
            <Info>
              <div>
                <h1> {userData.userName} </h1>
                <hr
                  style={{
                    width: "20rem",
                  }}
                  className="line"
                />
                <div className="info-split">
                  <div>
                    <h5> posts </h5> <h5> Followers </h5> <h5> Following </h5>
                    <br />
                  </div>
                  <div>
                    <h5> {posts.length} </h5>{" "}
                    <h5> {userData.followers.length} </h5>{" "}
                    <h5>{userData.following.length} </h5>
                  </div>
                </div>
              </div>
            </Info>
          </Content>
          <hr />
          <Icons>
            <button title="Posts" className="hover-underline-animation">
              <FontAwesomeIcon icon={faImage} size="3x" />
            </button>
            <button title="Followers" className="hover-underline-animation">
              <FontAwesomeIcon icon={faUser} size="3x" />
            </button>
            <button title="Following" className="hover-underline-animation">
              <FontAwesomeIcon icon={faUserFriends} size="3x" />
            </button>
          </Icons>
          <hr className="hover-underline-animation" />
          <div className="Grid">
            {posts.map((post, index) => (
              <div id={index} onClick={() => Popup(post)}>
                <img
                  className="Post-style"
                  src={`http://localhost:3001/inProcessImages/${post.image}`}
                  alt="posts"
                />
              </div>
            ))}
          </div>
          {console.log(imageData)}
          {popup ? (
            <PopUp onClose={() => setPopup(false)}>
              <img
                src={`http://localhost:3001/inProcessImages/${imageData.image}`}
                alt="post"
                className="postImg"
              />
              <div className="Info">
                <div> {userData.userName} </div>
                <div> {imageData.description} </div>
                <div className="Comment">
                  <textarea rows="1"> </textarea>
                </div>
              </div>
            </PopUp>
          ) : (
            ""
          )}
        </Wrapper>
      </Body>
    </>
  );
};

export default Profile;
