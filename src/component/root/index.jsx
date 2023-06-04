import { Navigate, useLocation, useNavigate } from "react-router-dom"
import outsideHooks from "../../common/outsideHooks"
import Loader from "../loader"

export default (props) => {

    outsideHooks.navigate = useNavigate()
    outsideHooks.location = useLocation()

    

    return <>
        <Loader />
    </>
}