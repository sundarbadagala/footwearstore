import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap'
import { clearCart } from '../redux/Shopping/shopping-actions'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import {Currency} from '../currencyFormat'

function Checkout(props) {
    const {cart} = props
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalItems, setTotalItems]= useState(0)
    const [showAddressForm, setShowAddressForm]= useState(false)
    const [formData, setFormData]= useState({})
    const [showPaymentForm, setShowPayementForm]= useState(false)
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
    const next=(values)=>{
        setFormData(values)
        setShowPayementForm(true)
    }
    return (
        <Container>
            <Row className='p-2 text-center'>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Cart Summary</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className='text-left p-2'>
                                Total Items: {totalItems} <br/>
                                Delivery Charges : Free <br/>
                                Total Price: {Currency(totalPrice)} <br/>
                            </div>
                            <ButtonGroup style={{width:'100%'}}>
                                <Button variant='primary' onClick={props.clearCart}>
                                    Clear Cart
                                </Button>
                                <Button variant='primary' onClick={()=>setShowAddressForm(true)}>
                                    Proceed To Checkout
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='p-2 text-center'>
                <Col>
                    {
                        showAddressForm ? <AddressForm next={next} /> : null
                    }
                </Col>
            </Row>
            <Row className='p-2'>
                <Col>
                {
                    showPaymentForm ? <PaymentForm/> : null
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

const mapDispatchToProps=(dispatch)=>{
    return{
        clearCart: ()=>dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
