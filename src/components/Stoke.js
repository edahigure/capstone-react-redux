import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { fetchStokesPrice } from '../redux/categories/categoriesSlice';

function Stoke(props) {
  const { stoke } = props;
  const dispatch = useDispatch();
  const {
    currentStoke, companyName, price, image,
  } = useSelector((store) => store.categories);

  let newCompanyName;
  let newPrice;
  let newImage;
  let altImg;

  if (currentStoke === stoke) {
    newCompanyName = companyName;
    newPrice = `Price  ${price}`;
    newImage = image;
    altImg = 'stoke logo';
  } else {
    newCompanyName = '';
    newPrice = '';
    newImage = '';
    altImg = '';
  }

  return (
    <div
      className="item-stokes"
    >
      <div className="info-stoke">
        <div>
          {stoke}
        </div>
        <div>
          {newCompanyName}
        </div>
        <div>
          {newPrice}
        </div>
      </div>

      <div className="img-stoke">
        <img src={newImage} alt={altImg} />
      </div>

      <FiArrowRightCircle
        className="hand"
        type="button"
        onClick={() => {
          dispatch(fetchStokesPrice(stoke));
        }}
        size={30}
      />

    </div>
  );
}

export default Stoke;

Stoke.propTypes = {
  stoke: PropTypes.string,
};

Stoke.defaultProps = {
  stoke: '',
};
