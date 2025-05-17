const mongoose=require('mongoose')
//Write missing codes here
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
var BlogModel=mongoose.model("mernBlog",schema)

module.exports=BlogModel
