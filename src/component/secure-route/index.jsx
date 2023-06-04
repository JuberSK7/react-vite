import React from 'react'
import _ from 'lodash'
import { Navigate, Outlet } from "react-router-dom";
import Root from '../root'


const isAuthorized = () => {
    let flag = true;
    try {
        let state = JSON.parse(localStorage.getItem('state'))
        flag = !_.isEmpty(state?.login?.session?.accessToken)
    } catch(err) {}
    return flag;
}
export default  () => (
  isAuthorized() ? ( <><Root /><Outlet /><Navigate to={{ pathname: '/home' }}/></> ) : 
    ( <Navigate to={{ pathname: '/login' }}/> )
)