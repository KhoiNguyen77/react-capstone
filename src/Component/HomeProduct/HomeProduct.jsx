import React, { useEffect, useState } from 'react'
import { Avatar, Card, Col, Divider, Row, Space, message } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAction, getAllProductApi, getProductFavoriteApi } from '../../Redux/Reducer/productReducer';
import { NavLink, useParams } from 'react-router-dom';
import './HomeProduct.css'
import { http, httpNonAuth } from '../../util/config';
import { customNavigate } from '../..';
const { Meta } = Card;
const HomeProduct = () => {
    const { arrProduct } = useSelector(state => state.productReducer);
    const [arrFavorite, setArrFavorite] = useState([])
    const [productAdidas, setProductAdidas] = useState([]);
    const [productNike, setProductNike] = useState([]);
    const [productVan, setProductVan] = useState([]);
    let { userLogin } = useSelector(state => state.userReducer);
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();

    const getProductAdidas = async () => {
        const res = await httpNonAuth.get('/api/Product/getProductByCategory?categoryId=ADIDAS');
        if (res) {
            setProductAdidas(res.data.content);
        }
    }
    const getProductNike = async () => {
        const res = await httpNonAuth.get('/api/Product/getProductByCategory?categoryId=NIKE');
        if (res) {
            setProductNike(res.data.content);
        }
    }
    const getProductVan = async () => {
        const res = await httpNonAuth.get('/api/Product/getProductByCategory?categoryId=VANS_CONVERSE');
        if (res) {
            setProductVan(res.data.content);
        }
    }

    const getProductFavorite = async () => {
        let res = await http.get('/api/Users/getproductfavorite');
        setArrFavorite(res.data.content);
        console.log(res.data);
    }
    const getProductApi = async () => {
        const actionAsync = getAllProductApi();
        dispatch(actionAsync);
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Success !!!',
            duration: 5,
        });
    };
    const checkLogin = () => {
        if (userLogin == null) {
            customNavigate.push('/login')
        } else {
            return
        }
    }

    useEffect(() => {
        getProductApi();
        getProductAdidas();
        getProductNike();
        getProductVan();
        checkLogin();
    }, [])



    return (
        <div className='container mt-5'>

            <h2 className='text-center mb-5'>Product Categories</h2>
            {contextHolder}
            <Divider orientation="center"> <h1 className='text-dark '>ADDIAS</h1></Divider>

            <div class="row ">

                {productAdidas?.map((item) => {
                    return <div class="col-lg-4 col-md-6 mb-4" key={item.id}>
                        <div class="card carditem">
                            <div class="">
                                <img src={item.image}
                                    class="w-100 product-image" />

                                <div class="maskl">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5><span class="badge bg-primary ms-2">bestseller</span></h5>
                                    </div>
                                </div>
                                <div class="label-top  ">
                                    <HeartFilled className='col' onClick={() => {
                                        const filterItems = arrProduct.filter(item => item.email == arrFavorite.productsFavorite)
                                        getProductFavorite(filterItems);
                                        success()
                                    }} />
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">{item.name}</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>{item.shortDescription}</p>
                                </a>
                                <div className="row text-center">
                                    <h6 class="mb-3 col price">{item.price}$</h6>
                                    <NavLink className='col-md-5 offset-md-4' to={`/productdetail/${item.id}`}><button className='btn btn-danger  align-item-left'> More Detail </button></NavLink>
                                </div>
                            </div>
                        </div>

                    </div>

                })}

            </div >
            <Divider orientation="center"> <h1 className='text-dark '>NIKE</h1></Divider>
            <div className="row">
                {productNike?.map((item) => {
                    return <div class="col-lg-4 col-md-6 mb-4" key={item.id}>
                        <div class="card carditem">
                            <div class="">
                                <img src={item.image}
                                    class="w-100 product-image" />

                                <div class="maskl">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5><span class="badge bg-primary ms-2">bestseller</span></h5>
                                    </div>
                                </div>
                                <div class="label-top  ">
                                    <HeartFilled className='col' onClick={() => {
                                        const filterItems = arrProduct.filter(item => item.email == arrFavorite.productsFavorite)
                                        getProductFavorite(filterItems);
                                        success()
                                    }} />
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">{item.name}</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>{item.shortDescription}</p>
                                </a>
                                <div className="row text-center">
                                    <h6 class="mb-3 col price">{item.price}$</h6>
                                    <NavLink className='col-md-5 offset-md-4' to={`/productdetail/${item.id}`}><button className='btn btn-danger  align-item-left'> More Detail </button></NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
            <Divider orientation="center"> <h1 className='text-dark '>VAN & CONVERSE</h1></Divider>
            <div className='row' >
                {productVan?.map((item) => {
                    return <div class="col-lg-4 col-md-6 mb-4" key={item.id}>
                        <div class="card carditem">
                            <div class="">
                                <img src={item.image}
                                    class="w-100 product-image" />

                                <div class="maskl">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5><span class="badge bg-primary ms-2">bestseller</span></h5>
                                    </div>
                                </div>
                                <div class="label-top  ">
                                    <HeartFilled className='col' onClick={() => {
                                        const filterItems = arrProduct.filter(item => item.email == arrFavorite.productsFavorite)
                                        getProductFavorite(filterItems);
                                        success()
                                    }} />
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">{item.name}</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>{item.shortDescription}</p>
                                </a>
                                <div className="row text-center">
                                    <h6 class="mb-3 col price">{item.price}$</h6>
                                    <NavLink className='col-md-5 offset-md-4' to={`/productdetail/${item.id}`}><button className='btn btn-danger  align-item-left'> More Detail </button></NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div >




        </div >
    )
}

export default HomeProduct