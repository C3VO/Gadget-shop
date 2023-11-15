function Footer() {
  return (
    <div>
      <footer className="flex flex-row bg-sky-950 text-white h-auto mb-auto mt-12 list-none">
        <div className="basis-1/5 flex flex-col justify-between">
          <p className="font-bold">Компании</p>
          <li>
            <a href="!#">Корпоративным клиентам</a>
          </li>
          <li>
            <a href="!#">Оптовым клиентам</a>
          </li>
        </div>
        <div className="basis-1/5 flex flex-col justify-between">
          <p className="font-bold">Покупателям</p>
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
        </div>
        <div className="basis-1/5">
          <p className="font-bold">Поддержка</p>
          <li>
            <a href="!#">Карта сайта</a>
          </li>
        </div>
        <div className="basis-1/5 flex flex-col justify-between ">
          <p className="font-bold">Магазины</p>
          <li>
            <a href="!#">Магазины сети</a>
          </li>
          <li>
            <a href="!#">Служебный вход</a>
          </li>
          <li>
            <a href="!#">Shops</a>
          </li>
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
