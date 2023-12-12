import React from 'react'
import "./style.scss"
import { Cart, Spacer } from '../../../components'

const CartPage = () => {
  return (
    <div>
    <Spacer height={75} />
    <Cart />
    <Spacer height={75} /></div>
  )
}

export default CartPage