import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../BackendApi/Api';
import '../Css/main.css';

const CategoryDetail = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory(id);
        setCategory(data.categories); 
      } catch (error) {
        console.error('Kategori detayı yüklenirken hata oluştu:', error);
      }
    };

    fetchCategory();
  }, [id]);

  if (!category) {
    return <p>Kategori detayı yükleniyor...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">{category.name}</h1>
      <h2>Postlar:</h2>
      {category.posts && category.posts.length > 0 ? (
        <ul>
          {category.posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu kategoride henüz post bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default CategoryDetail;
