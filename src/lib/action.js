"use server";

import { revalidatePath } from "next/cache";
import { User, Media, Category, Product } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";



export const addUser = async (prevState, formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "新增使用者時發生錯誤!" };
  }
};

export const editUser = async (formData) => {
  const { username, email, id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndUpdate(id, {
      username,
      email,
    });
    revalidatePath("/profile");
    return { success: "使用者資料更新成功!" };
  } catch (err) {
    return { error: "編輯使用者資料時發生錯誤!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Product.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("從db移除");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "發生錯誤!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, image, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "錯誤的帳號或密碼" };
    }
    throw err;
  }
};

const fs = require('fs').promises;

export const deleteMedia = async (prevState, formData) => { 
  try {
    const { id } = Object.fromEntries(formData);
    connectToDb();

    //查找要刪除的媒體紀錄
    const media = await Media.findById(id);
    if (!media) {
      return { error: "找不到要刪除的媒體記錄" };
    }    
    //獲取文件路徑並刪除文件
    const filePath = `./public${media.url}`;
    await fs.unlink(filePath);

    await Media.findByIdAndDelete(id);
    revalidatePath("/media/manage");
  } catch (err) {
    console.log(err);
    return { error: "無法刪除" };
  }  
  return redirect("/media/manage");
};

export const editMedia = async (prevState, formData) => {
  const { id, title, alt } = Object.fromEntries(formData);

  try {
    await Media.findByIdAndUpdate(id, { title, alt });
    revalidatePath(`/media/${id}`);
    return { success: "更新資料成功!" };
  } catch (err) {
    console.log(err);
    return { error: "更新資料失敗" };
  }
};

export const addCategory = async (prevState, formData) => {
  try {
    const { title, slug, img } = Object.fromEntries(formData);

    connectToDb();
    let lowerSlug = slug.toLowerCase();
    const newCategory = new Category({
      title,
      slug: lowerSlug,
      img,
    });
    await newCategory.save();
    revalidatePath("/category");
    return { success: "類別新增成功!" };
  } catch (err) {
    console.log(err);
    return { error: "類別新增失敗，標題與代稱都需正確填寫" };
  }
};

export const editCategory = async (prevState, formData) => {
  const {id, title, slug, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    let lowerSlug = slug.toLowerCase();

    await Category.findByIdAndUpdate(id, {
      title,
      slug: lowerSlug,
      img
    });    
    revalidatePath("/category");    
    return { success: "類別編輯成功!" };
  } catch (err) {
    console.log(err);
    return { error: "類別編輯失敗，標題與代稱都需正確填寫" };
  }  
};

export const deleteCategory = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    let targetCategory = await Category.findById(id);

    // 找到所有帶有目標類別的商品
    let foundProducts = await Product.find({
      categories: { $in: [targetCategory.title] },
    });
    // 更新商品的類別陣列，將目標類別過濾掉
    foundProducts.forEach(async (product) => {
      product.categories = product.categories.filter(
        (category) => category !== targetCategory.title
      );
      await product.save();
    });

    //刪除此類別
    await Category.findByIdAndDelete(id);
    revalidatePath("/works");
    revalidatePath("/works/manage");
    revalidatePath("/works/[slug]");
    revalidatePath("/category");
  } catch (err) {
    console.log(err);
    return { error: "無法刪除" };
  }
  redirect("/category");
};

export const addProduct = async (prevState, formData) => {
  const {
    title,
    duration,
    tools,
    desc,
    img,
    url,
    photos,
    slug,
    userId,
    categories,
    duty,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const parsedImages = photos.split(","); // 使用逗號拆分字串為陣列
    const parsedCategories = categories.split(","); // 使用逗號拆分字串為陣列

    const newProduct = new Product({
      title,      
      duration,
      tools,
      desc,
      img,
      url,
      public: false,
      photos: parsedImages,
      slug,
      userId,
      categories: parsedCategories,
      duty,
    });
    console.log(newProduct);
    await newProduct.save();
    revalidatePath("/works/(tabs)/manage");
    revalidatePath("/works");
  } catch (err) {
    console.log(err);
    return { error: "儲存商品時發生錯誤!" };
  }
  redirect("/works/manage");
};

export const editProduct = async (prevState, formData) => {
  const {
    id,
    title,
    tools,
    duration,
    desc,
    img,
    url,
    photos,
    slug,
    userId,
    categories,
    duty,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const parsedImages = photos.split(",");
    const parsedCategories = categories.split(",");    

    await Product.findByIdAndUpdate(id, {
      title,
      duration,
      tools,
      desc,
      img,
      url,
      photos: parsedImages,
      slug,
      userId,
      categories: parsedCategories,
      duty,
    });
    revalidatePath("/works/manage");
    revalidatePath("/works");
    revalidatePath(`/works/${slug}`);
    revalidatePath(`/works/${slug}/edit`);
  } catch (err) {
    console.log(err);
    return { error: "儲存修改商品內容時發生錯誤!" };
  }
  redirect("/works/manage");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();     
    await Product.findByIdAndDelete(id);    
    revalidatePath("/works/manage");
    
  } catch (err) {
    console.log(err);
    return { error: "無法刪除!" };
  }
  return redirect("/works/manage");
}



//上下架商品章用
export const toggleShelves = async(formData) => {  
  try {
    const { id } = Object.fromEntries(formData);
    
    connectToDb();
    const foundProduct = await Product.findById(id);    
    foundProduct.public = !foundProduct.public;    
    await foundProduct.save();

    revalidatePath("/works");
    revalidatePath("/works/manage");
    return redirect("/works");
  } catch (err) {
    console.log(err);
    return { error: "上下架時發生錯誤!" };
  }
  
  
};

