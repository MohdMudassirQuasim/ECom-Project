import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'


const CartAmountToggle = ({amount,setDecrease, setIncrease }) => {
    // const [amount, setAmount] = useState(1);
    // const setIncrease = () => {
    //    return amount < stock ? setAmount(amount+1) : setAmount(stock)
    // }
    // const setDecrease = () => {
    //     return amount > 1 ? setAmount(amount-1) : setAmount(1)
    // }

    return (
        <div className='cart-button'>
            <div className='amount-toggle'>
                <button onClick={() => setDecrease()}><FaMinus /></button>
                <div className='amount-style'>{amount}</div>
                <button onClick={() => setIncrease()}><FaPlus /></button>
            </div>
        </div>
    )
}

export default CartAmountToggle;
