import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import { FloatButton } from 'antd';
import { logoURL } from '../util/config';
const HomeTemplate = () => {
    return <>
        <div className='header'>
            <Header></Header>
        </div>
        <div className="content" style={{ minHeight: "650px" }}>
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 p-4 text-center text-white bg-dark'>
            <section className="mb-4 ">
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-google" /></a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-instagram" /></a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-github" /></a>
            </section>

            @ 2023 CyberSoft All rights Resevered


        </footer>
        <FloatButton.BackTop type="primary" />
    </>
}

export default HomeTemplate