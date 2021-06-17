import React from 'react'
import ProductCard from './ProductsCard'
import {connect} from 'react-redux'

function Products(props) {
    return (
        <div className='d-flex flex-wrap'>
            {
                props.products.map(item => 
                    <ProductCard 
                    key={item.id} 
                    product={item} 
                />)
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.shop.products,
    }
}

export default connect(mapStateToProps,null)(Products)
