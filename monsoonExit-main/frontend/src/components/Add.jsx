import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  
  var navigate=useNavigate();
  var location=useLocation();
  var [msg,setMsg]=useState("Add")
  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        title: location.state.val.title,
        content: location.state.val.content,
        img_url: location.state.val.img_url,
       
      });
      setMsg("Update");
     
    }
  }, []);
  
  
  console.log("loc",location.state);

  
  var [inputs, setInputs] = useState({ title: "", content: "", img_url: "" });

  const inputHandler = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value});
    
  };
  

  const btnHandler=()=>{


    if(location.state===null){
    axios.post("http://localhost:3001/add",inputs).then((res)=>{
      console.log(res.data.message);
      
      alert(res.data.message);
      setInputs({ title: "", content: "", img_url: ""});
      navigate("/")
    })
  }else{
    axios.put("http://localhost:3001/update/"+location.state.val._id,inputs).then((res)=>{
      alert(res.data.message);
      setInputs({ title: "", content: "", img_url: "" });
      navigate("/");
    })
  }

  }
  
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginTop: "4.67em",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: "40%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1.5em",
      }}
    >
      <h2 style={{ textDecoration: "underline", color: "white" }}>
        {msg} Blog Details
      </h2>
      <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
        <p style={{ minWidth: "150px", textAlign: "left", margin: 0 }}>
          Blog Title
        </p>
        <TextField
          id="filled-basic"
          label="Enter Blog Title"
          name="title"
          value={inputs.title}
          onChange={inputHandler}
          variant="filled"
          sx={{ width: "300px" }}
        />
      </div>
      <div
        style={{ display: "flex", gap: "1em", justifyContent: "space-evenly" }}
      >
        <p style={{ minWidth: "150px", textAlign: "left" }}>Blog Content</p>
        <TextField
          id="filled-basic"
          label="Enter Content of Blog"
          variant="filled"
          
          name="content"
          value={inputs.content}
          onChange={inputHandler}
          sx={{ width: "300px" }}
        />
      </div>
      <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
        <p style={{ minWidth: "150px", textAlign: "left", margin: 0 }}>
          Image Url 
        </p>
        <TextField
          id="filled-basic"
          label="Enter Image Url"
          variant="filled"
          name="img_url"
          value={inputs.img_url}
          onChange={inputHandler}
          sx={{ width: "300px" }}
        />
      </div>
      <div
        style={{ display: "flex", gap: "1em", justifyContent: "space-evenly" }}
      >
        
      </div>
      <div>
        <Button variant="contained" color="success" onClick={btnHandler}>
          {msg} Blog
        </Button>
      </div>
    </div>
  );
};

export default Add;
