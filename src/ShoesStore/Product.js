import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {sanPham,xemChiTiet} = this.props;
        return (
            <div className="card my-3" style={{height: '450px'}}>
                <img src={sanPham.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:'16px'}}>{sanPham.name}</h5>
                    <p className="card-text">${sanPham.price}$</p>
                    <button  className="btn btn-dark" data-toggle="modal" data-target="#exampleModal" onClick={() => {xemChiTiet(sanPham)}}>See Details</button>
                </div>
            </div>

        )
    }
}
