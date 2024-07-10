import UploadImages from "@/components/uploadImages/uploadImages";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "上傳媒體",
  description: "圖檔上傳頁面",
};

const MediaPage = async () => {  
  const session = await auth();
  const id = session.user?.id;

  return (         
      <div>
        <UploadImages id={id} />        
      </div>
    
  );
};

export default MediaPage;
