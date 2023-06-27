import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../Redux/Reducer/userReducer';
import { Avatar, Radio } from 'antd';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const { userProfile } = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    const action = await getProfile();
    dispatch(action)
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  return (
    <div className='container mt-5'>
      <div className="card" style={{ color: '#56abf8' }}>
        <div className="card-header">
          <h2 className='text-center'>Your Profile</h2>
        </div>
        <div className="card-body">
          <div className="row align-items-center ">
            <div className="col-lg-4 col-12 mx-auto">
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
                  src={userProfile?.avatar}
                />
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-md-6 col-12">
                  <p className='d-inline-block me-2'>Email</p>
                  <input type="email" className='form-control mb-2' id='email' name='email' value={userProfile?.email} disabled={true} />
                </div>
                <div className="col-md-6 col-12">
                  <p className='d-inline-block me-2'>Name</p>
                  <input type="text" className='form-control mb-2' id='name' name='name' disabled={true} value={userProfile?.name} />
                </div>
              </div>
              <div className="col-md-6 col-12">
              </div>
              <div className=" col-12">
                <p className='d-inline-block me-2'>Phone</p>
                <input type="number" className='form-control mb-2' id='phone' name='phone' disabled={true} value={userProfile?.phone} />
              </div>
              <div className="col-md-12 col-12">
                <p className='me-2'>Gender</p>
                <Radio.Group id='gender' name='gender' defaultValue={true} disabled={true} value={userProfile?.gender}>
                  <Radio value={true} id='male'>Male</Radio>
                  <Radio value={false} id='female'>Femail</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-end p-3">
          <NavLink className='btn btn-primary text-white p-3' to={"/"}>
            Go To Store
          </NavLink>
        </div>
      </div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <NavLink className="breadcrumb-item" to='/'>Home</NavLink>
                  <NavLink className="breadcrumb-item active" to='/profile'>User Profile</NavLink>
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
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning" />
                      <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                      <p className="mb-0">mdbootstrap</p>
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
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
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
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
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

export default Profile