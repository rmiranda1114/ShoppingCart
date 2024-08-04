import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/ContextProvider';

const Products = () => {
    const [items, setItems] = useState();
    const { dispatch } = useContext(CartContext);

    const getItems = async () => {
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const json = await res.json();
            setItems(json);
            
        } catch (err) {

        }
        
    }

    useEffect(() => {
        getItems()
    },[]);


  return (
    <div className='flex flex-wrap justify-between gap-4 p-5'>
        {items && items.map((item) => (
            <div key={item.id} className='bg-white p-3 w-52 rounded-sm flex flex-col justify-between h-96 items-center'>
                <div className='text-center'>
                    <h1>{item.title}</h1>
                </div>
                <div className='h-1/3 bg-contain'>
                    <img src={item.image} className='h-full'/>
                </div>
                <div className='bg-[#ccad00] rounded-lg text-center px-3 py-1 w-3/5 mx-auto' 
                    onClick={() => dispatch({ type: "Add", product: item })}>
                    Add to Cart
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products
