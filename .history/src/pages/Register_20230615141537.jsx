import React from 'react'
import { Radio } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
const Register = () => {
    const registerMik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            gender: true,
            phone: 'string'
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
            password: yup.string().required("Password can't be blank !").min(5, "Password must have at least 5 characters").max(8, "Password only have 8 characters at max"),
            name: yup.string().required("Name can't be blank"),
            gender: yup.string().required("Please select your gender !"),
            phone: yup.string().required("Phonenumber can't be blank !")
        })
    })

    return (
        <div className='container'>

            <form className='card form-group'>
                <div className="card-header">
                    <h2 className='text-center'>Register</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Email</p>
                            <input type="email" className='form-control mb-2' id='email' name='email' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Name</p>
                            <input type="text" className='form-control mb-2' id='name' name='name' onChange={registerMik.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Password</p>
                            <input type="password" className='form-control mb-2' id='password' name='password' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Phone</p>
                            <input type="number" className='form-control mb-2' id='phone' name='phone' onChange={registerMik.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Confirm Password</p>
                            <input type="password" className='form-control mb-2' id='email' name='email' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Gender</p>
                            <Radio.Group>
                                <Radio value={true}>Male</Radio>
                                <Radio value={false}>Femail</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type='submit' className='btn btn-success'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register