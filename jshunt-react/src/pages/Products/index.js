import React from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

class Product extends React.Component {
  state = {
    product: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`)
    this.setState({
      product: response.data
    })
  }

  render() {
    const { product } = this.state

    return (
      <div className='product'>
        <div className='product-info'>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>URL: <a href={product.url} target='_blank'>{product.url}</a></p>
        </div>
        <Link to='/' className='back'>Voltar para Home</Link>
      </div>
    )
  }
}

export default Product;