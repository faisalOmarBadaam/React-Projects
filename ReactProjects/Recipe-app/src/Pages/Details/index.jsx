import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data.data) {
        setRecipeDetailsData(data.data);
      }
    }

    getRecipeDetails();
  }, []);

  if (!recipeDetailsData) return null;

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="w-full max-h-[500px] overflow-hidden rounded-xl shadow-md">
          <img
            src={recipeDetailsData.recipe.image_url}
            alt={recipeDetailsData.recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <span className="text-sm text-cyan-700 font-semibold uppercase">
              {recipeDetailsData.recipe.publisher}
            </span>
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              {recipeDetailsData.recipe.title}
            </h1>
          </div>

          <button
            onClick={() => handleAddToFavorite(recipeDetailsData.recipe)}
            className="self-start bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition-all uppercase text-sm tracking-wide"
          >
            {favoriteList.findIndex(
              (item) => item.id === recipeDetailsData.recipe.id
            ) !== -1
              ? "Remove from favorites"
              : "Save as favorite"}
          </button>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Ingredients:
            </h2>
            <ul className="space-y-3">
              {recipeDetailsData.recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="font-medium text-gray-600">
                    {ingredient.quantity || "-"} {ingredient.unit}
                  </span>
                  <span className="text-gray-800">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
