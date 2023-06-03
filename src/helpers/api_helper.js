import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = import.meta.env.REACT_APP_APP_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApi.interceptors.request.use(function (config) {
  
  config.headers = {'username': 'mujahed08', 'Content-Type' : 'application/json', ...config.headers}
  console.log(REACT_APP_APP_URL)
  return config
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function post(url, data, config) {
  return await axiosApi.post(url, data, {
      ...config
    })
    .then((response) => response.data)
}
