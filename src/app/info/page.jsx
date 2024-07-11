import Image from "next/image";
import styles from "./about.module.css";

import { WORKSTEPS, SOHOSTEPS } from "@/constants";
import CompanyCard from "@/components/companyCard/CompanyCard";

export const metadata = {
  title: "履歷 | INFO",
  description: "我的工作經歷",
};

const AboutPage = () => {
  return (
    <div className={`minHight ${styles.cotainer}`}>
      <div className={`${styles.textContainer} container`}>
        <h1 className="h2Title">
          <span className="tcTitle">歷程記錄</span><span className="subtitle">Experience</span>
        </h1>
        <div className="flexBox">
          國立臺灣科技大學
          <span className={styles.duration}>2009/09~2013/06</span>
          創意設計學士班 畢業
        </div>
        <h3 className={styles.deco}>希望職稱 = 前端工程師</h3>
      </div>
      <div className={`${styles.flexBall} ${styles.move}`}>
        <div className={`${styles.moveBall} ${styles.right}`}>
          <Image
            src="/colorfulbg.png"
            alt="彩色背景"
            width={800}
            height={800}
            className={styles.colorbg}
          />
        </div>        
        <div className={styles.stepWrap}>
          <div className={styles.introImg}>
            <Image src="/my-avatar.png" alt="履歷人物圖" width={240} height={240}/>
          </div>
          <ul className={`${styles.stepWrap} ${styles.soho}`}>
            {SOHOSTEPS.map((step, index) => (
              <CompanyCard
                soho
                key={index}
                time={step.time}
                duty={step.duty}
                content={step.content}
                company={step.company}
                desc={step.desc}
              />
            ))}
          </ul>
        </div>
        <div className={`${styles.words} ${styles.right}`}>Soho</div>
      </div>
      <div className={styles.flexBall}>
        <div className={styles.moveBall}>
          <Image
            src="/colorfulbg.png"
            alt="彩色背景"
            width={800}
            height={800}
            className={styles.colorbg}
          />
        </div>
        <div className={styles.words}>Work</div>
        <ul className={styles.stepWrap}>
          {WORKSTEPS.map((step, index) => (
            <CompanyCard
              key={index}
              time={step.time}
              duty={step.duty}
              content={step.content}
              company={step.company}
              desc={step.desc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
