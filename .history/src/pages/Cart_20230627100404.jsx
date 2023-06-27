import React, { useEffect } from 'react'
import { Avatar, Button, Card, Col, Row, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantityAction, delCartAction, getAllProductApi } from '../Redux/Reducer/productReducer';
export const Cart = () => {
    const { cart } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const getProductApi = async () => {
        const actionAsync = getAllProductApi();
        dispatch(actionAsync);
    }
    const tinhTong = () => {
        let sum = 0;
        for (let item of cart) {
            sum += item.quantity * item.price;
        } return sum
    }
    const tongSL = () => {
        let sum = 0;
        for (let item of cart) {
            sum += item.quantity;
        } return sum
    }

    useEffect(() => {
        getProductApi();

    }, [])
    return (
        <section>
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">

                                <h5 className="mb-0">Cart-{tongSL(cart)} items</h5>
                            </div>
                            <div className="card-body">
                                {/* Single item */}
                                {cart.map((item) => {
                                    return <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div className="bg-image rounded" >
                                                <img src={item.image} className="w-100" alt="Blue Jeans Jacket" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p><strong>{item.name}</strong></p>

                                            <p>Size: {item.selectedSize}</p>

                                            <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remove item" onClick={
                                                () => {
                                                    const action = delCartAction(item.id);
                                                    dispatch(action);
                                                }
                                            }>
                                                <i className="fas fa-trash" />
                                            </button>

                                            <button type="button" className="btn btn-danger btn-sm mb-2" title="Move to the wish list">
                                                <i className="fas fa-heart" />
                                            </button>
                                            {/* Data */}
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-2" style={{ maxWidth: 300 }}>
                                                <div className="form-group d-flex">
                                                    <button className="btn btn-primary me-2" onClick={() => {
                                                        const payload = {
                                                            id: item.id,
                                                            quantity: -1
                                                        }
                                                        const action = changeQuantityAction(payload);
                                                        dispatch(action);
                                                    }}><i className="fa fa-minus" />
                                                    </button>
                                                    <input id="form1" value={item.quantity} type="number" className="form-control text-center w-25" />
                                                    <button className="btn btn-primary mx-2 me-2" onClick={() => {
                                                        const payload = {
                                                            id: item.id,
                                                            quantity: 1
                                                        }
                                                        const action = changeQuantityAction(payload);
                                                        dispatch(action);
                                                    }}><i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Quantity */}
                                            {/* Price */}

                                            <p className="text-start text-md-center">
                                                <p>Quantity</p>
                                                <strong>${item.price}</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>
                                })}



                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <p><strong>Expected shipping delivery</strong></p>
                                <p className="mb-0">21.6.2023 - 14.10.2023</p>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body">
                                <p><strong>We accept</strong></p>
                                <img className="me-2" width="45px" src="./images/visa.svg" alt="Visa" />
                                <img className="me-3" width="45px" src="./images/mastercard-logo.png" alt="Mastercard" />
                                <img className="me-3" width="45px" src="./images/paypal-Logo.webp" alt="PayPal acceptance mark" />
                                <img className="me-3" width="45px" src="./images/momo-logo.png" alt="Mastercard" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products

                                        : <span>{tongSL(cart)}</span>

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Free</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">

                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span>
                                            <strong>
                                                ${tinhTong(cart)}
                                            </strong>
                                        </span>




                                    </li>
                                </ul>
                                <button type="button" className="btn btn-primary btn-lg ">
                                    Submit Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
