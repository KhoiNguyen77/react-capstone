import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { logInAction, login } from '../Redux/Reducer/userReducer';
import { customNavigate } from '..';
import FacebookLogin from 'react-facebook-login';
import { USER_LOGIN, http, setStoreJson } from '../util/config';
import { message } from 'antd';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Login successful',
            duration: 5,
        });
    };
    const { userLogin } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const logIn = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            const actionLogin = login(values);
            dispatch(actionLogin)
            success(actionLogin);
        }

    })
    const responseFacebook = async (res) => {
        if (res.accessToken) {
            const data = { facebookToken: res.accessToken }
            const getAccount = await http.post('api/Users/facebooklogin', data);
            setStoreJson(USER_LOGIN, getAccount.data?.content);
            customNavigate.push("/profile")
        }
    }
    const checkLogin = () => {
        if (userLogin == null) {
            return
        } else {
            customNavigate.push('/profile')
        }
    }
    useEffect(() => {
        checkLogin()
    }, [])
    return (
        < section className="vh-100" >
            {contextHolder}
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={logIn.handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <FacebookLogin
                                    appId="1001369850865291"
                                    autoLoad={false}
                                    icon='fab fa-facebook-f'
                                    cssClass='btn btn-primary rounded-circle floating mx-1'
                                    callback={responseFacebook}
                                    textButton=''
                                ></FacebookLogin>
                                {/* <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                    <i className="fab fa-facebook-f" />
                                </button> */}
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id='email' name='email' onChange={logIn.handleChange} className="form-control form-control-lg" placeholder="Enter a valid email address" />
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id='password' name='password' onChange={logIn.handleChange} className="form-control form-control-lg" placeholder="Enter password" />
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to={"/register"} className={'link-danger'}>Register Now?</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ >

    )
}

export default Login