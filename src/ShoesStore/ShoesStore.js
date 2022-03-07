import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import shoesData from './ShoesData.json'
export default class BaiTapProps extends Component {

  state = {
    shoes: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }
  showInfo = (newShoes) => {
    this.setState({
      shoes: newShoes,
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <div className="list-group my-5">
              <button type="button" className="list-group-item list-group-item-action active " aria-current="true">
                Home
              </button>
              <button type="button" className="list-group-item list-group-item-action">Shop</button>

            </div>

          </div>
          <div className="col-10">
            <ProductList sanPham={shoesData} xemChiTiet={this.showInfo} />
            <Modal spChiTiet={this.state.shoes} />
          </div>
        </div>
      </div>
    )
  }
}
