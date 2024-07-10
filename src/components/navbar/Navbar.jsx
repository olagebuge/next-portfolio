import UserAvatar from "@/components/navbar/links/userAvatar/UserAvatar";
import Links from "./links/Links"
import Image from "next/image";
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";
import Link from "next/link";


const Navbar = async () => {

  const session = await auth();    
  const foundUser = await getUser(session?.user.email);  

  return (
    <div className={styles.container}>
      <Link href="/">
      <div className={styles.logoContainer}>
        <Image src="/android-chrome-192x192.png" fill quality={100} alt="首頁連結圖片"/>
      </div>        
      </Link>   
      <Links/>      
      <UserAvatar foundUser={foundUser}/>
    </div>
  )
}

export default Navbar