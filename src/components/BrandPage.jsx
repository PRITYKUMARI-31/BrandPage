import React from 'react'
import flipkartLogo from '../assets/flipkart.png'
import amazonLogo from '../assets/amazon.png'
import shoeImage from '../assets/shoe_image.png'
import '../styles/BrandPage.css'


const BrandPage = () => {
  return (
    <div>
      <div className="brandpage">
        <div className='brand_left'>
            <h1 className='content'> 
               YOUR FEET DESERVE THE BEST
            </h1>

            <p className='content_para'> 
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='brand_button'>
                <button className='shop_now'>Shop Now</button>
                <button className='category'>Category</button>
            </div>

            <div className='brand_icons'>
                <span className='brand_span'>Also Available on</span>
                <div className='brand_logos'>
                    <img src={flipkartLogo} alt="flipkartLogo"></img>
                    <img src={amazonLogo} alt="amazonLogo"></img>
                </div>
               
            </div>
        </div>
        <div className='brand_right'>
             <img src={shoeImage} alt="shoeImage"></img>
        </div>
      </div>
    </div>
  )
}

export default BrandPage
