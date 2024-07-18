import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const stacks = [
  { imgurl: "/icons/node.png", name: "Node.js" },
  { imgurl: "/icons/React.png", name: "React.js" },
  { imgurl: "/icons/Nextjs.png", name: "Next.js" },
  { imgurl: "/icons/tailwindCSS.png", name: "TailwindCSS" },
  { imgurl: "/icons/mongodb.svg", name: "MongoDB" },
  { imgurl: "/icons/vercel.svg", name: "Vercel" },
  { imgurl: "/icons/giticon.png", name: "Github" },
  { imgurl: "/icons/Visual_Studio_Code_1.35_icon.svg", name: "VS code" },
  { imgurl: "/icons/wordpress.png", name: "Wordpress" },
  { imgurl: "/icons/elementor.png", name: "Elementor" },
  { imgurl: "/icons/figma.png", name: "Figma" },
  { imgurl: "/icons/adobe_xd.png", name: "Adobe XD" },
  { imgurl: "/icons/adobe_ps.png", name: "Adobe PS" },
  { imgurl: "/icons/adobe_ai.png", name: "Adobe AI" },
  { imgurl: "/icons/adobe_pr.png", name: "Adobe PR" },
  { imgurl: "/icons/blender.png", name: "Blender" },
];

const Home = () => {
  return (
    <>
      
        <div className={`container ${styles.flexStart}`}>
          <div className="imageContainerRound">
            <Image
              src="/my_avatar.jpg"
              width={200}
              height={200}
              quality={100}
              alt="AVATAR"
            />
          </div>
          <div className="textContainer">
            <h1 className="h1Title"><span className="subtitle">最佳組合</span> 全端ｘ資深視覺</h1>
            <p className="z5">
              我是Yummy，我在網頁視覺設計領域有多年經驗，也使用Node.js、express、React.js、Next.js等框架建構及佈署網站，
              更熟悉wordpress及Google各項服務的運用，詳細內容請看<a href="https://github.com/olagebuge" className="text-orange">gitHub</a>或專案介紹頁。
            </p>
            <div className="flexBall">
              <div className="moveBall">
                <Image
                  src="/colorfulbg.png"
                  alt="彩色背景"
                  width={800}
                  height={800}
                  className="colorbg"
                />
              </div>
              <Link href="works" className="words">
                <span className="desc">點我</span>GO<span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
            <h2 className="h2Title">
              工具箱<span className="subtitle">My Stack</span>
            </h2>
            <div className="flexBox icongap">
              {stacks.map((stack) => (
                <div key={stack.name} className={styles.icon_center}>
                  <div className="icon-container">
                    <Image
                      src={stack.imgurl}
                      width={60}
                      height={60}
                      alt="stack_icons"
                      className="fix-size"
                    />
                  </div>
                  <p>{stack.name}</p>
                </div>
              ))}
            </div>
        </div>        
      
    </>
  );
};

export default Home;
