import Image from "next/image";
import styles from "./home.module.css";

const stacks = [
  { imgurl: "/icons/node.png", name: "Node.js"},
  { imgurl: "/icons/React.png", name: "React.js"},
  { imgurl: "/icons/Nextjs.png", name: "Next.js"},
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
      <section>
        <div className="container flex">
          <div className="imageContainerRound">
            <Image src="/my_avatar.webp" width={200} height={200} quality={100} alt="AVATAR"/>
          </div>
          <div className="textContainer">            
            <h1 className="h1Title">Hello, 我是Yummy</h1>
            1990年出生於台中市，我是近一兩年透過購買線上課程，自學Node.js、React.js、以及Next.js等javasript框架的『前』視覺設計師。在此之前，我只會單純的HTML及CSS，工作也以設計為主，上一份工作激發了我對程式的興趣。另外在轉職過程中，也陸續接了一些網站製作外包，不過案件委託仍以wordpress居多，請前往觀看我的作品。
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="container">
            <h2 className="h2Title">工具箱<span className="subtitle">My Stack</span></h2>
            <div className="flexBox icongap">
              {stacks.map((stack) => (
                <div key={stack.name} className={styles.icon_center}>
                  <div className="icon-container">
                    <Image src={stack.imgurl} width={60} height={60} alt="stack_icons" className="fix-size"/>
                  </div>
                  <p>{stack.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;