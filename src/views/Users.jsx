import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

export default () => {
    const { userAll } = useSelector((state) => state.users)
    let dispatch = useDispatch();
    const history = useNavigate();
    const buttonClick = () => {
        history('/signup')
    }

    useEffect(() => {
        //dispatch(userAlll());
    }, [])
    
    return (
        <Col>
            <Row>Loading: {'Interpolation'}</Row>
            <Button onClick={buttonClick}>Click</Button>
        </Col>
    )
}