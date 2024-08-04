import React, { useContext } from 'react'
import { CartContext } from '../context/ContextProvider'
import { BsCart } from 'react-icons/bs'
import LogoOnBlack from '../assets/logoBgBlack.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='flex items-center justify-between px-10 bg-[#1c1c1c]'>
      <Link to='/' className='inline'>
        <img src={LogoOnBlack} width={100} className='rounded-full'/>
      </Link>
      <Link to='/cart' className='text-white flex'><BsCart color='white'/>{cart.length}</Link>
    </div>
  )
}

export default Navbar
