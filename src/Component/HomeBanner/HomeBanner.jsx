
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
    }, [])

    return (
        < >
            <Swiper

                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",

                }}
                speed={600}
                parallax={true}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Pagination, Navigation, Autoplay, Parallax]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "background-image":
                            "url('./images/background.webp')",
                    }}
                    data-swiper-parallax="-23%"
                ></div>

                {arrProduct?.map((item) => {
                    return <SwiperSlide key={item.id}>

                        <div className="home-banner-container p-3">
                            <div className="row text-center align-items-center">
                                <div className="col-lg-6 col-12">
                                    <p className=" fs-4">{item.name}</p>
                                    <h3 className='display-2'>Summer Sale</h3>
                                    <p className='text-white text-uppercase productp' > Products</p>
                                </div>
                                <div className="col-lg-6 col-12 text-lg-end text-sm-center p-3">
                                    <img src={item.image} alt="shoes" className="mx-auto img-fluid" />
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
