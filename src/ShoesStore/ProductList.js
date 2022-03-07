import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {

    renderSanPham = () => {
        const {sanPham, xemChiTiet} = this.props;
        return sanPham.map((sp) => {
            return (
                <div className="col-4" key={`shoes${sp.id}`}>
                    <Product sanPham={sp}  xemChiTiet={xemChiTiet}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderSanPham()}
            </div>
        )
    }
}
