import { useContext, useEffect } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import CartItem from "../CartItem/CartItem";
import PropTypes from "prop-types";
import { CartContext } from "../Dashboard/Dashboard";
import modalImg from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Cart = () => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useContext(CartContext);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
        setCartItems(storedCartItems);
    }, [setCartItems, cartItems]);

    const handleSortByPrice = (items) => {
        const sortedItems = items.sort((a, b) => b.price - a.price);
        localStorage.setItem('cart-items', JSON.stringify(sortedItems));
    }

    const handlePurchase = (items) => {
        if (items.length > 0) {
            document.getElementById('my_modal_5').showModal();
        } else {
            toast.error(`Select at least one item to purchase.`, {
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

    const handleModalBtn = () => {
        localStorage.setItem('cart-items', '[]');
        navigate('/');
    }

    return (
        <div className="w-[90%] xl:w-[80%] mx-auto py-8 sm:py-10 lg:py-12 space-y-6">
            <Helmet>
                <title>Cart | Gadget Heaven</title>
            </Helmet>

            <div className="w-full flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:flex-grow flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold">Cart</h3>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold">Total cost: ${cartItems.reduce((prev, curr) => prev + curr.price, 0)}</h3>
                </div>
                <div className="w-full lg:w-[27.27%] flex items-center justify-center gap-4 lg:gap-2 xl:gap-3">
                    <button onClick={() => handleSortByPrice(cartItems)} className="btn lg:btn-sm xl:btn-md btn-ghost border border-[#9538E2] text-[#9538E2] inline-flex items-center gap-2 rounded-[2rem]">Sort by Price
                        <FaSortAmountDown />
                    </button>
                    <button onClick={() => handlePurchase(cartItems)} className="btn lg:btn-sm xl:btn-md text-white bg-gradient-to-r from-[#9739e8] via-[#e264e6] to-[#9739e8] rounded-[2rem]">Purchase</button>
                </div>
            </div>

            {
                cartItems.length === 0 ?
                    <div className="w-full min-h-screen 2xl:min-h-[40rem] flex flex-col items-center justify-center">
                        <h1 className="text-3xl/normal sm:text-4xl/normal lg:text-5xl/normal font-bold text-center text-red-600">Cart is empty.</h1>
                    </div> :
                    cartItems.map(item => <CartItem key={item.product_id} product={item}></CartItem>)
            }

            <dialog id="my_modal_5" className="modal modal-middle">
                <div className="modal-box flex flex-col items-center gap-4">
                    <img src={modalImg} alt="" />
                    <h3 className="text-2xl font-bold">Payment Successful</h3>
                    <hr className="w-full"/>
                    <p className="text-[#09080F99] font-medium">Thanks for purchasing!</p>
                    <p className="text-[#09080F99] font-medium">Total: ${cartItems.reduce((prev, curr) => prev + curr.price, 0)}</p>
                    <div className="w-full modal-action">
                        <form className="w-full" method="dialog">
                            <button onClick={handleModalBtn} className="btn w-full border-none bg-[#e4e3e3] text-black rounded-[2rem]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
}

export default Cart;