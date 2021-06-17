import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap'

function Checkout({cart}) {
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalItems, setTotalItems]= useState(0)
    useEffect(()=>{
        let items=0
        let price=0
        cart.forEach(item =>{
            items += item.qty
            price += item.qty * item.price
        })
        setTotalItems(items)
        setTotalPrice(price)
    },[cart, totalPrice, setTotalPrice, totalItems, setTotalItems])
    return (
        <Container>
            <Row>
            <Col className='p-4 text-center'>
            <Card>
            <Card.Header>
            <h3>Cart Summary</h3>
            </Card.Header>
            <Card.Body>
            <div className='font-weight-bold text-left p-2'>
            Total Items: {totalItems} <br/>
            Delivery Charges : Free <br/>
            Total Price: {totalPrice} <br/>
            </div>
            <ButtonGroup style={{width:'100%'}}>
            <Button variant='danger'>
            Clear Cart
            </Button>
            <Button variant='success'>
            Proceed To Checkout
            </Button>
            </ButtonGroup>
            </Card.Body>
            </Card>
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

export default connect(mapStateToProps, null)(Checkout)
