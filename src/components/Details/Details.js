import React from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Row, Col, Alert, Button, ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { addToCart } from '../redux/Shopping/shopping-actions'

function Details(props) {
    const {products} = props
    const {id}= useParams()
    console.log(id)
    const details = products.find(item => item.id === parseInt(id))
    console.log(details)
    return (
        <Container fluid className='border border-primary bg-primary'>
        <Alert variant='primary' className='' style={{width:'100%'}}>
        <Row>
            <Col md={4}>
                <img src={details.img} alt='' style={{width:'300px'}}/>
            </Col>
            <Col md={8}>
                <div className='font-weight-bold'>
                    <div>Name : {details.title}</div>
                    <div>Name : {details.price}</div><br/>
                </div>
                <div>{details.info}</div>
                <div><br/>
                <ButtonGroup>
                    <Link to='/'>
                        <Button variant='outline-primary'>Go To Home</Button>
                    </Link>
                    <Button variant='outline-primary' onClick={()=>props.addToCart(details.id)}>Add To Cart</Button>
                </ButtonGroup>
                </div>
            </Col>
        </Row>
        </Alert>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.shop.products
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart : (id)=>dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
