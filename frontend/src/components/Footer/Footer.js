function Footer() {
  return (
    <div>
      <footer className="flex flex-row justify-around bg-sky-950 text-white h-40 mb-auto mt-12 list-none">
        <div className="basis-1/5 flex flex-col ">
          <p className="font-bold">Компании</p>
          <ul>
            <li>
              <a href="!#">Корпоративным клиентам</a>
            </li>
            <li>
              <a href="!#">Оптовым клиентам</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <p className="font-bold">Покупателям</p>
          <ul className="flex flex-col justify-between">
            <li>
              <a href="!#">Сервис и гарантия</a>
            </li>
            <li>
              <a href="!#">Доставка и оплата</a>
            </li>
            <li>
              <a href="!#">Программа лояльности</a>
            </li>
            <li>
              <a href="!#">Подарочные сертификаты</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <p className="font-bold">Поддержка</p>
          <ul>
            <li>
              <a href="!#">Карта сайта</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5 flex flex-col">
          <p className="font-bold">Магазины</p>
          <ul className="flex flex-col justify-around">
            <li>
              <a href="!#">Магазины сети</a>
            </li>
            <li>
              <a href="!#">Служебный вход</a>
            </li>
            <li>
              <a href="!#">Shops</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5">
          <div>Callback</div>
          <div>0800015100</div>
          <div>ГРАФИК РАБОТЫ КОЛЛ-ЦЕНТР</div>
          <div>ПН-ПТ: c 09:00 до 20:00</div>
          <div>СБ-ВС: c 10:00 до 19:00</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
