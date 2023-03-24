import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStokes } from '../redux/categories/categoriesSlice';

import {useNavigate} from 'react-router-dom';

function Category(props) {
  const dispatch = useDispatch();
  const {
    category, numItems,
  } = props;

  const {
    stokes
  } = useSelector((store) => store.categories);

  const navigate = useNavigate();

  return (
    <div
      className="item-category"
      type="button"
      onClick={() => {
        dispatch(updateStokes({ category }));
        navigate('/stokes');
      }}>
      <div> {category}</div> 
      <div>Active companies {numItems}</div> 
    </div>
  )
}

export default Category
