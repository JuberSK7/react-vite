import { get } from "../helpers/api_helper";
import * as url from '../helpers/url_helper'

export const userAllApi = (payload) => get(url.USER_ALL_GET);