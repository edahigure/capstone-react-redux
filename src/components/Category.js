import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { updateStokes } from '../redux/categories/categoriesSlice';

function Category(props) {
  const dispatch = useDispatch();
  const {
    category, numItems,
  } = props;

  const navigate = useNavigate();

  return (
    <div
      className="item-category"
    >

      <FiArrowRightCircle
        className="hand"
        type="button"
        onClick={() => {
          dispatch(updateStokes({ category }));
          navigate('/stokes');
        }}
      />
      <div>
        <div>
          {category}
        </div>
        <div>
          Active companies
          {numItems}
        </div>
      </div>

    </div>
  );
}

export default Category;

Category.propTypes = {
  category: PropTypes.string,
};

Category.defaultProps = {
  category: '',
};

Category.propTypes = {
  numItems: PropTypes.number,
};

Category.defaultProps = {
  numItems: 0,
};
