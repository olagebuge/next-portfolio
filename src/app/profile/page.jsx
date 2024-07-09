import { auth } from "@/lib/auth";
import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { getUser } from "@/lib/data";
import { FaUserPen } from "react-icons/fa6";

export const metadata = {
  title: "個人檔案",
  description: "yummy的profile",
};

const profilePage = async () => {
  const session = await auth();
  const foundUser = await getUser(session.user?.email); 
  

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.details}>
        {foundUser?.isAdmin ? (
          <span className={styles.roleTag}>網站管理員</span>
        ) : (
          <span className={styles.roleTag}>一般會員</span>
        )}
        <Image
          src={foundUser?.image || "/noAvatar.png"}
          alt="avatar"
          width={120}
          height={120}
          className={styles.avatar}
        />
        <p>{foundUser?.username}</p>
        <p>{foundUser?.email}</p>
        <Link
          href="/profile/edit"
          className={`${styles.editButton} ${styles.iconButton}`}
        >
          <FaUserPen /> 更改資訊
        </Link>
      </div>
    </section>
  );
};

export default profilePage;
