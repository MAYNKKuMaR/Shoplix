import React, { useState } from 'react'
import Nav from '../../Components/nav/nav'
import bg from '../../assets/bg0.gif'
import './Home.css';
import { category } from '../../Category';
import { dummydata } from '../../dummydata';
import Product from '../../Components/Product/Product';
const Home = () => {
    let [cate , setCate]= useState(dummydata)
    function filterProducts(category){
        const updatedata = dummydata.filter((item)=>(item.category == category))
        setCate(updatedata)
    }
    return (
        <div className='home'>

            <div className="hero-bg">
                <img src={bg} alt="" />
            </div>
            <div className="category-section">

                {category.slice(0,5).map((item) => (
                   <div className="category-card" onClick={()=>{
                    filterProducts(item.name)
                   }}>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                   </div>
                ))}
            </div>
            <h1>Tending Products</h1>
            <div className="product-section">
                {cate.slice(0,7).map((item)=>(
                        <Product name={item.name} id = {item.id} price={item.price} image = {item.image}/>
                    
                ))}
            </div>
           
        </div>
    )
}

export default Home