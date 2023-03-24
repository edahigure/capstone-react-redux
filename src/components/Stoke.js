import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchStokesPrice } from '../redux/categories/categoriesSlice';



function Stoke(props) {
  const { stoke } = props;
  const dispatch = useDispatch();
  const {
    currentStoke, companyName, price, image
  } = useSelector((store) => store.categories);

  let newCompanyName, newPrice, newImage;

  if(currentStoke === stoke){
    newCompanyName = companyName;
    newPrice = 'Price  '+price;
    newImage = image;
  }else{
    newCompanyName = '';
    newPrice = '';
    newImage = '';
  }

  
  return (
    <div
      className= "item-stokes"
      type="button"
      onClick={() => {
        dispatch ( fetchStokesPrice(stoke) );
      }}>
      <div className="info-stoke">
        <div> {stoke} </div>
        <div> {newCompanyName} </div>
        <div> {newPrice} </div>
      </div>
      
      <div className="img-stoke" >
        <img src={newImage} />
      </div>
      
      
    </div>
  )
}

export default Stoke
