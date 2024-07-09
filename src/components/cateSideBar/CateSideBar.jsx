"use client";

import styles from "./cateSideBar.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CateSideBar = ({ cate, initialProducts }) => {
  const [selectCate, setSelectCate] = useState(null);
  const [products, setProducts] = useState(initialProducts);

  const onSelectCate = (cateName) => {
    setSelectCate(cateName);
    if (cateName === null) {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter((p) =>
        p.categories.includes(cateName)
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <>             
        <div className={`container ${styles.sideCates}`} >
          <div
            className={!selectCate ? styles.active : ""}
            onClick={() => onSelectCate(null)}
          >
            全部
          </div>
          {cate?.length
            ? cate.map((c) => (
                <div
                  onClick={() => onSelectCate(c.title)}
                  className={selectCate === c.title ? styles.active : ""}
                  key={c._id}
                >
                  {c.title}
                </div>
              ))
            : ""}          
        </div>
        <section className={styles.productBlock}>
          {products.map((product) => (
            <Link
              href={`/works/${product.slug}`}
              className={styles.productContainer}
              key={product._id}
            >
              <div className={styles.imgContainer}>
                {/* unoptimized不會進行優化圖片 或轉換圖片為webP */}
                <Image src={product.img} width={400} height={300} alt="專案封面" quality={100}/>
              </div>
              <h3>{product.title}</h3>              
            </Link>
          ))}
        </section>      
    </>
  );
};

export default CateSideBar;
