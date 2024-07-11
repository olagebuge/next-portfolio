"use client";
import { useState } from "react";
import styles from "./companyCard.module.css";
import { FaCaretDown } from "react-icons/fa6";

const CompanyCard = ({ soho, time, duty, company, content, desc }) => {
  const [open, setOpen] = useState(false);

  return (
    <li key={time} className={`relative ${soho ? styles.soho : ""}`}>
      <div className={styles.allDetail}>
        <h3 className={styles.date}>{time}</h3>
        <div className={styles.orangeGroup}>
          <div className={styles.orangeLine}></div>
          <div className={styles.orangeDot}></div>
        </div>
        <div className={styles.workDetail}>
          <h3>{company}</h3>
          <span>{duty}</span>
        </div>
      </div>

      <div onClick={() => setOpen((prev) => !prev)} className={styles.lookMore}>
        <span className={styles.orangeArrow}>
          <FaCaretDown />
          看內容
        </span>
        <div className={`${styles.overflowContainer} ${open ? styles.show : ""}`}>
        <div className={styles.workContent}>
          <p>{desc}</p>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
      </div>
     
    </li>
  );
};

export default CompanyCard;
