import { Container } from "react-bootstrap"
import { Link, Navigate } from "react-router-dom"
import Loader from "../loader"
import SecureRoute from "../secure-route";

export default () => {

    return <>
        <Navigate to={'/users'} />
        <SecureRoute />
        <Loader />
    </>
}