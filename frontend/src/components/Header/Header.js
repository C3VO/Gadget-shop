function Header() {
  function shopHandler() {}
  return (
    <div
      className=" flex justify-between h-10 text-center 
    bg-blue-300 tracking-tighter text-black font-semibold md:text-lg items-center"
    >
      <a href="/">
        <div className="basis-3/12">GADGETS</div>
      </a>
      <div className="flex flex-row basis-6/12 text-sm font-normal ">
        <div className="basis-2/12">
          <a href="">Магазины</a>
        </div>
        <div className="basis-4/12">Программа лояльности</div>
        <div className="basis-2/12">Клиентам</div>
        <div className="basis-2/12">Сервис</div>
        <div className="basis-2/12">Акции</div>
      </div>
      <button onClick={shopHandler}>
        <div className="basis-3/12 ">Shop</div>
      </button>
    </div>
  );
}

export default Header;
