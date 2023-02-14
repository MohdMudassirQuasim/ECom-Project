
const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let exitingProduct = state.cart.find((curElem) => curElem.id === id + color)
    console.log("exitingProduct", exitingProduct)

    if (exitingProduct) {
      let updateProduct = state.cart.map((element)=>{
        if(element.id===id+color){
          let addedAmount = element.amount+amount
          if(addedAmount>=element.max){
            addedAmount=element.max
          }
          return {
            ...element,
            amount: addedAmount,
          }
        }else{
          return element
        }       
        
      });
      return {
        ...state,
        cart: updateProduct,
      }

    }
    else {
      let cartProduct = {
        id: id + color,
        amount,
        color,
        max: product.stock,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
      }
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      }
    }
  }

  if(action.type==="REMOVE_FROM_CART"){
    let updateCart = state.cart.filter((curele)=>curele.id !== action.payload)

    return{
      ...state,
      cart:updateCart,
    }
  }

  if (action.type === "INCREASE_ITEM") {
    let updateAmount = state.cart.map((curele) => {
      if (curele.id === action.payload) {
        let incAmount = curele.amount + 1;
        if(incAmount >= curele.max){
          incAmount = curele.max
        }
        return {
          ...curele,
          amount: incAmount,
        }
      } else {
        return curele
      }
    })
    return {
      ...state,
      cart:updateAmount,
    }
  }

  if (action.type === "DECREASE_ITEM") {
    let updateAmount = state.cart.map((curele) => {
      if (curele.id === action.payload) {
        let decAmount = curele.amount - 1;
        if(decAmount<=1){
          decAmount = 1
        }
        return {
          ...curele,
          amount: decAmount,
        }
      } else {
        return curele
      }
    })
    return {
      ...state,
      cart:updateAmount,
    }
  }

  if(action.type==="REMOVE_ALL"){
    return{
      ...state,
      cart:[],
    }
  }

  // if(action.type==="CART_TOTAL_ITEM"){
  //   let updateItem = state.cart.reduce((intial,curEle)=>{
  //     let {amount} = curEle;
  //     intial = intial + amount;
  //     return intial
  //   },0)
  //   return{
  //     ...state,
  //     total_item : updateItem,
  //   }
  // }

  // if(action.type==="CART_TOTAL_PRICE"){
  //   let updatesubTotal = state.cart.reduce((intial,curEle)=>{
  //     let {price,amount} = curEle;
  //     intial = intial + price*amount;
  //     return intial
  //   },0)
  //   return{
  //     ...state,
  //     total_price : updatesubTotal,
  //   }
  // }

  if(action.type==="CART_ITEM_PRICE_TOTAL"){
    let {total_item, total_price} = state.cart.reduce((accum,curElem)=>{
      let {price,amount} = curElem;

      accum.total_item += amount;
      accum.total_price += price*amount;

      return accum;
    },
    {
      total_item:0,
      total_price:0,
    }
    );
    return{
      ...state,
      total_price,
      total_item,
    }
  }
  return state;
}

export default cartReducer
