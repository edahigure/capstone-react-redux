import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { fetchStokes } from '../redux/categories/categoriesSlice';

function DropdownMenu() {
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    console.log(e);
    dispatch(fetchStokes(e));
  };

  return (
    <DropdownButton
      title="Select"
      id="dropdown-menu-align-right"
      variant="secondary"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="nasdaq_constituent">nasdaq_constituent</Dropdown.Item>
      <Dropdown.Item eventKey="dowjones_constituent">dowjones_constituent</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;
