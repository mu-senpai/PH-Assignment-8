import { IoMdCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../Dashboard/Dashboard";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({product}) => {

    const [setCartItems] = useContext(CartContext);
    const {product_image, product_title, price, description, product_id} = product;

    const handleRemove = (id) => {
        const getCart = JSON.parse(localStorage.getItem('cart-items'));
        const updatedCart = getCart.filter(item => item.product_id !== id);
        localStorage.setItem('cart-items', JSON.stringify(updatedCart));
        toast.error(`Selected item is removed from the cart.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setCartItems(updatedCart);
    }

    return (
        <div className="w-full">
            <div className="card flex-row items-start justify-between bg-base-100 w-full rounded-2xl p-5">
                <div className="flex items-center gap-4">
                    <img className="w-20 sm:w-52 h-20 sm:h-32 rounded-2xl object-contain" src={product_image} alt="" />
                    <div className="space-y-4">
                        <h2 className="text-base sm:text-xl font-bold">{product_title}</h2>
                        <p className="text-xs sm:text-sm text-[#09080F99]">{description}</p>
                        <p className="text-sm sm:text-base font-medium text-[#09080FCC]">Price: ${price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemove(product_id)} className="btn btn-sm block btn-ghost"><IoMdCloseCircleOutline size={30} className="text-red-500" /></button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    setCartItems: PropTypes.func.isRequired,
}

export default CartItem;