const express = require("express");
const cors = require("cors");
require("./connection.js")
const app = express();
var PORT = 3001;
var BlogModel=require("./model.js")
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add",async(req,res)=>{
  try {
    const newBlog=new BlogModel(req.body)
    await newBlog.save()
    res.send({
      message:"data added"
    })
  } catch (error) {
    console.log(error);
  }
})

app.delete("/delete/:id",async (req,res)=>{
  await BlogModel.findByIdAndDelete(req.params.id)
  res.send({message:"Deleted Succesfully!!"})
})
app.put("/update/:id",async (req,res)=>{
  await BlogModel.findByIdAndUpdate(req.params.id,req.body)
  res.send({message:"Updated Succesfully!!"})
})



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
