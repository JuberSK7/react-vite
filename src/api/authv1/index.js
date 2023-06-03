import axios from "axios";
import { post } from "../../helpers/api_helper";
import {LOGIN_API} from '../../helpers/url_helper'

export const loginApi = (payload) => {
    console.log('############## api authv1 Login ##############')
    return axios.post(LOGIN_API, payload)
}