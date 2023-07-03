import { Card, Col, Input, Row, message } from 'antd';
import axios from 'axios';
import { HeartFilled } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import { http, httpNonAuth } from '../util/config';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi } from '../Redux/Reducer/productReducer';
import ColumnGroup from 'antd/es/table/ColumnGroup';
const { Meta } = Card;
const { Search } = Input;
const SearchProduct = () => {
    const [arrProduct, setArrProduct] = useState([]);
    const [arrFavorite, setArrFavorite] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortOrder, setSortOrder] = useState('sort');
    const keywordRef = useRef('');
    const [messageApi, contextHolder] = message.useMessage();
    let keyword = searchParams.get('keyword');

    const getProductByKeyWord = async () => {
        console.log(keyword)
        let res = await httpNonAuth.get(`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`);
        if (res) {
            setArrProduct(res.data.content);
        }
    }

    useEffect(() => {
        if (keyword != 'null') {
            //gọi api khi word khác null
            getProductByKeyWord();
        }
    }, [keyword]);
    const handleChange = (e) => {
        let { value } = e.target;
        keywordRef.current = value;
        setSearchParams({
            keyword: keywordRef.current
        })

    }
    const getProductFavorite = async () => {
        let res = await http.get('/api/Users/getproductfavorite');
        setArrFavorite(res.data.content);
        console.log(res.data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('keyword', keywordRef.current)
        setSearchParams({
            keyword: keywordRef.current
        })

    }
    const SortItem = () => {

        if (arrProduct.length === 0) return
        const sortedData = arrProduct.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else if (sortOrder === 'desc') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

        setFilteredItems(sortedData);

    };

    const handleSortOrderChange = (e) => {
        setSortOrder(
            e.target.value
        );
    };

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Success !!!',
            duration: 5,
        });
    };
    useEffect(() => {

        SortItem();

    }, [arrProduct, sortOrder]);

    return (
        <div className='container'>

            <h3 className='text-center mt-4'>Find your Shoes</h3>

            {contextHolder}

            <form onSubmit={handleSubmit}>

                <div className="mb-3 row" >

                    <div className='input-group mb-3 col'>
                        <input className='form-control' id='txtTuKhoa' onChange={handleChange} />
                        <button type="submit" className="btn btn-outline-primary  ">Search</button>
                    </div>

                    <div className='col-auto'>
                        <select class="form-select" value={sortOrder} onChange={handleSortOrderChange}>
                            <option value='sort'>Sort Price</option>
                            <option value='asc'>High Price</option>
                            <option value='desc'>Low Price</option>
                        </select>
                    </div>
                </div>
                <h3>Search Results</h3>
                <hr />
                <div class="row ">

                    {filteredItems?.map((item) => {
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

                <div class="row ">

                    {arrProduct?.map((item) => {
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


            </form >

        </div >
    )
}

export default SearchProduct