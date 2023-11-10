import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGoods } from "../../store/goodsSlice";

function Goods() {
  const { id } = useParams();
  const goods = useSelector(selectGoods);
  const selectedGood = goods.find((item) => String(item.id) === id);

  if (!selectedGood) {
    return <p> </p>;
  }

  return (
    <div className="basis-1/5">
      <img src={selectedGood.image} alt={selectedGood.title} />
      <p className="font-bold">{selectedGood.title}</p>
      <p>{selectedGood.price}</p>
      <button className="" data-key={selectedGood.id}>
        BUY!
      </button>
    </div>
  );
}

export default Goods;
