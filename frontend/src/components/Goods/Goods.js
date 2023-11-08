function Goods(props) {
  return (
    <div className="basis-1/5">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.price}</p>
      <button className="" data-key={props.id}>
        BUY!
      </button>
    </div>
  );
}

export default Goods;
