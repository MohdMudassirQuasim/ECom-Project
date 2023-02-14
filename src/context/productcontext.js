// create a context
// provider
// consumer => useContext hook

import { createContext, useContext, useReducer, useEffect } from "react";
// import axios from "axios";
import { allproducts } from "./productdata";
import {singleProduct} from './singleProductData';
import reducer from '../reducer/productReducer'

const AppContext = createContext();
// const API = "https://api.pujakaitem.com/api/products";
const initialstate = {
    isLoading: false,
    isError: false,
    product: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:[]
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    // const getProducts = async (url) => {
    //     dispatch({ type: "SET_LOADING" });
    //     try {
    //         const res = await axios.get(url);
    //         const products = await res.data;
    //         dispatch({ type: "SET_API_DATA", payload: products })
    //     } catch (error) {
    //         dispatch({ type: "API_ERROR" });
    //     }
    // };

    // useEffect(() => {
    //     getProducts(productdata);
    // }, []);

    const getProducts = (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            dispatch({ type: "SET_API_DATA", payload: allproducts })
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const getSingleProducts = (singleid) => {
        const singledata = singleProduct.filter((ele)=>{
            return(
                ele.id === singleid
            )
        }).shift();

        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            dispatch({ type: "SET_SINGLE_DATA", payload: singledata })
        } catch (error) {
            dispatch({ type: "API_SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(allproducts);
    }, []);

    return (
        <AppContext.Provider
            //        value="QUasim"  another way
            value={{ ...state, getSingleProducts}}
        >
            {children}
        </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductContext }