import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGoods } from "../../store/goodsSlice";

function Goods() {
  const { id } = useParams();
  const goods = useSelector(selectGoods);
  const selectedGood = goods.find((item) => String(item.id) === id);

  return (
    <>
      {selectedGood && (
        <div className="flex flex-col">
          <div className="w-lg my-6">
            <p className="font-bold text-2xl tracking-normal">
              {selectedGood.title}
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex basis-7/12 justify-center bg-white w-1/2 m-4 border-b-4 rounded-lg border-blue-300">
              <img
                className="max-h-96 max-w-96 p-6"
                src={selectedGood.image}
                alt={selectedGood.title}
              />
            </div>
            <div className="flex pt-12 flex-col justify-around basis-2/12 items-center  bg-white w-1/2 m-4 border-b-4 rounded-lg border-blue-300">
              <div>
                <p>Цена за единицу:</p>
                <p className=" font-bold text-3xl ">{selectedGood.price} UAH</p>
              </div>

              <button
                className="text-white w-10/12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                data-key={selectedGood.id}
              >
                BUY!
              </button>
            </div>
            <div className="flex flex-col basis-3/12 items-center  bg-white w-1/2 m-4 border-b-4 rounded-lg border-blue-300"></div>
          </div>
          <div className="flex flex-row justify-around border-b-4 rounded-lg border-blue-300 bg-white">
            <div className="basis-1/2 text-center">
              <p>Характеристики</p>
            </div>
            <div className="basis-1/2  text-center">
              <p>Отзывы</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Goods;
