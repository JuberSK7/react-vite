import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logout } from '../redux/reducer/login'

export default () => {
    
    const dispatch = useDispatch()
    dispatch(logout({}))
    
    return <Navigate to={{ pathname: '/login' }}/>
}