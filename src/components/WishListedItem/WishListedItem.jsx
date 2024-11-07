import { IoMdCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../Dashboard/Dashboard";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListedItem = ({product, setItems}) => {

    const [setCartItems] = useContext(CartContext);

    const {product_image, product_title, price, description, product_id} = product;

    const handleRemove = (id) => {
        const getList = JSON.parse(localStorage.getItem('wish-list'));
        const updatedList = getList.filter(item => item.product_id !== id);
        localStorage.setItem('wish-list', JSON.stringify(updatedList));
        toast.error(`Selected item is removed from the wishlist.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setItems(updatedList);
    }

    const handleMoveToCart = id => {
        const getList = JSON.parse(localStorage.getItem('wish-list'));
        const updatedList = getList.filter(item => item.product_id !== id);
        localStorage.setItem('wish-list', JSON.stringify(updatedList));
        setItems(updatedList);
    }

    const handleAddToCart = () => {
        if (JSON.parse(localStorage.getItem('cart-items'))) {
            const cartItems = JSON.parse(localStorage.getItem('cart-items'));   
            if (cartItems.find(item => item.product_id === product.product_id)) {
                toast.error(`This item is already in the cart.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                const updateCartItems = [...cartItems, product];
                localStorage.setItem('cart-items', JSON.stringify(updateCartItems));
                handleMoveToCart(product_id);
                toast.success(`${product.product_title} has added to the cart!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setCartItems(updateCartItems);
            }
        } else {
            const updateCartItems = [product];
            localStorage.setItem('cart-items', JSON.stringify(updateCartItems));
            handleRemove(product.product_id);
            setCartItems(updateCartItems);
            toast.success(`${product.product_title} has added to the cart!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="w-full">
            <div className="card flex-row items-start justify-between bg-base-100 w-full rounded-2xl p-5">
                <div className="flex items-center gap-4">
                    <img className="w-24 sm:w-64 h-24 sm:h-48 rounded-2xl object-contain" src={product_image} alt="" />
                    <div className="space-y-4">
                        <h2 className="text-base sm:text-xl font-bold">{product_title}</h2>
                        <p className="text-xs sm:text-sm text-[#09080F99]">{description}</p>
                        <p className="text-sm sm:text-base font-medium text-[#09080FCC]">Price: ${price}</p>
                        <button onClick={handleAddToCart} className="btn btn-sm sm:btn-md border-none bg-[#9538E2] text-white rounded-[2rem]">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemove(product_id)} className="btn btn-sm block btn-ghost"><IoMdCloseCircleOutline size={30} className="text-red-500" /></button>
                </div>
            </div>
        </div>
    );
};

WishListedItem.propTypes = {
    product: PropTypes.object.isRequired,
    setItems: PropTypes.func.isRequired,
    setCartItems: PropTypes.func.isRequired,
}

export default WishListedItem;