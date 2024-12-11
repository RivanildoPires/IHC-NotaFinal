import React, { useEffect, useState } from "react"; 
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import './PaginaBusca.css';

const HomePage = () => {
  const [searchParams] = useSearchParams(); 
  const initialCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || null); 
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Mouse Gamer HAVIT', model: 'HV-MS9001', category: 'mouses', image: '/image.png' },
    { id: 2, name: 'Notebook Gamer Acer Nitro 16', model: 'AN515-52', category: 'notebooks', image: '/notebook.png' },
    { id: 3, name: 'Notebook Gamer Acer Nitro 16', model: 'AN515-52', category: 'notebooks', image: '/notebook.png' },
    { id: 4, name: 'Notebook Gamer Acer Nitro V', model: 'ANV15-51-54DL', category: 'notebooks', image: '/notebook2.webp' },
    { id: 5, name: 'Mouse Gamer HAVIT', model: 'HV-MS9001', category: 'mouses', image: '/image.png' },
    { id: 6, name: 'Notebook Gamer Acer Nitro V', model: 'ANV15-51-54DL', category: 'notebooks', image: '/notebook2.webp' },
  ];

  const filteredProducts = products.filter((product) => {
    return selectedCategory ? product.category === selectedCategory : true;
  });

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory); 
    }
  }, [initialCategory]);

  return (
    <div className="homepage">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <div className="logo">Maciel Variedades</div>
      </header>

      <div className="content">
        <div className="category-filters">
          <h1>Eletrônicos:</h1>
          <button
            className={selectedCategory === 'notebooks' ? 'active' : ''}
            onClick={() => navigate('/search?category=notebooks')}
          >
            Notebooks
          </button>
          <button
            className={selectedCategory === 'mouses' ? 'active' : ''}
            onClick={() => navigate('/search?category=mouses')}
          >
            Mouses
          </button>
          <button
            className={selectedCategory === 'fones' ? 'active' : ''}
            onClick={() => navigate('/search?category=fones')}
          >
            Fones
          </button>
          <button
            className={selectedCategory === null ? 'active' : ''}
            onClick={() => navigate('/search')}
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
                  {}
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