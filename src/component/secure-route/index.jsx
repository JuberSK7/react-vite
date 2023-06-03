import React from 'react'
import _ from 'lodash'
import { Navigate, Outlet } from "react-router-dom";


const isAuthorized = () => {
    let flag = true;
    try {
        let state = JSON.parse(localStorage.getItem('state'))
        flag = !_.isEmpty(state?.login?.session?.accessToken)
    } catch(err) {}
    return flag;
}
export default  () => (
  isAuthorized() ? ( <Outlet  /> ) : 
    ( <Navigate to={{ pathname: '/login' }}/> )
)