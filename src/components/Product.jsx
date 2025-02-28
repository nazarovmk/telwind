import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";

function Product({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-base-300 pt-0 pl-[20px] pb-[20px] pr-[7px] rounded-2xl cursor-pointer transition-transform duration-100 ease-in-out hover:translate-x-2 hover:-translate-x-2">
      <div className="relative inline-block">
        <img
          className="mb-2 flex w-[250px] h-[250px] items-center"
          src={product.images[0]}
          alt=""
        />
        <button
          className={`btn btn-circle absolute top-0 right-0 m-2 bg-white shadow-lg transition-colors duration-200 ${
            isLiked ? "text-red-500" : "text-gray-500"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[1.2em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      <Link to={"/product"}>
        <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
      </Link>
      <p className="text-lg font-bold text-gray-400 mb-2">
        ✨ {product.rating} - reyting
      </p>
      <p className="text-gray-500 font-medium">
        {product.discountPercentage} - chegirma
      </p>
      <span className="flex items-center justify-between">
        <p className="text-xl font-semibold">{product.price} - sum</p>
        <Link to={"/card"}>
          <FaShoppingBasket className="w-[30px] h-[30px]" />
        </Link>
      </span>
    </div>
  );
}

export default Product;
