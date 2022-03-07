import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { spChiTiet } = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" style={{height:'200px'}} src={spChiTiet.image} alt="" />
                            <h4>{spChiTiet.name}</h4>
                            <h5>{spChiTiet.price}$</h5>
                            <p>{spChiTiet.description}</p>
                            <p className="text-danger">The remaining product: {spChiTiet.quantity}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
