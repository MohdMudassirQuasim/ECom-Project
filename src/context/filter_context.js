import {createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
      text:"",
      category:"all",
      company:"all",
      color:"all",
      maxPrice:0,
      price:0,
      minPrice:0
    }
}

export const FilterContextProvider = ({children}) => {

    const {product} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // setgrid view
    const gridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }

    // set List view
    const listView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"});
    }

      // sorting function
  const sorting = (e) => {
    // dispatch({ type: "GET_SORT_VALUE" });

    let userValue = e.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // ------------ updated --------------
  // filter function

  const updateFiltersValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  //to clear the filter

  const clearFilters = () => {
    document.getElementById("company").selectedIndex=0
    return dispatch({ type: "CLEAR_FILTERS" });
  };

  // -------------- updated end --------------

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS"});
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [product, state.sorting_value, state.filters]);

  // to load all the products for grid and list view

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:product})
    },[product])

    return (
        <FilterContext.Provider value={{...state, gridView, listView,sorting, updateFiltersValue,clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
