import React from 'react';
import './Categories.css';

function Categories({ categories }) {
    return (
        <div className="container">
            <h1 className="title">Kategoriler</h1>
            <ul className="list">
                {categories.map((category) => (
                    <li key={category.id} className="list-item">
                        <a href={`/categories/${category.id}`} className="link">
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
