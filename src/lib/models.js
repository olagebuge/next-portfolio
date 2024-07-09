import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 1,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },    
  },
  { timestamps: true }
);


//專案
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    public:{
      type:Boolean,
      default:false
    },    
    desc: {
      type: String,      
    },
    duration:{
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    url: {
      type: String,
      default:""
    },
    photos:{
      type:[]
    },
    tools:{
      type: String,
      defualt:"無"
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    categories:{
      type:[],
      default:["未分類"]
    },
    duty:{
      type: String,
      required: true,
  }},
  { timestamps: true }
);

//類別or標籤
const categorySchema = new mongoose.Schema({
  title:{
    type: String,
    maxLength:10,
    required: true,
  },
  slug: {
    type: String,    
    unique: true,
  },
  img:{
    type: String,
  }
})

//媒體
const mediaSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      default:"沒有標題",
    },
    url: {
      type: String,
      required: true,
    },      
    userId: {
      type: String,
      required: true,
    },   
    alt: {
      type: String,           
    },
  },
  { timestamps: true }
);


export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);
export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);
export const Media = mongoose.models?.Media || mongoose.model("Media", mediaSchema);
