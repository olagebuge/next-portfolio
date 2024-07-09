import MediaCollection from "@/components/mediaCollection/MediaCollection";

export const metadata = {
  title: "媒體管理",
  description: "管理目前所有的媒體",
};

const ManageMediaPage = async() => {
    
  return (
    <div>
       <MediaCollection />
    </div>
  )
}

export default ManageMediaPage