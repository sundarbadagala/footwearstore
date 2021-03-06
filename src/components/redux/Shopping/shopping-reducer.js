import * as actionTypes from './shopping-types'
import { storeProducts } from '../../productsData'


const inititalState={
    products:storeProducts,
    cart:[],
    currentItem:null
}

const shopReducer=(state=inititalState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(item => item.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false) 
            return{
                ...state,
                cart: inCart ? 
                    state.cart.map(item => item.id === action.payload.id ? 
                        {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty:1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItems:action.payload
            }
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default shopReducer