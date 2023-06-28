import React, { useState } from 'react'

import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'

const HomeTemplate = () => {
    return <>
        <div className='header'>
            <Header></Header>
        </div>
        <div className="content" style={{ minHeight: "650px" }}>
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 p-4 text-center text-white bg-dark'>
            @2023 CyberSoft All rights Resevered
        </footer>
    </>
}

export default HomeTemplate