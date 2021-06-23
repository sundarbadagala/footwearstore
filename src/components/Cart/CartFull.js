import React from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import Checkout from '../Checkout/Checkout'
import CartList from './CartList'

function Cart(props) {
    console.log(props.cart)
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <CartList/>
                </Col>
                <Col md={6}>
                    {   
                        props.cart.length > 0 ? <Checkout/> : null
                    }
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps, null)(Cart)
