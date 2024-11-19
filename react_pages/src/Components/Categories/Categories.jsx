import React, { useState, useEffect } from 'react';
import '../Css/main.css';
import { getCategories } from '../BackendApi/Api';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.categories);
      } catch (error) {
        console.error('Kategoriler yüklenirken hata oluştu:', error);
      }
    };

    fetchCategories(); 
  }, []);

  return (
    <div className="container">
      <h1 className="title">Kategoriler</h1>
      <ul className="list">
        {/* Kategoriler varsa listele, yoksa mesaj göster */}
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id} className="list-item">
              <a href={`/categories/${category.id}`} className="link">
                {category.name}
              </a>
            </li>
          ))
        ) : (
          <p>Kategori bulunamadı.</p>
        )}
      </ul>
    </div>
  );
}

export default Categories;
