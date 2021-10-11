import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

//components
import Follow from "../Follow/Follow";

const Suggestions = ({ fetchPosts }) => {
  const [suggestions, setsuggestions] = useState([]);

  async function fetchSuggestions() {
    const res = await axios.get("http://localhost:3001/suggestions");
    setsuggestions(res.data);
    fetchPosts();
  }

  useEffect(() => {
    try {
      fetchSuggestions();
    } catch (err) {
      console.log("some error happened");
    }
  }, []);

  return (
    <div className="suggestion">
      <div className="heading">
        <div className="heading-left">
          <h3>Suggestions for you</h3>
        </div>
        <div className="heading-right">
          <button>see all</button>
        </div>
      </div>
      <div className="follow-container">
        {suggestions.map((suggestion, index) => {
          return (
            <Follow
              key={index}
              suggestion={suggestion}
              fetchSuggestions={fetchSuggestions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Suggestions;
