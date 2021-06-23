import React, { useState } from 'react'
import {Card, Accordion, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PaymentForm() {
    const [paymentMethod, setPaymentMethod]= useState('')
    const [cardDetails, setCardDetails]= useState('')
    console.log(paymentMethod)
    return (
        <Card>
            <Card.Header className='text-center'>
                <h4>Payment Form</h4>
            </Card.Header>
            <Card.Body>    
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Cash On Devlivery
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        
                        <div onChange={e=>setPaymentMethod(e.target.value)}>
                        <input type="radio" id="cod" name="payment" value="COD" className='mr-2'/>
                        <label for="cod">Cash On Deliver</label>
                        </div>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Online Payment
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        
                        <div onChange={e=>setPaymentMethod(e.target.value)}>
                        <input type="radio" id="online" name="payment" value="ONLINE" className='mr-2'/>
                        <label for="onlie">ONLINE PAYMENT</label>
                        </div>
                        <div>
                            <label htmlFor='card'>Enter Card Details</label><br/>
                            <input 
                                type='text' 
                                id='card' 
                                name='payment' 
                                value={cardDetails} 
                                onChange={e=>setCardDetails(e.target.value)}
                                className='border p-1'
                                style={{width:'60%'}}
                            />
                            <input 
                                type='text' 
                                id='card' 
                                name='payment' 
                                value={cardDetails} 
                                onChange={e=>setCardDetails(e.target.value)}
                                className='border m-2 p-1'
                                style={{width:'20%'}}
                                placeholder='CVV'
                            />
                        </div>

                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Link to='/confirm'><Button block>Submit</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default PaymentForm
