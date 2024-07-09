import Image from "next/image";
import styles from "./singleProductPage.module.css";
import { getUser, getWorkBySlug } from "@/lib/data";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { FaPen,FaArrowRight } from "react-icons/fa6";



const singleProductPage = async ({ params }) => {
  const { slug } = params;
  const product = await getWorkBySlug(slug);

  const session = await auth();
  const foundUser = await getUser(session?.user.email);

  return (
    <div
      className={`${styles.container} ${
        product.photos[0] !== "" ? "" : styles.noPhoto
      }`}
    >
      <div className={styles.details}>

        <div className="flex">
          <h1 className={styles.productTitle}>《{product.title}》</h1>
          {foundUser?.isAdmin && (
            <Link
              href={`/works/${slug}/edit`}
              className={styles.editIcon}
            >
              <FaPen />
              編輯
            </Link>
          )}
        </div>
        <span>專案期間：{product.duration}</span>
        <span>職責：{product.duty}</span>
        <span>使用工具：{product.tools}</span>
        <div className={styles.bottomBlock}>
          {product.desc && (
            <div>
              <h3>專案敘述</h3>
              <p
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: product.desc }}
              />
            </div>
          )}

          <div className={styles.tagPools}>
            {product.categories &&
              product.categories.map((c, index) => (
                <span key={index} className={styles.cateTag}>
                  {c}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div>
        {product.photos[0] !== "" ? (
          product.photos.map((photo, index) => (
            <div key={index} className={styles.imgContainer}>
              <Image
                src={photo}
                layout="intrinsic" // 或者 "responsive" 根据需要选择
                width={600} // 固定宽度为 600px
                height={0} // 设置为 0，以便使用原始比例
                sizes="(max-width: 600px) 100vw, 600px" // 确保在不同屏幕尺寸下的表现
                alt="專案配圖"
              />
            </div>
          ))
        ) : (
          <>
            <div className={styles.imgContainer2}>
              <Image
                src={product.img}
                layout="intrinsic"
                width={400}
                height={0}
                sizes="(max-width: 300px) 100vw, 300px"
                alt="專案配圖"
              />
            </div>
            <p>職責非設計師，無配圖</p>
          </>
        )}
        <p>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow norefferer nooppener"
            className={styles.golook}
          >
            前往查看網站 <FaArrowRight />
          </a>
        </p>
      </div>
    </div>
  );
};

export default singleProductPage;
