import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { USER_CART, USER_LOGIN, USER_PROFILE, getStoreJson, logoURL } from '../util/config';
import { getProfileAction, logInAction } from '../Redux/Reducer/userReducer';

const Header = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.productReducer);
    // const cart = getStoreJson(USER_CART) ? getStoreJson(USER_CART) : [];
    // console.log(cart);
    const { userProfile } = useSelector(state => state.userReducer)
    const profile = getStoreJson(USER_PROFILE);
    const getProfileLink = () => {
        if (profile == null) {
            return null
        } else {
            return <Avatar
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 70,
                    xxl: 75,
                }}
                src={profile.avatar}
            />

        }
    }
    const getLink = (route) => {

        if (profile == null) {
            // eslint-disable-next-line default-case
            switch (route) {
                case "/register": {
                    return <NavLink className="nav-link" to="/register">Register</NavLink>
                }
                case "/login": {
                    return <NavLink className="nav-link" to="/login">Login</NavLink>
                }

            }
        } else {
            return null
        }

    }
    const items = [
        {
            label: <NavLink className="nav-link mt-2" to="/profile">Profile</NavLink>,
            key: '0',
            icon: <UserOutlined />
        },
        {
            label: <NavLink className="nav-link mt-2" to="/order">Order History</NavLink>,
            key: '2',
        },
        {
            label: <NavLink className="nav-link mt-2" to="/update">Update Your Profile</NavLink>,
            key: '3',
        },
        {
            type: 'divider',
        },
        {
            label: <NavLink className="nav-link mt-2" to="/login" onClick={() => {
                signOut()
            }}>Sign Out</NavLink>,
            key: '4',
        },

    ]
    const signOut = () => {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(USER_PROFILE);
        const clearUser = logInAction(null)
        const clearProfile = getProfileAction(null);
        dispatch(clearUser);
        dispatch(clearProfile)
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
            <div className="container-fluid  ">
                <NavLink className="navbar-brand mx-3" to="/">
                    <img src={logoURL} alt width={60}></img>
                </NavLink>

                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse justify-content-between px-2 align-items-center" id="collapsibleNavId">


                    <ul className="navbar-nav me-auto mt-2 mt-lg-0  align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {getLink("/register")}
                        </li>
                        <li className="nav-item">
                            {getLink('/login')}
                        </li>
                    </ul>
                    <div className="navbar-nav  d-flex  align-items-center">


                        <NavLink className="nav-link me-3" to="/search">

                            <SearchOutlined style={{
                                fontSize: '30px', paddingRight: '7px'
                            }} />
                            <p className=" d-lg-none d-inline-block" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" >
                                Search
                            </p>
                        </NavLink>



                        <NavLink className="nav-link me-3 px-4" to="/cart" > <ShoppingCartOutlined style={{
                            fontSize: '30px', paddingRight: '7px'
                        }} />
                            <span className='cart-plus'>{cart.length}</span>
                        </NavLink>



                        <Dropdown menu={{ items }} className='me-3'>
                            <a onClick={(e) => e.preventDefault()}>
                                {getProfileLink()}
                            </a>
                        </Dropdown>
                        <p className=" d-lg-none text-white d-block" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" >
                            Profile
                        </p>


                    </div>

                </div>
            </div>
        </nav >
    )
}

export default Header