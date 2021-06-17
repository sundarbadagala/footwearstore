import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'
import {Link} from 'react-router-dom'

function ProductCard(props) {
    const {product} = props
    return (
        <div>
            <Card className='m-2' style={{width:'200px'}}>
                <Link to={'/product/'+product.id}><Card.Img src={product.img} alt=''/></Link>
                <Card.Header className='p-1'>
                    <div className='p-1'>{product.company} {product.title}</div>    
                    <div className='d-flex justify-content-around align-items-center font-weight-bold'>
                    {product.price}
                    <Button 
                        className='px-4'
                        onClick={()=>props.addToCart(product.id)}
                        >
                        <i className="fas fa-cart-plus"></i>
                    </Button>
                    </div>
                    
                </Card.Header>
                
            </Card>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart: (id)=>dispatch(addToCart(id))
    }
}


export default connect(null, mapDispatchToProps)(ProductCard)