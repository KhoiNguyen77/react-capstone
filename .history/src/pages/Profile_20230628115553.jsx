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
    <div className='container p-5'>
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
                      <p className="text-muted mb-0">{userProfile?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userProfile?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">+84 {userProfile?.phone}</p>
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
                      <Radio.Group id='gender' name='gender' defaultValue={true} disabled={true} value={userProfile?.gender}>
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

export default Profile