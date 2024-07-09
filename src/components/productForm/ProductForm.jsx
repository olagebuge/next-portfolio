"use client";

import { addProduct, editProduct } from "@/lib/action";
import styles from "./productForm.module.css";
import { useFormState } from "react-dom";
import ImgSelectButton from "../imgSelectButton/ImgSelectButton";
import MultiImgSelect from "@/components/multiImgSelect/MultiImgSelect";
import CateTag from "../cateTag/CateTag";
import RegexStatus from "../regexStatus/RegexStatus";

const ProductForm = async ({ userId, media, cate, product }) => {
  const [state, formAction] = useFormState(
    product ? editProduct : addProduct,
    undefined
  );

  return (
    <div>
      <form action={formAction} className={styles.container}>
        <input type="hidden" name="id" value={product && product._id} />
        <input type="hidden" name="userId" value={product ? product.userId : userId} />
        <div className="rowInput">
          <label>專案名稱</label>
          <input
            type="text"
            name="title"
            placeholder="請填入專案名稱"
            defaultValue={product && product.title}
          />
        </div>
        <div className="rowInput">
          <label>專案期間</label>
          <input
            type="text"
            name="duration"
            placeholder="例：2023/05~2024/01"
            defaultValue={product && product.duration}
          />
        </div>
        <div className="rowInput">
          <label>使用工具</label>
          <input
            type="text"
            name="tools"
            placeholder="請填入使用工具"
            defaultValue={product && product.tools}
          />
        </div>
        <div className="rowInput">
          <label>職責</label>
          <input
            type="text"
            name="duty"
            placeholder="例：視覺設計"
            defaultValue={product && product.duty}
          />
        </div>
        <div className="rowInput">
          <label>範例網址</label>
          <input
            type="text"
            name="url"
            placeholder="例：https://sample.com"
            defaultValue={product && product.url}
          />
        </div>
        <CateTag
          cate={cate}
          productCate={
            product && product.categories[0] !== "" && product.categories
          }
        />
        <RegexStatus title={"專案代稱"} productSlug={product && product.slug} />
        <div className={styles.formImages}>
          <div className={styles.uploadBlock}>
            <h3>專案封面</h3>
            <ImgSelectButton
              btnText={"選擇"}
              desText={"請選擇一張專案封面"}
              media={media}
              productCover={product && product.img}
            />
          </div>
          <div className={styles.uploadBlock}>
            <MultiImgSelect
              btnText={"選擇"}
              desText={"請選擇專案配圖"}
              media={media}
              photos={product && product?.photos[0] !== "" && product.photos}
            />
          </div>
        </div>

       

        <textarea
          type="text"
          name="desc"
          placeholder="專案敘述"
          rows={10}
          defaultValue={product && product.desc}
        />
        <button>確認送出</button>
        {state?.error}
      </form>
    </div>
  );
};

export default ProductForm;
