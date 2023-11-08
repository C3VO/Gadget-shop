import "./App.css";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import GoodsList from "./Container/GoodsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Header />
      <Catalog />
      <GoodsList />
      <Footer />
    </div>
  );
}

export default App;
