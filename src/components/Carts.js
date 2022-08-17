import React from "react";
import Cart from "./Cart.js";
import "./css/cards.css";
// import Listening from './scripts/script.js'

// idProduct: string 
// nameProduct string
// price: string 
// text: string
// logo: string
// colors: array 
// imgs: array

let carts = [
  {
    idProduct: "1001",
    nameProduct: "ADILETTE LITE SLIDES",
    priceCurrent: "$22.00",
    priceSale:"$19.00",
    text: "Swim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    imgs: [{ 
      link: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/Adilette_Aqua_Slides_Black_F35543_01_standard.jpg",
      id_pc: "1001b"},
    ],
    star:4
    },
    
    {
      idProduct: "1002",
      nameProduct: "ULTRABOOST DNA 5.0 SHOES",
      priceCurrent: "$190.00",
      priceSale:"$180.00",
      text: "Women's • Sportswear",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      imgs: [{ 
        link: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/acc1f836e10a4c1191dbae2801556d8d_9366/Ultraboost_DNA_5.0_Shoes_White_GV8747_01_standard.jpg",
        id_pc: "1002w"}],
      star:3}
];

function Carts() {
  // Listening();
  return (
    <div className="container">
      {carts.map(({idProduct, nameProduct, priceSale, priceCurrent, text,  imgs, star}) => (
        <Cart key={idProduct} nameProduct= {nameProduct}  priceSale = {priceSale} star= {star} priceCurrent = {priceCurrent} text= {text} imgs = {imgs}  />
      ))}
    </div>
  );
}

export default Carts;
