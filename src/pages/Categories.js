import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import Category from '../components/Category';
import DropdownMenu from '../components/DropdownMenu';
import { fetchStokes } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const {
    categoriesList, status,
  } = useSelector((store) => store.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStokes());
    }
  }, []);

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
      <div className="header-categories">
        <IoIosArrowBack />
        Stokes by Industry
        <div className="padding-needed-right">
          <FaMicrophone />
          <AiOutlineSetting />
        </div>
      </div>
      <div className="main-categories">
        <div className="myImg-1" />
        <DropdownMenu className="menu" />
        <div className="title"><strong> Market</strong></div>
      </div>
      <div className="wrapper-1">
        {myCategories}
      </div>
    </>
  );
};
export default Categories;
