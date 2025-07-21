import { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold mt-20">
          There is no items to show!
        </div>
      )}
    </div>
  );
}
