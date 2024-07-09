import { getProduct } from "@/lib/data";
import { toggleShelves} from "@/lib/action";
import styles from "./productManage.module.css";
import Link from "next/link";
import { FaFileCirclePlus, FaPen } from "react-icons/fa6";
import Image from "next/image";

export const metadata = {
  title: "專案管理",
  description: "管理目前所有的專案",
};


const ProductsManagePage = async () => {
  // FETCH DATA WITH AN API
  const products = await getProduct(); 

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={styles.h1Title}>
          專案管理
          <span className={styles.mediaHelp}>
            點選鉛筆圖示，可進行編輯或刪除，也可進行上下架管理
          </span>
        </h1>
        <Link href="/works/new" className={`aligButton ${styles.addButton}`}>
          <FaFileCirclePlus /> 新增專案
        </Link>
      </div>
      <div className={styles.productBlock}>
        {products.map((product) => (
          <div className={styles.productContainer} key={product._id}>
            <Link
              href={`/works/${product.slug}/edit`}
              className={styles.href}
            >
              <div className="imageContainer">
                <Image src={product.img} fill alt={"這我還想不到該怎麼辦"} />
              </div>
              <FaPen />
              <h3>{product.title}</h3>
              
            </Link>            

            <div className={styles.editIconList}>
              <div className={styles.status}>
                <span
                  className={`${styles.light} ${
                    product.public === false ? styles.red : ""
                  }`}
                ></span>
                {product.public === false ? "草稿" : "公開中"}
              </div>
              <form action={toggleShelves}>
                <input type="hidden" name="id" value={product._id} />
                <button
                  className={`${styles.drawft} ${
                    product.public === false ? styles.red : ""
                  }`}
                >
                  {product.public === false ? "上架" : "下架"}
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsManagePage;
