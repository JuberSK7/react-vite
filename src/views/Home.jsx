import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/reducer/login'

export default () => {
    
    const { session } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout({}))
        navigate('/login')
    }

    return (
        <div className="container-fluid">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                    <li className="breadcrumb-item logout" aria-current="page"><Link to="/logout">Logout</Link></li>
                </ol>
            </nav>
            <div className="border col-xs-12 col-sm-10 col-md-8 col-lg-6 p-4 mx-4">
                <h3>Home</h3>
                <div className="col">
                    <div className='row p-2'>
                        <div className='col-2'>Username: </div>
                        <div className='col-10'><input className='w-100' defaultValue={session.username} /></div>
                    </div>
                    <div className='row  p-2'>
                        <div className='col-2'>ID: </div>
                        <div className='col-10'><input className='w-100' defaultValue={session.id} /></div>
                    </div>
                    <div className='row  p-2'>
                        <div className='col-2'>Access Token</div>
                        <div className='col-10'><textarea rows={5} className='w-100' defaultValue={session.accessToken}></textarea></div>
                    </div>
                    <div className='row  p-2'>
                        <div className="col-12">
                            <button onClick={logoutHandler} className='btn btn-danger w-100'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}