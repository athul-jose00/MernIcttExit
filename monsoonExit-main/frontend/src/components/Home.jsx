import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const nav=useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3001/get");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      fetchBlogs(); 
    } catch (err) {
      console.error(err);
    }
  };
  const handleUpdate=(val)=>{
  nav("/add",{state:{val}})
}

  return (
    <Container style={{ marginTop: 30 }}>
      <Grid container spacing={5}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 380 }}>
              <CardMedia
                component="img"
                height="100"
                image={blog.img_url}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="caption" >
                  {blog.title}
                </Typography>
                <Typography variant="h6" fontWeight="semibold">
                  {blog.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(blog._id)}
                  size="small"
                >
                  DELETE
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8e24aa", color: "#fff" }}
                  size="small"
                  onClick={() => handleUpdate(blog)}
                >
                  UPDATE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
