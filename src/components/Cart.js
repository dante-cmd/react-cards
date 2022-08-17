import React from 'react'
import "./css/card.css"

// idProduct: string 
// price: string 
// text: string
// logo: string
// nameProduct string
// imgs: array



function Cart({idProduct, nameProduct, priceSale, priceCurrent, text,  imgs, star}) {
  return (
  <div className="product-card" id = {idProduct} >
    <div className="logo-card">
        <i className='bx bxl-amazon'></i>
        <i className='bx bx-shopping-bag'></i>
    </div>
    <div className="main-images">
        {
        imgs.map(({link, id_pc}) => (
            <img src={link} id={id_pc} className={"pics " + id_pc + " active"} alt=""/> 
        ))}
    </div>
    <div className="shoes-details">
        <span className="shoes-name">{nameProduct}</span>
        <span> {text}</span>
        <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bx-star'></i>
        </div>
        <div className="color-price">
            <div className="color-option">
                <span className="color">Colour</span>
                <div className="circles">
                    {imgs.map(({id_pc}) => (
                        <span id = {"circle-id-" + id_pc} className={"circle " + id_pc + " active"} ></span>
                    ))}
                </div>
            </div>
            <div className="price">
                <span className="price-current">{priceCurrent}</span>
                <span className="price-sale">{priceSale}</span>
            </div>
        </div>
    </div>
    <div className="buttom">
        <input type="button" value="Add To Card" />
    </div>
  </div>

  )
}

export default Cart