import axios from "axios";
import { post } from "../../helpers/api_helper";
import {LOGIN_API, SIGNUP_API} from '../../helpers/url_helper'

export const loginApi = (payload) => {
    
    return axios.post(LOGIN_API, payload)
}

export const signupApi = (payload) => {
    console.log('############## api authv1 Signup ##############')
    return axios.post(SIGNUP_API, payload)
}