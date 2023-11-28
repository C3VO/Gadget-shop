import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGoods } from "../../store/goodsSlice";

function Categories() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3500/getCategories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  const handleCategoryClick = (category) => {
    // При клике на категорию вызываем новый action для загрузки товаров с сервера с учетом выбранной категории
    dispatch(fetchGoods({ category }));
  };

  return (
    <>
      <div className="uppercase font-semibold">Каталог товаров:</div>
      <ul className="list-none">
        {categories.map((category) => (
          <li key={category}>
            <a href="#!" onClick={() => handleCategoryClick(category)}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
