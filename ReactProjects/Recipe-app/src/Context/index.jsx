import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParm}`
      );
      const data = await response.json();

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setSearchParm("");
    }

    navigate(`/`);
  }
  function handleAddToFavorite(currentItem) {
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(
      (item) => item.id === currentItem.id
    );

    if (index === -1) {
      cpyFavoriteList.push(currentItem);
    } else {
      cpyFavoriteList.splice(index);
    }
    setFavoriteList(cpyFavoriteList);
  }
  const [searchParm, setSearchParm] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  return (
    <GlobalContext.Provider
      value={{
        searchParm,
        setSearchParm,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
