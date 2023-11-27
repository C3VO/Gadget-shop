import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/Gadget-shop/frontend/src/data/goods.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  console.log(categories);
  return (
    <>
      <div className="uppercase font-semibold">Каталог товаров:</div>
      <ul className="list-none">
        {categories.map((category) => (
          <li key={category}>
            <a href="!#">{category}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
