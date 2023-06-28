
import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'antd'
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './HomeBanner.css'
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductApi } from '../../Redux/Reducer/productReducer';
import { NavLink, useParams } from 'react-router-dom';





export const HomeBanner = () => {
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const params = useParams();
    const getProductBannerApi = async () => {
        const actionAsync = getAllProductApi();
        dispatch(actionAsync);
    }


    useEffect(() => {
        getProductBannerApi();
        console.log('arrProduct', arrProduct);
    }, [])

    return (
        < >
            <Swiper

                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}

                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >


                {arrProduct?.map((item) => {
                    return <SwiperSlide key={item.id}>
                        {/* <Row >
                            <Col lg={12} md={24} sm={24} xs={24} className='mt-5'>
                                <div className="title" data-swiper-parallax="-300">
                                    {item.name}
                                </div>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    {item.shortDescription}
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        {item.description}
                                    </p>

                                    <NavLink to={`/productdetail/${item.id}`}>
                                        <Button size='large' danger type='primary' >Add to Bag</Button>
                                    </NavLink>

                                </div>

                            </Col>
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="image" data-swiper-parallax="-300">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            </Col>
                        </Row> */}
                        <div className="home-banner-container p-3">
                            <div className="row text-center align-items-center">
                                <div className="col-lg-6 col-12">
                                    <p className="brandname fs-4">{item.name}</p>
                                    <h3 className='display-2'>Summer Sale</h3>
                                    <p className='text-white text-uppercase' style={{fontSize: '150px'}}> Products</p>
                                </div>
                                <div className="col-lg-6 col-12 text-lg-end text-sm-center">
                                    <img src={item.image} alt="shoes" className="home-banner-image" width={"400px"}/>
                                    <div className="desc">
                                        <h5>Description</h5>
                                        <p>{item.shortDescription}</p>
                                        <NavLink to={`/productdetail/${item.id}`}>
                                            <button type="button">More Detail</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                })}


            </Swiper>


        </>
    )
}
