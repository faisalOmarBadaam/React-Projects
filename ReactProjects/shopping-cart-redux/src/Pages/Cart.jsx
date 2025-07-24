import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductTitle from "../Components/productTitle";

export default function Cart() {
  const [totalCart, SetTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const total = cart.reduce((total, product) => total + product.price, 0);
    SetTotalCart(total);
  }, [cart]);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="min-h-[80vh] grid sm:grid-cols-1 md:grid-cols-2 space-x-5 space-y-10 lg:grid-cols-3 max-w-6xl mx-auto p-3">
        {cart.map((item, index) => (
          <ProductTitle key={index} product={item} />
        ))}
      </div>
      <div className="mb-4">total Amount = {totalCart}</div>
    </div>
  );
}
