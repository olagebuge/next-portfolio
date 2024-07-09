import CategoryForm from "@/components/categoryForm/CategoryForm";
import { getCategoryById, getMedias  } from "@/lib/data";

const CateEditPage = async ({ params }) => {
  const { id } = params;
  const category = await getCategoryById(id);
  const medias = await getMedias();

  return (
  <div className="container">
    <CategoryForm media={medias} editcategory={category}/>
  </div>
  );
};

export default CateEditPage;
