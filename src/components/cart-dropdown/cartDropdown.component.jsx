import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cartDropDown.style.scss'

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>View your cart</CustomButton>
    </div>
  )
}

export default CartDropDown
