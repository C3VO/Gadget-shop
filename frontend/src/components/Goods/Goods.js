import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGoods } from "../../store/goodsSlice";

function Goods() {
  const { id } = useParams();
  const goods = useSelector(selectGoods);
  const selectedGood = goods.find((item) => String(item.id) === id);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
            <div className="flex basis-7/12 justify-center bg-white w-1/2 my-4 border-b-4 rounded-br-lg border-blue-300">
              <img
                className="max-h-96 max-w-96 p-6"
                src={selectedGood.image}
                alt={selectedGood.title}
              />
            </div>
            <div className="flex pt-12 flex-col justify-around basis-2/12 items-center  bg-white w-1/2 m-4 border-b-4 rounded-br-lg border-blue-300">
              <div>
                <p>Цена за единицу:</p>
                <p className=" font-bold text-3xl ">{selectedGood.price} UAH</p>
              </div>

              <button
                className="text-white w-10/12 bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-br-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-600 uppercase"
                data-key={selectedGood.id}
              >
                Купить
              </button>
            </div>
            <div className="flex flex-col basis-3/12 items-center  bg-white w-1/2 my-4 border-b-4 rounded-br-lg border-blue-300 text-sm">
              <div className="flex flex-row basis-1/6">
                <div className="uppercase font-bold text-gray-700">
                  Доставка:
                </div>
                <div className="flex  text-gray-500">
                  Ваш город:
                  <div>
                    <div>
                      <button
                        className="text-blue-300"
                        onClick={toggleVisibility}
                      >
                        Киев
                      </button>
                      {isVisible && (
                        <div>
                          <div className="flex flex-row flex-wrap w-96 h-80">
                            <ul className="grid-cols-3">
                              <li class="active">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23562"
                                >
                                  Киев
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23639"
                                >
                                  Бровары
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23569"
                                >
                                  Винница
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23566"
                                >
                                  Днепр
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="31369"
                                >
                                  Житомир
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="7532"
                                >
                                  Запорожье
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23581"
                                >
                                  Ивано-Франковск
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23953"
                                >
                                  Краматорск
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23637"
                                >
                                  Кременчуг
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23574"
                                >
                                  Кропивницкий
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23624"
                                >
                                  Лубны
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23590"
                                >
                                  Луцк
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23567"
                                >
                                  Львов
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="15788"
                                >
                                  Николаев
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23613"
                                >
                                  Одесса
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23857"
                                >
                                  Полтава
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23629"
                                >
                                  Сумы
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23599"
                                >
                                  Тернополь
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23563"
                                >
                                  Харьков
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="39264"
                                >
                                  Херсон
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23950"
                                >
                                  Черкассы
                                </a>
                              </li>
                              <li class="">
                                <a
                                  href="#"
                                  class="city_selector"
                                  data-cityid="23651"
                                >
                                  Чернигов
                                </a>
                              </li>
                            </ul>
                            <div class="br-my-p">
                              <button type="button" class="br-myp-b">
                                <span>Определить мое местоположение</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-2/6">Самовывоз из магазина</div>
              <div className="basis-2/6">В отделение Новая Почта</div>
              <div className="basis-2/6">Курьером</div>
            </div>
          </div>
          <div className="flex flex-row justify-around border-b-4 rounded-br-lg border-blue-300 bg-white">
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
