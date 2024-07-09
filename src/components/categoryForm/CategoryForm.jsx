"use client";

import { addCategory, editCategory } from "@/lib/action";
import { useFormState } from "react-dom";
import { FaPlus, FaPen } from "react-icons/fa6";
import ImgSelectButton from "../imgSelectButton/ImgSelectButton";
import RegexStatus from "@/components/regexStatus/RegexStatus";
import styles from "./categoryForm.module.css";

const CategoryForm = async ({ media, editcategory }) => {
  const [state, formAction] = useFormState(
    editcategory ? editCategory : addCategory,
    undefined
  );

  return (
    <div className={styles.container}>
      <h2 className="alignTitle">
        {editcategory? <><FaPen /> 編輯類別</>:<><FaPlus /> 新增類別</>}
      </h2>
      <p className="description">{state?.error}</p>
      <form action={formAction} className="formContiner">
        <input type="hidden" name="id" value={editcategory ? editcategory._id: ""} />
        <div className="rowInput">
          <label htmlFor="title">名稱</label>
          <input
            type="text"
            name="title"
            placeholder="專案分類名稱，例如：網頁"
            defaultValue={editcategory ? editcategory.title : ""}
            required
          />
        </div>
        <RegexStatus productSlug={editcategory ? editcategory.slug : ""}/>
        <div className="rowInput">
          <label htmlFor="img">圖片</label>
          <ImgSelectButton
            media={media}
            btnText={"選擇"}
            desText={"請選擇1張圖片作為類別的代表封面"}
            productCover = {editcategory ? editcategory.img : ""}         
          />
        </div>
        <button className="normalButton">確認{editcategory?"變更":"新增"}</button>
      </form>
    </div>
  );
};

export default CategoryForm;
