import { post } from "../helpers/api_helper";
import * as url from '../helpers/url_helper'

export const signupApi = (payload) => post(url.SIGNUP_API, payload);