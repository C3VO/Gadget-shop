function Header() {
  function shopHandler() {}
  return (
    <div
      className=" flex justify-around h-10 text-center 
    bg-white tracking-tighter text-black font-semibold md:text-lg items-center"
    >
      <a href="/">
        <div className="basis-3/12 font-bold tracking-wide border-b-4 rounded-br-lg border-blue-300">
          GADGETS
        </div>
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
        <div className="basis-3/12 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Header;
