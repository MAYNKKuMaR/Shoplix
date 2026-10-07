import React from 'react'
import image1 from "../../assets/image1.jpg"
import './Product.css'
import {useDispatch, useSelector} from 'react-redux'
import { AddItem } from '../../redux/cartslice'
const Product = ({name , image , price, id}) => {
  let dispatch = useDispatch()
  let items = useSelector(state=>state)
  console.log(items);
  return (   
    <div className='product'>
        <img src={image} alt="" />
        <div className="product-details">
            <span className='name'>{name}</span>
            <span className="price">{price}</span>
            <button onClick={()=>{
              dispatch(AddItem({name:name,image:image,price:price,id:id}))
              alert("Product Added Successsfully")
            }}>Add +</button>
        </div>
    </div>
  )
}

export default Product