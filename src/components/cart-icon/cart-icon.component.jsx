import React from 'react'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'

import { toggleCartHidden } from '../../redux/cart/cart.action'

import { connect } from 'react-redux'
const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShopIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
