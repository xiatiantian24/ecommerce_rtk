import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SuperCoin = () => {
    const [supercoins, setSupercoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (totalAmount < 100) {
            setSupercoins(0);
        } else if (totalAmount < 200) {
            setSupercoins(10);
        } else if (totalAmount < 300) {
            setSupercoins(20);
        } else {
            setSupercoins(30);
        }

    }, [totalAmount])

    return (
        <div>You will earn {supercoins} Super Coins with this purchase</div>
    )
}

export default SuperCoin;

