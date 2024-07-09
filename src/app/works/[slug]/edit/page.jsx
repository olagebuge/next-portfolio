import ProductForm from "@/components/productForm/ProductForm";
import { getWorkBySlug,getMedias,getCategory } from "@/lib/data";
import { deleteProduct} from "@/lib/action";
import { FaFilePen } from "react-icons/fa6";
import styles from "./singleProductEdit.module.css"

// const getData = async (slug) => {
//     const res = await fetch(`${process.env.PRODUCT_URL}/${slug}`, {
//       next: { revalidate: 3600 },
//     });
//     if (!res.ok) {
//       throw new Error("發生一些錯誤");
//     }
//     return res.json();
// };

const SingleProductEditpage = async ({ params }) => {
  const { slug } = await params;
  const product = await getWorkBySlug(slug);
  const media = await getMedias()
  const cate = await getCategory();
 

  return (
  <div className={`container ${styles.container}`}>
    <h1 className="alignTitle"><FaFilePen />產品編輯頁面</h1>
    <ProductForm media={media} cate={cate} product={product}/>

    <form action={deleteProduct}>
        <input type="hidden" name="id" value={product._id}/>
        <button className="deleteBtn">刪除</button>
    </form>
  </div>)
};

export default SingleProductEditpage;
