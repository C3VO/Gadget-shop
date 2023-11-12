import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Goods from "./components/Goods/Goods";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-200">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/product/:id" element={<Goods />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
