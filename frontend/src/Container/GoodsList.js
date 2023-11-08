import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";

import Goods from "../components/Goods/Goods";
import { increment } from "../store/cartSlice";

/**
 * get data from store
 * list data
 */
function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("add-to-cart")) return true;
    dispatch(increment(t.getAttribute("data-key")));
  };

  return (
    <div className="flex flex-wrap">
      {goods.map((item) => (
        <div
          key={item.id}
          className="w-1/5 p-4  bg-white border-black border-2"
        >
          <Goods
            title={item.title}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
}

export default GoodsList;
