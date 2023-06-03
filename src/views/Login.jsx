import React, { useEffect } from "react";
import {Col, Row, Container} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Loader from "../component/loader";
import Navigate from "../component/navigate";
import { login } from "../redux/reducer/login";

export default () => {
    let dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const onSubmit = data => {
        dispatch(login(data))
    }
    
    useEffect(()=> {
        setValue('username', 'mujahed08')
        setValue('password', 'sdcwdxwwdx')
    }, [])
    return <Container fluid={true}>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
        </nav>
        <Col>
            <div className="mx-4 p-4 col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 border">
                <h3>Login</h3>
                <Row>
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation g-2 row" noValidate>
                        
                        <div className="form-floating">
                            <input {...register("username", { required: true, maxLength: 10 })}  type="text" className="form-control" id="usernameText" placeholder="placeholder" />
                            <label htmlFor="usernameText" className="form-label">Username</label>
                            <div className="text-danger">{errors.username?.type === 'required' && "Username is required"}</div>
                        </div>
                        <div className="form-floating">
                            <input {...register("password", { required: true, maxLength: 20 })} type="password" className="form-control" id="passwordPassword" placeholder="placeholder" />
                            <label htmlFor="passwordPassword" className="form-label">Password</label>
                            <div className="text-danger">{errors.password?.type === 'required' && "Password is required"}</div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </Row>
            </div>            
        </Col>
        <Navigate />
    </Container>
}