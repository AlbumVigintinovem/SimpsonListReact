import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap';
import logo from '../images/theSimpsons.svg'

const Header = () => {

    const navigate = useNavigate();

    const naviBack = () => {
        navigate(-1, { replace: true })
    }
    return (
        <div>
            <Row className='header-main' >
                <Col md="4" className='header-main-col left'>
                    {window.location.pathname === "/" ? <Button className='back-button' > 🏠 Sweet Home </Button> : <Button onClick={naviBack} className='back-button' > 👈 Go Back</Button>}
                </Col>
                <Col md="4" className='header-main-col center'>
                    <img src={logo} width="75" />
                </Col>
                <Col md="4" className='header-main-col right' >
                    <Link to="/add" className='links' >✨ Add </Link>
                </Col>
            </Row>

        </div>
    )
}

export default Header