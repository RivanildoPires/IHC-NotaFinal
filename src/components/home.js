import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const categorias = [
    { id: 'notebooks', nome: 'Notebooks', imagem: '/note-removebg-preview.png' },
    { id: 'mouses', nome: 'Mouse', imagem: '/image.png' },
    { id: 'fones', nome: 'Fones', imagem: '/fone.webp' },
    { id: 'monitores', nome: 'Monitores', imagem: '/61aIuJu0M0L.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png' },
  ];

  const ofertas = [
    { id: 1, nome: 'Notebook Gamer Acer Nitro V', imagem: '/note-removebg-preview.png', descricao: 'Modelo: ANV15-51-57WS' },
    { id: 2, nome: 'Mouse Gamer HAVIT', imagem: '/image.png', descricao: 'Modelo: HV-MS1001' },
    { id: 3, nome: 'Fone Gamer Havit', imagem: '/fone.webp', descricao: 'Modelo: HV-H2232d' },
    { id: 4, nome: 'Monitor Gamer LG', imagem: '/61aIuJu0M0L.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png', descricao: 'Modelo: UltraGear 24' },
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/search?category=${categoryId}`); 
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="container-home">
      <header className="cabecalho-home">
        <h1>Maciel Variedades</h1>
        <input type="text" placeholder="Pesquisar" className="pesquisa-home" />
      </header>
      <section className="categorias-home">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-home" onClick={() => handleCategoryClick(categoria.id)}>
            <img src={categoria.imagem} alt={categoria.nome} />
            <p>{categoria.nome}</p>
          </div>
        ))}
      </section>
      <section className="melhores-ofertas-home">
        <h2>Melhores ofertas</h2>
        <div className="grade-ofertas-home">
          {ofertas.map((produto) => (
            <div key={produto.id} className="oferta-home" onClick={() => handleProductClick(produto.id)}>
              <div className="caixa-oferta-home">
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;