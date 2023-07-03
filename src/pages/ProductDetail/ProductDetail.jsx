import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { http, httpNonAuth } from '../../util/config';
import { ShoppingCartOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Card, Col, Divider, Form, Row, Select, Space, message } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartAction } from '../../Redux/Reducer/productReducer';
import './ProductDetail.css'
import { logoURL } from '../../util/config';

const { Meta } = Card;
const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState({})
    const params = useParams();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Add to Cart Success',
            duration: 5,
        });
    };

    const getProductDetail = async () => {
        const res = await httpNonAuth.get(`/api/product/getbyid?id=${params.id}`);
        if (res) {
            setProductDetail(res.data.content);

        }
    }

    const handleChangeSize = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setProductDetail({
            ...productDetail,
            selectedSize: e.target.value
        })

    };

    useEffect(() => {
        //Call api
        getProductDetail();
    }, [params.id])



    return (
        <div>
            <div className='container p-4'>
                {contextHolder}
                <Divider orientation="left"> <h2 className='text-dark '>SHOE DETAIL</h2></Divider>
                <div className="row">

                    <div className="col-md-6 mb-4  bg-image">

                        <img src={productDetail.image} className="img-fluid" alt />
                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="p-4">
                            <div className="mb-3">
                                <a href>
                                    <span className="badge bg-dark me-1">Category 2</span>
                                </a>
                                <a href>
                                    <span className="badge bg-info me-1">New</span>
                                </a>
                                <a href>
                                    <span className="badge bg-danger me-1">Bestseller</span>
                                </a>
                            </div>
                            <p className="lead">
                                <span className="me-1">
                                    <del>$1000</del>
                                </span>
                                <span>{productDetail.price}</span>
                            </p>
                            <strong><p style={{ fontSize: 20 }}>{productDetail.name}</p></strong>
                            <p>{productDetail.description}{productDetail.shortDescription}</p>

                            <Space wrap className='mt-3'>
                                Choose size :
                                <select className="form-select" aria-label="Default select example" id="validationCustom04" required onChange={handleChangeSize} >

                                    {productDetail.size?.map((item) => {
                                        return <option defaultChecked value={item.selectedSize}>{item}</option>
                                    })}
                                </select>

                            </Space>
                            <p className='mt-2'>Avaliable: {productDetail.quantity}</p>

                            <button className="btn btn-primary ms-1 mt-4 d-block" required onClick={() => {
                                const action = addCartAction(productDetail);
                                dispatch(action);
                                console.log(action);
                                success();

                            }} >
                                Add to cart
                                <i className="fas fa-shopping-cart ms-1" />
                            </button>

                        </div>

                    </div>

                </div>

                <hr />

                <div className='mt-5'>
                    <h2>Related Product</h2>
                    <div class="row ">

                        {productDetail.relatedProducts?.map((item) => {
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
                                        <div class="label-top ">
                                            <HeartFilled className='col' onClick={() => {
                                                // const filterItems = arrProduct.filter(item => item.email == arrFavorite.productsFavorite)
                                                // getProductFavorite(filterItems);
                                                // success()
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
                </div>
            </div>
        </div >

    )
}

export default ProductDetail