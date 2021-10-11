import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

//materail ui components
import {
  CssBaseline,
  Box,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
} from "@mui/material";

const AllComments = () => {
  const { idOfPost } = useParams();
  const [postData, setpostData] = useState({});
  const [comments, setcomments] = useState([]);
  const [postOwner, setpostOwner] = useState({});

  const fetchCommentsOnPost = async () => {
    const res = await axios.post("/getComments", { _id: idOfPost });
    setpostData(res.data);
    setpostOwner(res.data.user);
    setcomments(res.data.Comments);
  };

  useEffect(() => {
    try {
      fetchCommentsOnPost();
    } catch (err) {
      History.push("/Login");
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          padding: "1rem 0",
          bgcolor: "#CCF2F4",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={0} lg={6}>
            <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
              <ListItem alignItems="flex-start" sx={{ bgcolor: "#CCF2F4" }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:3001/ProfileImages/default-avatar.jpg}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={postOwner && postOwner.userName}
                  secondary={
                    <React.Fragment>{postData.description}</React.Fragment>
                  }
                />
              </ListItem>
              <img
                className="post-image"
                src={`http://localhost:3001/inProcessImages/${postData.image}`}
                alt="post"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                maxHeight: "80vh",
                borderRadius: "10px",
                bgcolor: "#AAAAAA",
                overflow: "auto",
              }}
            >
              {comments.map((comm, index) => {
                return (
                  <List id={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={`http://localhost:3001/ProfileImages/${comm.user.profile}`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={comm.user.userName}
                        secondary={
                          <React.Fragment>{comm.comment}</React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AllComments;
