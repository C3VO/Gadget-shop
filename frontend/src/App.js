import "./App.css";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import GoodsList from "./components/Goods/GoodsList";
import Goods from "./components/Goods/Goods";

import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Router>
        <Header />
        <Catalog />
        <Routes>
          <Route path="/" element={<GoodsList />} />
          <Route path="/product/:id" element={<Goods />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
