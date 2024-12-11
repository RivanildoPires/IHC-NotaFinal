import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PaginaProdutos.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 2, name: 'Mouse Gamer HAVIT', model: 'HV-MS9001', category: 'mouses', image: '/image.png', specs: { processor: '', memory: '', hd: '', gpu: '', os: '', battery: '6 hours' } },
    { id: 1, name: 'Notebook Gamer Acer Nitro 16', model: 'AN515-52', category: 'notebooks', image: '/notebook.png', specs: { processor: 'Intel Core i7', memory: '16 GB', hd: '1 TB', gpu: 'NVIDIA RTX 3060', os: 'Windows 11', battery: '8 hours' } },
    { id: 4, name: 'Monitor Gamer LG', model: 'UltraGear 24', category: 'monitors', image: '/61aIuJu0M0L.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png', specs: { processor: '', memory: '', hd: '', gpu: 'Integrated Graphics', os: 'Universal', battery: '' } },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className="product-page">
      <header className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          &#8592; Voltar
        </button>
        <h1 className="title">Maciel Variedades</h1>
      </header>
      <div className="content">
        <div className="product-gallery">
          <img src={product.image} alt="Produto principal" className="main-image" />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p><strong>Modelo:</strong> {product.model}</p>
          <ul className="specs">
            <li><strong>Processador:</strong> {product.specs.processor || 'N/A'}</li>
            <li><strong>Memória:</strong> {product.specs.memory || 'N/A'}</li>
            <li><strong>HD:</strong> {product.specs.hd || 'N/A'}</li>
            <li><strong>Placa de vídeo:</strong> {product.specs.gpu || 'N/A'}</li>
            <li><strong>Sistema Operacional:</strong> {product.specs.os || 'N/A'}</li>
            <li><strong>Bateria:</strong> {product.specs.battery || 'N/A'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
