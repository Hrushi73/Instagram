import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faSmileWink,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import profilePic from "./profile-pic.png";
import axios from "axios";

const PostComp = ({ key, post }) => {
  const { image, description, user } = post;
  const [mycomment, setmycomment] = useState("");
  const [heartColor, setheartColor] = useState("#adadad");
  const History = useHistory();

  // useEffect(() => {

  // }, [])

  const handleCommentChange = (event) => {
    setmycomment(event.target.value);
  };

  const submitComment = async () => {
    const res = await axios.post("/comment", {
      comment: mycomment,
      postid: post._id,
    });
    if (res.status !== 500) {
      setmycomment("");
    }
  };

  const handleLikes = async () => {
    const value = heartColor === "#adadad" ? 1 : -1;
    const res = await axios.post("like", { value: value, postid: post._id });
    if (res.status !== 500) {
      setheartColor("#ff3377");
    } else {
      console.log(res);
    }
  };

  const goToAllComments = () => {
    History.push("/allcomments");
  };

  return (
    <article id={key}>
      <div className="article-bordker">
        <div className="post-top">
          <header>
            <img className="profile-image" src={profilePic} alt="Profile" />
            <div className="username-info">
              <div className="username">{user.userName}</div>
            </div>
          </header>
          <div className="button-container">
            <button>
              <h1>...</h1>
            </button>
          </div>
        </div>
        <div className="post-middle">
          <div>
            <img
              className="post-image"
              src={`http://localhost:3001/inProcessImages/${image}`}
              alt="post"
            />
          </div>
        </div>

        <div className="post-bottom">
          {/* like share comment strip */}
          <div className="like-share-row">
            <div>
              <button
                title="like"
                style={{ color: heartColor }}
                onClick={handleLikes}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div>
              <button title="See all comments" onClick={goToAllComments}>
                <FontAwesomeIcon icon={faComment} />
              </button>
            </div>
            <div>
              <button title="share">
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>

          {/* description */}
          <div className="description">{description}</div>

          {/* comment option */}
          <div className="comment-bar-container">
            <div className="left-button">
              <button title="emoji keyboard">
                <FontAwesomeIcon
                  style={{ color: "FFAA00" }}
                  icon={faSmileWink}
                />
              </button>
            </div>

            <div className="text-wrapper">
              <input
                type="text"
                value={mycomment}
                onChange={handleCommentChange}
              />
            </div>
            <div>
              <button
                className="right-button"
                title="post"
                onClick={mycomment !== "" ? submitComment : {}}
              >
                <FontAwesomeIcon
                  style={{ color: "#1060FF" }}
                  icon={faPaperPlane}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostComp;
