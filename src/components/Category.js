import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStokes } from '../redux/categories/categoriesSlice';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';


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

      <FiArrowRightCircle />
      <div>
        <div> {category}</div>
        <div>Active companies {numItems}</div>
      </div>

    </div>
  )
}

export default Category
