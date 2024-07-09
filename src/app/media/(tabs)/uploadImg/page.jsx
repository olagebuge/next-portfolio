import UploadImages from "@/components/uploadImages/uploadImages";
import { auth } from "@/lib/auth";


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
