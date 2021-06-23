import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function ConfirmationForm() {
    return (
        <Container>
            <Row className='text-center m-3'>
                <Col>
                    <h4 className='text-success m-2'>Order Confirmed Successfully...</h4><br/>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default ConfirmationForm
