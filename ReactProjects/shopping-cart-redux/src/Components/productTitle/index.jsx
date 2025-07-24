import { useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../Store/Slices/Cart-Slice";
import { useSelector } from "react-redux";
export default function ProductTitle({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(AddToCart(product));
  }
  function handleRemoveFromCart() {
    dispatch(RemoveFromCart(product.id));
  }
  return (
    <div>
      <div className="Group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="">
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center justify-around w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="cursor-pointer bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove From Cart"
              : "Add To Cart"}
          </button>
          <span className="text-md text-gray-700">{product.price}$</span>
        </div>
      </div>
    </div>
  );
}
