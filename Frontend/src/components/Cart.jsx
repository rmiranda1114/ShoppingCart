import React, { useContext } from 'react'
import { CartContext } from '../context/ContextProvider'
import { totalItem, totalPrice } from '../context/CartReducer';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const Increase = (id) => {
        const index = cart.findIndex (item => item.id === id);
        if (cart[index].quantity < 10) {
            dispatch({ type: "Increase", id })
        }
    }

    const Decrease = (id) => {
        const index = cart.findIndex (item => item.id === id);
        if (cart[index].quantity > 1) {
            dispatch({ type: "Decrease", id })
        }
    }

    return (
        <div className='flex justify-between gap-8 mx-5'>
            <div className='my-10 py-10 w-2/3 bg-white min-h-screen flex flex-col gap-10'>
                {cart.map((item) => (
                    <div key={item.id} className='flex'>
                        <div className='w-1/3 flex justify-center'>
                            <img src={item.image} className='w-24 h-24' />
                        </div>
                        <div className='w-2/3'>
                            <h4>{item.title}</h4>
                            <h4>${item.price}</h4>
                            <div className='flex gap-2'>
                                <div onClick={() => dispatch({ type: "Decrease", id: item.id })} 
                                    className='cursor-pointer'>
                                        -
                                </div>
                                <div>{item.quantity}</div>
                                <div onClick={() => dispatch({ type: "Increase", id: item.id })}
                                    className='cursor-pointer'>
                                    +
                                </div>
                            </div>
                            <div className='bg-red-500 rounded-md text-center w-20 cursor-pointer'
                                onClick={() => dispatch({ type: "Remove", id: item.id })}>
                                Delete
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-1/3 bg-white h-56 mt-10'>
                <div className='flex flex-col h-full justify-evenly'>
                    <div className='ml-5'> 
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: ${totalPrice(cart)}</h5>
                    </div>
                    <div className='py-2 bg-yellow-300 border rounded-md w-4/5 mx-auto text-center'>
                        Proceed to Checkout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
