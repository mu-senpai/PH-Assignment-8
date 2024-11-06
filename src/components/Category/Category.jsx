import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({category}) => {
    return (
        <NavLink to={`category/${category}`} className={({isActive}) => `w-full btn rounded-[2rem] ${isActive ? 'bg-[#9538E2] text-bold text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>{category}</NavLink>
    );
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
}

export default Category;