import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

const iconReducer = (state, action) => {
  switch (action.type) {
    case 'edit':
      return <MdEdit />;
    case 'arrow':
      return <IoIosArrowForward />;
    case 'exit':
      return <FaSignOutAlt />
    default:
      return null;
  }
};

function Button({children, icon = null}) {
  const [currentIcon, dispatch] = React.useReducer(iconReducer, null);

  React.useEffect(() => {
    if (icon) {
      dispatch({ type: icon });
    }
  }, [icon]);

  return (
    <button className='custom__button'>
      {currentIcon}
      {children}
    </button>
  )
}

export default Button