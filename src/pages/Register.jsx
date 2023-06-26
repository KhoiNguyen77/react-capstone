import React, { useEffect } from 'react'
import { Radio } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { signUp } from '../Redux/Reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { customNavigate } from '..';
const Register = () => {
    const { userLogin } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const registerMik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            gender: true,
            checkpass: '',
            phone: '',
        },
        onSubmit: (values, { resetForm }) => {
            const actionSignUp = signUp(values);
            dispatch(actionSignUp)
            resetForm({
                email: '',
                password: '',
                name: '',
                gender: true,
                checkpass: '',
                phone: '',
            })
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
            password: yup.string().required("Password can't be blank !").min(5, "Password must have at least 5 characters").max(15, "Password only have 8 characters at max"),
            name: yup.string().required("Name can't be blank"),
            gender: yup.string().required("Please select your gender !"),
            phone: yup.string().required("Phonenumber can't be blank !").max(10, "Phonenumber can only have 10 numbers"),
            checkpass: yup.string().required("Confirm password can't be blank !").oneOf([yup.ref('password'), null], 'Password must match !')
        })
    })
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
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4" onSubmit={registerMik.handleSubmit}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    <span className='text-danger ms-2'>{registerMik.errors.name}</span>
                                                    <input type="text" id='name' name='name' onChange={registerMik.handleChange} className="form-control" value={registerMik.values.name} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <span className='text-danger ms-2'>{registerMik.errors.email}</span>
                                                    <input type="email" id='email' name='email' onChange={registerMik.handleChange} className="form-control" value={registerMik.values.email} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i class="fa fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Your Phone</label>
                                                    <span className='text-danger ms-2'>{registerMik.errors.phone}</span>
                                                    <input type="number" id='phone' name='phone' onChange={registerMik.handleChange} className="form-control" value={registerMik.values.phone} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <span className='text-danger ms-2'>{registerMik.errors.password}</span>
                                                    <input type="password" id='password' name='password' onChange={registerMik.handleChange} className="form-control" value={registerMik.values.password} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    <span className='text-danger ms-2'>{registerMik.errors.checkpass}</span>
                                                    <input type="password" id='checkpass' name='checkpass' onChange={registerMik.handleChange} className="form-control" value={registerMik.values.checkpass} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i class="fa fa-transgender me-3 fa-fw fa-lg"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label d-block" htmlFor="form3Example4cd">Gender</label>
                                                    <Radio.Group id='gender' name='gender' defaultValue={registerMik.values.gender} onChange={registerMik.handleChange}>
                                                        <Radio value={true} id='male'>Male</Radio>
                                                        <Radio value={false} id='female'>Femail</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            <div className="justify-content-center mx-4 mb-3 mb-lg-4">
                                                <NavLink to={"/login"} className={'small fst-italic text-decoration-none'}>Already have an account? Sign in</NavLink>
                                                <button type="submit" className="btn btn-primary btn-lg mt-3">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="./images/register.webp" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Register