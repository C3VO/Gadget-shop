import Catalog from "../Catalog/Catalog";
import GoodsList from "../Goods/GoodsList";

export default function Main() {
  return (
    <div>
      <Catalog />
      <div className="uppercase font-bold text-center pt-4 text-3xl">
        <p>Умные покупки</p>
      </div>
      <GoodsList />
    </div>
  );
}
