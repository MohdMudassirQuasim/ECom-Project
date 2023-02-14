import { createContext, useContext, useReducer, useEffect } from "react"
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    const localCartData = JSON.parse(localStorage.getItem("items"));
    if(localCartData === []){
        return []
    }else {
        return localCartData;
    }
}

const initialstate={
    // cart:[],
    cart: getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:50000,
}

const CartProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initialstate)

    const addToCart = (id, color, amount, product) => {
        dispatch({type:"ADD_TO_CART",payload:{id, color, amount, product}})
    };

    const removeFromCart = (id) => {
        dispatch({type:"REMOVE_FROM_CART",payload:id})
    };

    const setIncrease = (id) => {
        dispatch({type:"INCREASE_ITEM",payload:id})
    };
    
    const setDecrease = (id) => {
        dispatch({type:"DECREASE_ITEM",payload:id})
    };

    const removeAll = () => {
        dispatch({type:"REMOVE_ALL"})
    };

    useEffect(() => {
        // dispatch({type:"CART_TOTAL_ITEM"})
        // dispatch({type:"CART_TOTAL_PRICE"})
        dispatch({type:"CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem('items', JSON.stringify(state.cart));
      }, [state.cart]);

    return <CartContext.Provider 
    value={{...state,addToCart,removeFromCart,setIncrease,setDecrease, removeAll}}    >
        {children}
    </CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext)
}


export {CartProvider,useCartContext};