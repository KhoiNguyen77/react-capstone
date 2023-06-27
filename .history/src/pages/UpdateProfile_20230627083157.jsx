import { Radio } from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { Formik, ErrorMessage, Field, Form, useFormik } from 'formik'
import { getProfile, update } from '../Redux/Reducer/userReducer'
const UpdateProfile = () => {
    let { userUpdate, userProfile } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    userUpdate = { ...userProfile }
    const updateMik = useFormik({
        initialValues: {
            email: userProfile.email,
            name: userProfile.name,
            gender: userProfile.gender,
            phone: userProfile.phone,
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
            <section className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-md-9 col-lg-7 col-xl-5">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-shrink-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid" style={{ width: 180, borderRadius: 10 }} />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-1">Danny McLoan</h5>
                                            <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>Senior Journalist</p>
                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                                                <div>
                                                    <p className="small text-muted mb-1">Articles</p>
                                                    <p className="mb-0">41</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="small text-muted mb-1">Followers</p>
                                                    <p className="mb-0">976</p>
                                                </div>
                                                <div>
                                                    <p className="small text-muted mb-1">Rating</p>
                                                    <p className="mb-0">8.5</p>
                                                </div>
                                            </div>
                                            <div className="d-flex pt-1">
                                                <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                                                <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
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