import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateStokes } from '../redux/categories/categoriesSlice';

function DropdownMenu() {
  const dispatch = useDispatch();
  const {
    categoriesList,
  } = useSelector((store) => store.categories);

  const myCategories = [];
  for (let i = 0; i < categoriesList.length; i += 1) {
    myCategories.push(
      <Dropdown.Item eventKey={categoriesList[i].category}>
        {categoriesList[i].category}
      </Dropdown.Item>,
    );
  }
  const navigate = useNavigate();
  const handleSelect = (e) => {
    dispatch(updateStokes({ category: e }));
    navigate('/stokes');
  };

  return (
    <DropdownButton
      title="Select"
      id="dropdown-menu-align-right"
      variant="danger"
      onSelect={handleSelect}
    >
      {myCategories}
    </DropdownButton>
  );
}

export default DropdownMenu;
