import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Gadget = ({ product }) => {

    const { product_title, price, product_image, product_id } = product;

    return (
        <div className="card bg-base-100 w-full">
            <figure className="px-5 py-5">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="w-full h-[15rem] lg:h-[12rem] rounded-xl object-cover" />
            </figure>
            <div className="w-full sm:h-[11rem] flex flex-col items-start gap-3 px-5 pb-5">
                <h2 className="card-title">{product_title}</h2>
                <p className="text-[#09080F99] font-medium flex-grow">Price: ${price}</p>
                <div className="card-actions">
                    <NavLink to={`/other/product/${product_id}`} className="btn btn-ghost hover:bg-[#9538E2] text-[#9538E2] hover:text-white border border-[#9538E2] rounded-[2rem]">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

Gadget.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Gadget;