import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../Redux/Reducer/userReducer';
import { getAllProductApi } from '../Redux/Reducer/productReducer';
import { USER_PROFILE, getStoreJson } from '../util/config';
import { customNavigate } from '..';

const Order = () => {
    const profile = getStoreJson(USER_PROFILE);
    const dispatch = useDispatch();

    // const getOrderItem = async () => {
    //     const actionAsync = getAllProductApi();
    //     dispatch(actionAsync);
    //     console.log(actionAsync)
    // }
    const getUserProfile = async () => {
        const action = await getProfile();
        dispatch(action)
    }
    const tinhTongTungOrder = (orders = []) => {
        let sum = 0;
        orders.map(order => {
            sum += order.price;
        })
        return sum
    }
    let total = 0;
    const tinhTongOrder = (orders = []) => {

        orders.map(order => {
            console.log(order.orderDetail);
            order.orderDetail.forEach(item => {
                if (item.price) {
                    total += 0;
                }
            })
        })
        return total
    }
    useEffect(() => {
        getUserProfile();
    }, [])
    return (
        <section className="h-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card" style={{ borderRadius: 10 }}>
                            <div className="card-header px-4 py-5">
                                <h5 className="text-muted mb-0">Your Order History, <span style={{ color: '#a8729a' }}>{profile?.name}</span>!</h5>
                            </div>
                            {profile?.ordersHistory.map((item, index) => {
                                return <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Receipt ID: {item.id}</p>
                                        <p className="small text-muted mb-0">Receipt Date : {item.date} </p>
                                    </div>

                                    {item.orderDetail.map(item => {
                                        return <div className="card shadow-0 border mb-4">
                                            <div className="card-body">

                                                <div className="row">

                                                    <div className="col-md-2">
                                                        <img src={item.image} className="img-fluid" alt='shoes' />
                                                    </div>


                                                    <div className="col-md-2">

                                                    </div>

                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">{item.name}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">

                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Qty: 1</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">${item.price}</p>
                                                    </div>
                                                </div>
                                                <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-2">
                                                        <p className="text-muted mb-0 small">Track Order</p>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="progress" style={{ height: 6, borderRadius: 16 }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '65%', borderRadius: 16, backgroundColor: '#a8729a' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="d-flex justify-content-around mb-1">
                                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    })}


                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> ${tinhTongTungOrder(item.orderDetail)}</p>
                                    </div>
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Receipt ID : {item.id}</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $0.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Recepits Voucher : 18KU-{index}</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">GST</span> $0.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-5">
                                        <p className="text-muted mb-0">Customer Email : {item.email}</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                                    </div>
                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                </div>
                            })}

                            <div className="card-footer border-0 px-4 py-5" style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                    paid: <span className="h2 mb-0 ms-2">${tinhTongOrder(profile.ordersHistory)}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Order