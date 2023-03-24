import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStokes, fetchStokesPrice } from '../redux/categories/categoriesSlice'
import Category from '../components/Category';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';




export const Categories = () => {
  const dispatch = useDispatch();

  const {
    status, categoriesList
  } = useSelector((store) => store.categories);


  useEffect(() => {
    if (status === 'idle') {
      // dispatch(fetchStokes());
    }
  }, [status, dispatch]);

  const myCategories = [];
  for (let i = 0; i < categoriesList.length; i += 1) {
    const str = `cat${i}`;
    myCategories.push(<Category
      key={str}
      category={categoriesList[i].category}
      numItems={categoriesList[i].stokes.length}
    />);
  }


  return (
    <>

      <div className="header-categories"> <IoIosArrowBack className="padding-needed-left"/> Stokes by Industry <div className="padding-needed-right"> <FaMicrophone /> <AiOutlineSetting />  </div></div>
      <div className="main-categories" >
        <div className="myImg-1" ></div>
        <div className="title"><strong>Nasdaq constituent by industry</strong></div>
      </div>
      <div className="wrapper-1">
        {myCategories}
      </div>
    </>
  )
}
export default Categories