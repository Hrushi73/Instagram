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
import { borderRadius } from "@mui/system";

const AllComments = () => {
  const [postData, setpostData] = useState({});
  const [comments, setcomments] = useState([]);
  const { idOfPost } = useParams();

  const fetchCommentsOnPost = async () => {
    const res = await axios.post("/getComments", { _id: idOfPost });
    setpostData(res.data);
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
          bgcolor: "#FDEFEF",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={0} lg={6}>
            <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
              <ListItem alignItems="flex-start" sx={{ bgcolor: "#CDBBA7" }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:3001/ProfileImages/default-avatar.jpg}`}
                  />
                </ListItemAvatar>
                <ListItemText primary="userName" />
              </ListItem>
              <img
                className="post-image"
                src={`http://localhost:3001/inProcessImages/${postData.image}`}
                alt="post"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ bgcolor: "#CDBBA7" }}>
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
