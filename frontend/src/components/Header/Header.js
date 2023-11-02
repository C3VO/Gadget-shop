function Header() {
  function shopHandler() {}
  return (
    <div className="flex h-10 items-center text-center bg-blue-300 tracking-tighter text-black font-semibold md:text-lg">
      <a href="/">
        <div className="basis-1/5">LOGO</div>
      </a>
      <div className="flex basis-3/5">
        <div className="flex basis-1/3">1</div>
        <div className="flex basis-1/3">2</div>
        <div className="flex basis-1/3">3</div>
      </div>
      <div className="basis-1/5">Lang</div>
      <button onClick={shopHandler}>
        <div className="basis-1/5">Shop</div>
      </button>
    </div>
  );
}

export default Header;
