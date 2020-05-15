import React from 'react';
import api from '../../services/api'

import './styles.css'

class Main extends React.Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadingProducts()
  }

  loadingProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;
    this.setState({
      products: docs,
      productInfo,
      page
    })
  }

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadingProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadingProducts(pageNumber)
  }

  render() {
    const { products, page, productInfo } = this.state

    return (
      <div className='product-list'>
        {products.map(product => (
          <article key={product._id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <a href="">Acessar</a>
          </article>
        ))}
        <div className='actions'>
          <button disabled={page === 1}onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    )
  }
}

export default Main;