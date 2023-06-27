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
      <section className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
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

export default Profile