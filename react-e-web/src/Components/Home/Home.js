import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

//components
import Navbar from "../Navbar/Navbar";
import PostComp from "../PostComp/PostComp";
import Suggestions from "../Suggestions/Suggestions";

const Home = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const History = useHistory();

  async function fetchPosts() {
    const res = await axios.get("http://localhost:3001/fetchpost");
    setPosts(res.data);
  }

  async function fetchData() {
    const res = await axios.get("http://localhost:3001/Profile");
    setUserData(res.data);
  }

  useEffect(() => {
    try {
      fetchData();
      fetchPosts();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="feed-container">
        <div>
          {posts.map((post, index) => {
            return <PostComp post={post} key={index} />;
          })}
        </div>
        <div className="suggestions-container">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;
