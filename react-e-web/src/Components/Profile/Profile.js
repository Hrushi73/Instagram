import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { Body, Wrapper, Content, Image, Info, Icons } from "./Profile.style";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  const [userData, setUserData] = useState({ followers: [], following: [] });
  const [posts, setPosts] = useState([]);
  const [option, setoption] = useState("posts");
  const History = useHistory();

  async function fetchData() {
    const res = await axios.get("http://localhost:3001/Profile");
    setUserData(res.data);
    setPosts(res.data.posts);
  }

  //if unauthorised used send to login
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  const Update = async (event) => {
    try {
      console.log(event.target.files[0]);
      const data = new FormData();
      data.append("file", event.target.files[0]);
      const res = await axios.post("http://localhost:3001/Profile", data);
      // then print response status
      if (res.status !== 500) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePosts = (event) => {
    try {
      event.preventDefault();
      setoption("posts");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowers = (event) => {
    try {
      event.preventDefault();
      setoption("followers");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowing = (event) => {
    try {
      event.preventDefault();
      setoption("following");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Body>
        <Wrapper>
          <Content>
            <Image>
              <label className="-label" for="file">
                <span className="glyphicon glyphicon-camera"> </span>
                <span> Change Image </span>
              </label>
              <input id="file" type="file" onChange={Update} />
              <img
                src={`http://localhost:3001/ProfileImages/${userData.profile}`}
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
            <button
              title="Posts"
              onClick={handlePosts}
              className="hover-underline-animation"
            >
              <FontAwesomeIcon icon={faImage} size="3x" />
            </button>
            <button
              title="Followers"
              onClick={handleFollowers}
              className="hover-underline-animation"
            >
              <FontAwesomeIcon icon={faUser} size="3x" />
            </button>
            <button
              title="Following"
              onClick={handleFollowing}
              className="hover-underline-animation"
            >
              <FontAwesomeIcon icon={faUserFriends} size="3x" />
            </button>
          </Icons>
          <hr className="hover-underline-animation" />

          <div>
            {option === "posts" && (
              <div className="Grid">
                {posts.map((post, index) => (
                  <div id={index}>
                    <img
                      className="Post-style"
                      src={`http://localhost:3001/inProcessImages/${post.image}`}
                      alt="posts"
                    />
                  </div>
                ))}
              </div>
            )}
            {option === "followers" && (
              <Container maxWidth="sm">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                    margin: "0",
                    height: "50vh",
                    boxSizing: "border-box",
                    overflow: "auto",
                  }}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      borderRadius: "10px",
                      boxSizing: "border-box",
                    }}
                  >
                    <ListItem
                      sx={{
                        maxWidth: 360,
                        borderRadius: "10px",
                        margin: "10px 0",
                      }}
                    >
                      <ListItemText primary="Followers" />
                    </ListItem>
                    {userData.followers.map((user, index) => {
                      return (
                        <ListItem
                          id={index}
                          sx={{
                            maxWidth: 360,
                            backgroundColor: "#AAAAAA",
                            borderRadius: "10px",
                            margin: "10px 0",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt="Remy Sharp"
                              src={`http://localhost:3001/ProfileImages/${user.profile}`}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={user.userName}
                            secondary={`followers : ${user.followers.length}`}
                            // secondary={`followers : ${user.followers.length}`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Container>
            )}
            {option === "following" && (
              <Container maxWidth="sm">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "10px",
                    margin: "0",
                    height: "50vh",
                    boxSizing: "border-box",
                    overflow: "auto",
                  }}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      borderRadius: "10px",
                      boxSizing: "border-box",
                    }}
                  >
                    <ListItem
                      sx={{
                        maxWidth: 360,
                        borderRadius: "10px",
                        margin: "10px 0",
                      }}
                    >
                      <ListItemText primary="Following" />
                    </ListItem>
                    {userData.following.map((user, index) => {
                      return (
                        <ListItem
                          id={index}
                          sx={{
                            maxWidth: 360,
                            backgroundColor: "#AAAAAA",
                            borderRadius: "10px",
                            margin: "10px 0",
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt="Remy Sharp"
                              src={`http://localhost:3001/ProfileImages/${user.profile}`}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={user.userName}
                            secondary={`followers : ${user.followers.length}`}
                            // secondary={`followers : ${user.followers.length}`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Container>
            )}
          </div>
        </Wrapper>
      </Body>
    </>
  );
};

export default Profile;
