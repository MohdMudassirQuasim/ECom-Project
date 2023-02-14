import Currencyformate from '../helper/Currencyformate';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, name, image, color, price, amount }) => {
    const {removeFromCart,setIncrease,setDecrease} =useCartContext();

    // const setIncrease = () => {
    //     amount < stock ? setAmount(amount+1) : setAmount(stock)
    // }

    // const setDecrease = () => {
    //     amount > 1 ? setAmount(amount-1) : setAmount(1)
    // }

    return (
        <div className='cart_heading grid grid-five-column'>
            <div className='cart-image--name'>
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div'>
                        <p>color:</p>
                        <div
                            className='color-style'
                            style={{ backgroundColor: color, color: color }}>
                        </div>
                    </div>
                </div>

            </div>
            <div className='cart-hide'>
                <p><Currencyformate price={price} /></p>
            </div>
            <CartAmountToggle
                amount={amount}
                setIncrease={()=>setIncrease(id)}
                setDecrease={()=>setDecrease(id)}
            />
            <div className='cart-hide'>
                <p><Currencyformate price={price * amount} /></p>
            </div>
            <div>
                <FaTrash className="remove_icon" onClick={()=>removeFromCart(id)}/>
            </div>
        </div>
    )
}

export default CartItem
