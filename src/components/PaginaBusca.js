import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './PaginaBusca.css';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const products = [
    { id: 1, name: 'Mouse Gamer HAVIT', model: 'HV-MS9001', category: 'mouses', image: '/image.png' },
    { id: 2, name: 'Notebook Gamer Acer Nitro 16', model: 'AN515-52', category: 'notebooks', image: '/notebook.png' },
    { id: 3, name: 'Notebook Gamer Acer Nitro 16', model: 'AN515-52', category: 'notebooks', image: '/notebook.png' },
    { id: 4, name: 'Notebook Gamer Acer Nitro V', model: 'ANV15-51-54DL', category: 'notebooks', image: '/notebook2.webp' },
    { id: 5, name: 'Mouse Gamer HAVIT', model: 'HV-MS9001', category: 'mouses', image: '/image.png' },
    { id: 6, name: 'Notebook Gamer Acer Nitro V', model: 'ANV15-51-54DL', category: 'notebooks', image: '/notebook2.webp' }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.model.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="homepage">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Voltar
        </button>

        <div className="logo">Maciel Variedades</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </header>

      <div className="content">
        <div className="category-filters">
          <h1>Eletrônicos:</h1>
          <button
            className={selectedCategory === 'notebooks' ? 'active' : ''}
            onClick={() => handleCategoryClick('notebooks')}
          >
            Notebooks
          </button>
          <button
            className={selectedCategory === 'mouses' ? 'active' : ''}
            onClick={() => handleCategoryClick('mouses')}
          >
            Mouses
          </button>
          <button
            className={selectedCategory === 'fones' ? 'active' : ''}
            onClick={() => handleCategoryClick('fones')}
          >
            Fones
          </button>
          <button
            className={selectedCategory === null ? 'active' : ''}
            onClick={() => handleCategoryClick(null)}
          >
            Mostrar Todos
          </button>
        </div>

        <div className="products">
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-item" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Modelo: {product.model}</p>
                  <Link to={`/product/${product.id}`}>Ver Detalhes</Link>
                </div>
              ))
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
