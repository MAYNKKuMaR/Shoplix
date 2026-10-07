import React from 'react'
import image1 from "../../assets/image1.jpg"
import { MdDelete } from "react-icons/md";
import './CartCard.css'
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartslice';
const CartCard = ({name , price , image , id}) => {
    let dispatch = useDispatch()
  return (
    <div className='Cartcard'>
       <div className="left-card">
          <img src={image} alt="" />
          <div className="name-price">
            <span>{name}</span>
            <span>{price}</span>
          </div>
       </div>
       <div className="right-card">
           <button onClick={()=>{
            dispatch(RemoveItem(id))
           }}>Remove <MdDelete /></button>
       </div>
    </div>
  )
}

export default CartCard