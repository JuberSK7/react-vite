import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/reducer/login'

export default () => {
    
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(logout({}))
    }, [])

    const navigate = useNavigate()
    setTimeout(()=> {
        navigate('/login')
    },1000)
    
    return <div className="container-fluid">
        <div className="col">
            <h3>Logging out ...</h3>
        </div>
    </div>
}