import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../store/goodsSlice";
import Goods from "./Goods";
import { Link } from "react-router-dom";

function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap">
      {goods.map((item) => (
        <div key={item.id} className="w-1/5 p-4 bg-white border-black border-2">
          <Goods
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />

          <Link to={`/product/${item.id}`} className="font-bold">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GoodsList;
