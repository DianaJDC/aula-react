import React from 'react';
import './App.css';

export default class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 6
    }
  }

  addToCart = () => {
    if (this.state.count > 0) {
      this.setState(() => ({
        count: this.state.count - 1
      }))
      alert("Compra bem sucedida")
    } else {
      alert("Produto sem estoque")
    }
  }
  render() {
  return (
    <div className="card">
      <div>
        <img alt="imagen" src="https://a-static.mlcdn.com.br/800x560/o-boticario-malbec-deo-colonia-100-ml-masculino-contem-1-unidade-por-embalagem-lojista-dos-perfumes/simplegroup/29b9ca747f9d11ecb13b4201ac185055/b0c48450552ffdd5eddfd5687a363413.jpeg"></img>
      </div>
      <div className="conteudo">
        <h5>PERFUME</h5>
        <h2>O Boticário Malbec Deo-colônia 100 ml</h2>
        <p>Uma fragrância para homens únicos não poderia ser criada como as outras.</p>
        <p>Estoq. {this.state.count}</p>
          <div className="preçocontainer">
            <div><strong>$329.99</strong></div>
            <div className="desconto">$399.99</div>
          </div>
        <button className="button" onClick={this.addToCart}><span class="material-symbols-outlined">shopping_cart</span>Add to cart</button>
      </div>
      </div>
  );
}
}
