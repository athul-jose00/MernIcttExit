const mongoose = require("mongoose");
//Write missing code here
mongoose.connect("mongodb+srv://athul23ubc131:user@cluster0.wopby4z.mongodb.net/MernDb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("Connected to DB")
}).catch((err)=>{
  console.log(err)
})