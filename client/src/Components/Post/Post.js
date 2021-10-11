import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

//components
import Navbar from "../Navbar/Navbar";
import CroppedImageUpload from "../CroppedImageUPload/CroppedImageUpload";

function Post() {
  const [userData, setUserData] = useState({});
  const History = useHistory();

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await axios.get("http://localhost:3001/Profile");
        setUserData(res.data);
      }
      fetchData();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <CroppedImageUpload />
      </div>
    </div>
  );
}

export default Post;
