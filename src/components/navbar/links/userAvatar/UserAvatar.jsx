"use client";

import { useState } from "react";
import ProfileSubMenu from "../profileSubMenu/profileSubMenu";
import NavLink from "../navLink/navLink";
import styles from "./userAvatar.module.css";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

const links =[
  {
    title: "經歷",
    path: "/info",
  },  
  {
    title: "作品",
    path: "/works",
  }
]

const UserAvatar = ({ foundUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {foundUser ? (
        <>          
          <ProfileSubMenu image={foundUser.image || "/noAvatar.png"} foundUser={foundUser}/>
        </>
      ) : (
        <>
          <div onClick={() => setOpen((prev) => !prev)} className={`pointer ${styles.menuButton}`}>            
            <Image src="/menu.svg" width={48} height={48} alt="hamburger"/>
          </div>
          {open && (
            <div className="overlay" onClick={() => setOpen(false)}>
            <div className={styles.mobileLinks}>
              <FaXmark onClick={() => setOpen(false)} className={styles.xmark}/>
              {links.map((link) => (
                <NavLink key={link.path} item={link}/>
              ))}
            </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserAvatar;
