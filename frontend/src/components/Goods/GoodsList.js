import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchGoods,
  selectGoods,
  selectGoodsStatus,
  selectGoodsError,
} from "../../store/goodsSlice";
import Goods from "./Goods";

function GoodsList() {
  const goods = useSelector(selectGoods);
  const status = useSelector(selectGoodsStatus);
  const error = useSelector(selectGoodsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap bg-gray-100 px-7 py-2">
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
              className="text-white w-10/12 bg-blue-300 hover:bg-blue-300 focus:ring-4 focus:ring-gray-500 font-medium rounded-br-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-gray-300 uppercase"
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
