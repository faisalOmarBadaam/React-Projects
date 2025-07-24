import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ProductTitle from "../Components/productTitle";
export default function Home() {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchListOfProducts() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        data && setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchListOfProducts();
  }, []);

  return loading ? (
    <div className="min-h-screen w-full flex justify-center items-center">
      <ClipLoader color="rgb(127,29,29)" size={20} />
    </div>
  ) : (
    <div className="min-h-[80vh] grid sm:grid-cols-1 md:grid-cols-2 space-x-5 space-y-10 lg:grid-cols-3 max-w-6xl mx-auto p-3">
      {Products && Products.length > 0
        ? Products.map((item, index) => (
            <ProductTitle key={index} product={item} />
          ))
        : null}
    </div>
  );
}
