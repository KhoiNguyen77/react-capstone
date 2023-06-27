import { Radio } from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { Formik, ErrorMessage, Field, Form, useFormik } from 'formik'
import { getProfile, update, updateAction } from '../Redux/Reducer/userReducer'
import { NavLink } from 'react-router-dom'
import { customNavigate } from '..'
const UpdateProfile = () => {
    let { userUpdate, userProfile } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    userUpdate = { ...userProfile }
    // dispatch(updateAction(userUpdate));
    const updateMik = useFormik({
        initialValues: {
            email: userProfile?.email,
            name: userProfile?.name,
            gender: userProfile?.gender,
            phone: userProfile?.phone,
        },
        onSubmit: (values, { resetForm }) => {
            const action = update(values);
            dispatch(action)
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
            name: yup.string().required("Name can't be blank"),
            gender: yup.string().required("Please select your gender !"),
            phone: yup.string().required("Phonenumber can't be blank !").max(10, "Phonenumber can only have 10 numbers"),
        })
    })
    const checkLogin = () => {
        if (userProfile == null) {
            customNavigate.push('/login')
        } else return
    }
    useEffect(() => {
        checkLogin()
    }, [])
    return (
        <div className='container mt-5'>
            <form className="card" onSubmit={updateMik.handleSubmit}>
                <div className="card-header">
                    <h2 className='text-center'>Update Your Profile</h2>
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="avatar mx-auto w-50 d-flex">
                                <Avatar
                                    size={{
                                        xs: 60,
                                        sm: 70,
                                        md: 80,
                                        lg: 110,
                                        xl: 130,
                                        xxl: 150,
                                    }}
                                    src={userUpdate?.avatar}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Email</p> <span className='text-danger'>{updateMik.errors.email}</span>
                                    <input type="email" className='form-control mb-2' id='email' name='email' onChange={updateMik.handleChange} defaultValue={userUpdate?.email} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Name</p> <span className='text-danger'>{updateMik.errors.name}</span>
                                    <input type="text" className='form-control mb-2' id='name' name='name' onChange={updateMik.handleChange} defaultValue={userUpdate?.name} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className='d-inline-block me-2'>Phone</p> <span className='text-danger'>{updateMik.errors.phone}</span>
                                    <input type="number" className='form-control mb-2' id='phone' name='phone' onChange={updateMik.handleChange} defaultValue={userUpdate?.phone} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className='me-2'>Gender</p>
                                    <Radio.Group id='gender' name='gender' defaultValue={userUpdate?.gender} onChange={updateMik.handleChange} >
                                        <Radio value={true} id='male'>Male</Radio>
                                        <Radio value={false} id='female'>Femail</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <button className='btn btn-primary p-3' type='submit'>Update</button>
                </div>
            </form>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb " className="bg-light rounded-3 p-3 mb-4 d-flex justify-content-between align-items-center">
                                <ol className="breadcrumb mb-0">
                                    <NavLink className="breadcrumb-item" to='/'>Home</NavLink>
                                    <NavLink className="breadcrumb-item active" to='/profile'>User Profile</NavLink>
                                </ol>
                                <ol className="breadcrumb mb-0">
                                    <NavLink className='btn btn-primary text-white p-3' to={"/"}>
                                        Go To Store
                                    </NavLink>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <Avatar
                                        size={{
                                            xs: 60,
                                            sm: 70,
                                            md: 80,
                                            lg: 110,
                                            xl: 130,
                                            xxl: 150,
                                        }}
                                        src={userProfile?.avatar}
                                    />
                                    <h5 className="my-3">{userProfile?.name}</h5>
                                    <p className="text-muted mb-1">Front End Developer</p>
                                    <p className="text-muted mb-4">Ho Chi Minh City, VietNam</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                            <p className="mb-0">KhoiNguyen77</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <p className="mb-0">nguinnotfat</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                            <p className="mb-0">Phạm Nguyên</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="email" className='form-control mb-2' id='email' name='email' onChange={updateMik.handleChange} defaultValue={userUpdate?.email} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="email" className='form-control mb-2' id='email' name='email' onChange={updateMik.handleChange} defaultValue={userUpdate?.email} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="number" className='form-control mb-2' id='phone' name='phone' onChange={updateMik.handleChange} defaultValue={userUpdate?.phone} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Ho Chi Minh City, VietNam</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Gender</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <Radio.Group id='gender' name='gender' defaultValue={userUpdate?.gender} onChange={updateMik.handleChange} >
                                                <Radio value={true} id='male'>Male</Radio>
                                                <Radio value={false} id='female'>Femail</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">Assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">Assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdateProfile