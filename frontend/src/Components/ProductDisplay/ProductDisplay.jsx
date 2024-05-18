import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const [size, setSize] = useState('s');
  const { product } = props;
  console.log(product)
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="productdisplay-main-img" alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit, et! Consequatur suscipit et placeat debitis quas
          tenetur fugiat maiores aliquam ipsa? Laborum officiis impedit ut
          facere delectus, illo voluptates atque iste dolorum commodi tenetur,
          fugit esse et libero optio dicta non. Assumenda eius facilis ex.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div style={{ backgroundColor : size =='s'? "#ff4141": "white", color: size =='s'? "white": "black" }} onClick={()=> setSize('s')}>S</div>
                <div style={{ backgroundColor : size =='m'? "#ff4141" : "white", color: size =='m'? "white": "black"}} onClick={()=> setSize('m')}>M</div>
                <div style={{ backgroundColor : size =='l'? "#ff4141" : "white", color: size =='l'? "white": "black"}} onClick={()=> setSize('l')}>L</div>
                <div style={{ backgroundColor : size =='xl'? "#ff4141" : "white", color: size =='xl'? "white": "black"}} onClick={()=> setSize('xl')}>XL</div>
                <div style={{ backgroundColor : size =='xxl'? "#ff4141" : "white", color: size =='xxl'? "white": "black"}} onClick={()=> setSize('xxl')}>XXL</div>
            </div>
        </div>
        <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category: </span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span> Modern, Latest, Crop Top</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
