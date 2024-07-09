import {  User, Media, Category, Product } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";


export const getUser = async (email) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findOne({ email }); //改成用email
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUserById = async (userId) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find().sort({ createdAt: -1 });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const getUserMedias = async (id) => {
  noStore();
  try {
    connectToDb();
    const medias = await Media.find();
    const userMedias = medias.filter((media) => media.userId === id);

    return userMedias;
  } catch (err) {
    console.log(err);
    throw new Error("尋找上傳的媒體時發生錯誤...");
  }
};

export const getMedias = async () => {
  noStore();
  try {
    connectToDb();
    const medias = await Media.find().sort({ createdAt: -1 });

    return medias;
  } catch (err) {
    console.log(err);
    throw new Error("找不到這個媒體");
  }
};

export const getMedia = async (id) => {
  noStore();
  try {
    connectToDb();
    const media = await Media.findById(id);

    return media;
  } catch (err) {
    console.log(err);
    throw new Error("找不到這個媒體");
  }
};

export const getMediaByUrl = async (url) => {
  noStore();
  try {
    connectToDb();
    const media = await Media.findOne({url});

    return media;
  } catch (err) {
    console.log(err);
    throw new Error("找不到這個媒體");
  }
};

export const getCategory = async () => {
  try {
    connectToDb();
    const categories = await Category.find().sort({ createdAt: -1 });

    return categories;
  } catch (err) {
    console.log(err);
    throw new Error("找不到類別");
  }
};

export const getCategoryById = async (id) => {
  try {
    connectToDb();
    const category = await Category.findById(id);
    return category;
  } catch (err) {
    console.log(err);
    throw new Error("找不到類別");
  }
};

export const getProduct = async () => {
  try {
    connectToDb();
    const products = await Product.find().sort({ createdAt: -1 });

    return products;
  } catch (err) {
    console.log(err);
    throw new Error("找不到產品");
  }
};

export const getWorkBySlug = async (slug) => {
  try {
    connectToDb();
    const products = await Product.findOne({slug});

    return products;
  } catch (err) {
    console.log(err);
    throw new Error("找不到產品");
  }
};

