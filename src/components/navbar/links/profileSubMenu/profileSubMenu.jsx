"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./profileSubMenu.module.css";
import { handleLogout } from "@/lib/action";
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const ProfileSubMenu = ({ image, foundUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
      <div
        className={styles.avatarContainer}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src={image} alt="user-avatar" fill className={styles.avatar} />
      </div>
      {open && (
        <div className={styles.subBox}>
          <Link href="/profile">個人檔案</Link>
          {foundUser.isAdmin && (
            <>
            <p className={styles.subTitle}>
              <hr /><span>管理</span></p>
            <Link href="/category">類別</Link>
            <Link href="/works/manage">專案</Link>
            <Link href="/media/manage">媒體</Link>
          </>
          )}
          <p className={styles.subTitle}>
            <hr />
          </p>
          <form action={handleLogout}>
            <button className="normalButton">
              <FaArrowRightFromBracket />
              登出
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileSubMenu;
