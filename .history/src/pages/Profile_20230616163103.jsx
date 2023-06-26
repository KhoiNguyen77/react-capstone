import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../Redux/Reducer/userReducer';
import { Avatar, Radio } from 'antd';

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
      <div className="card">
        <div className="card-header">
          <h2 className='text-center'>Your Profile</h2>
        </div>
        <div className="card-body">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-12 mx-auto w-50">
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
            <div className="col-lg-6 col-12">
              <div className="row ">
                <div className="col-md-6 col-12">
                  <p className='d-inline-block me-2'>Email</p>
                  <input type="email" className='form-control mb-2' id='email' name='email' value={userProfile?.email} disabled={true} />
                </div>
                <div className="col-md-6 col-12">
                  <p className='d-inline-block me-2'>Name</p>
                  <input type="text" className='form-control mb-2' id='name' name='name' disabled={true} value={userProfile?.name} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                </div>
                <div className=" col-12">
                  <p className='d-inline-block me-2'>Phone</p>
                  <input type="number" className='form-control mb-2' id='phone' name='phone' disabled={true} value={userProfile?.phone} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                </div>
                <div className="col-md-6 col-12">
                  <p className='me-2'>Gender</p>
                  <Radio.Group id='gender' name='gender' defaultValue={true} disabled={true} value={userProfile?.gender}>
                    <Radio value={true} id='male'>Male</Radio>
                    <Radio value={false} id='female'>Femail</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile