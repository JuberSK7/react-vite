import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setPath } from '../reducer/ui';
import { histPush } from '../action/ui';

export default () => {
    const { loading } = useSelector((state) => state.ui)
    let dispatch = useDispatch();
    
    const buttonClick = () => {
        console.log(loading)
        dispatch(setPath('/signup'))
    }
    const buttonClick2 = () => {
        console.log(loading)
        dispatch(setPath('/users'))
    }
    return (
        <Col>
            <Row>Loading: {String(loading)}</Row>
            <Button onClick={buttonClick}>Click</Button>
            <Button onClick={buttonClick2}>Click 2</Button>
        </Col>
    )
}