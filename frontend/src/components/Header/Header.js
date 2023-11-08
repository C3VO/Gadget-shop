function Header() {
  function shopHandler() {}
  return (
    <div
      className=" flex justify-between h-10 text-center 
     bg-blue-300 tracking-tighter text-black font-semibold md:text-lg"
    >
      <a href="/">
        <div className="basis-1/3 border-2 border-black">GADGETS</div>
      </a>
      <div className="basis-1/3 border-2 border-black">Lang</div>
      <button onClick={shopHandler}>
        <div className="basis-1/3 border-2 border-black">Shop</div>
      </button>
    </div>
  );
}

export default Header;
