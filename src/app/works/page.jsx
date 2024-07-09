import { getCategory, getProduct } from "@/lib/data";
import CateSideBar from "@/components/cateSideBar/CateSideBar";

export const metadata = {
  title: "專案展示",
  description: "各項專案展示",
};

const WorksPage = async () => {
  const products = await getProduct();
  const publicProducts = products.filter((p) => p.public);
  const categories = await getCategory();

  return (
    <div>      
        <CateSideBar cate={categories} initialProducts={publicProducts}/>     
    </div>
  );
};

export default WorksPage;
