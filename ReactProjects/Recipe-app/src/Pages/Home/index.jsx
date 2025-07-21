import { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

export default function Home() {
  const { recipeList, Loading } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {Loading ? <p>data is coming babe</p> : null}
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold mt-20">
          There is no items to show!
        </div>
      )}
    </div>
  );
}
