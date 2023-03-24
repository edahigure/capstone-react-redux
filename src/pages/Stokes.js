import React from 'react'
import { useEffect } from 'react';
import Stoke from '../components/Stoke';
import { useDispatch, useSelector } from 'react-redux';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import {useNavigate} from 'react-router-dom';



function Stokes() {

  const dispatch = useDispatch();

  const {
    category, stokes, status
  } = useSelector((store) => store.categories);

  useEffect(() => {
    if (status === 'update') {
    }
  }, [status, dispatch]);

  const myStokes = [];

  for (let i = 0; i < stokes.length; i += 1) {
    const str = `stoke${i}`;
    myStokes.push(<Stoke
      key={str}
      stoke={stokes[i]}
    />);
  }

  const navigate = useNavigate();

  return (
    <>
    
      <div className="header-categories"> 
      <IoIosArrowBack
      type="button"
      onClick={() => {
        navigate('/categories');
      }}
      className="padding-needed-left"/>
       Stoke price name and logo <div className="padding-needed-right"> <FaMicrophone /> <AiOutlineSetting />  </div></div>
      <div className="main-categories" >
        <div className="myImg-1" ></div>
        <div className="title"><strong>{category}</strong></div>
      </div>
      <div className="wrapper-stokes">
        {myStokes}
      </div>
    </>
  )
}

export default Stokes
