import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../store/goodsSlice";
import Goods from "./Goods";
import { Link } from "react-router-dom";

function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap  px-7 py-2">
      {goods.map((item) => (
        <div
          key={item.id}
          className="flex flex-col grow w-1/6 p-6 bg-white m-1"
        >
          <img src={item.image} alt={item.title} />
          <Link to={`/product/${item.id}`}>{item.title}</Link>
          <div className="mt-auto font-bold mb-2">
            <p>{item.price} UAH</p>
          </div>
          <div className="pb-6">
            <button
              className="text-white w-10/12 mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              data-key={item.id}
            >
              BUY!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoodsList;
