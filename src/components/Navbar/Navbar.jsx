import { NavLink, useLocation } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";


const Navbar = () => {

    const location = useLocation();
    const isHomePage = (location.pathname === '/') || (location.pathname === '/category/Computers') || (location.pathname === '/category/Phones') || (location.pathname === '/category/Smart%20Watches');

    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) => `btn btn-sm btn-ghost ${isActive ? isHomePage ? 'font-extrabold underline' : 'font-extrabold text-[#9538E2]' : ''}`}>Home</NavLink></li>
        <li><NavLink to={'/other/statistics'} className={({ isActive }) => `btn btn-sm btn-ghost ${isActive ? isHomePage ? 'font-extrabold underline' : 'font-extrabold text-[#9538E2]' : ''}`}>Statistics</NavLink></li>
        <li><NavLink to={'/other/dashboard/cart'} className={({ isActive }) => `btn btn-sm btn-ghost ${isActive ? isHomePage ? 'font-extrabold underline' : 'font-extrabold text-[#9538E2]' : ''}`}>Dashboard</NavLink></li>
        <li><NavLink to={'/other/about'} className={({ isActive }) => `btn btn-sm btn-ghost ${isActive ? isHomePage ? 'font-extrabold underline' : 'font-extrabold text-[#9538E2]' : ''}`}>About Us</NavLink></li>
    </>

    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem('cart-items'));
        if (getCart) {
            setCartItems(getCart);
        } else {
            setCartItems([]);
        }

        const getWishList = JSON.parse(localStorage.getItem('wish-list'));
        if (getWishList) {
            setWishlist(getWishList);
        } else {
            setWishlist([]);
        }
    }, [cartItems, wishlist])

    return (
        <div className={`w-full ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
            <div className={`navbar w-[97%] sm:w-[95%] md:w-[90%] lg:w-[82%] mx-auto ${isHomePage ? 'text-white' : 'text-black'}`}>

                {/* Logo */}
                <div className="navbar-start">
                    <NavLink to={'/'} className="text-base sm:text-lg md:text-xl font-bold">Gadget Heaven</NavLink>
                </div>

                {/* Center menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>


                <div className="navbar-end gap-2">

                    {/* Shopping Cart */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-xs sm:btn-sm bg-[white] btn-circle">
                            <div className="indicator text-black">
                                <FaShoppingCart size={18} />
                                <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold text-black">{cartItems.length} Items</span>
                                <span className="text-info">Subtotal: ${cartItems.reduce((prev, curr) => prev + curr.price, 0)}</span>
                                <div className="card-actions">
                                    <NavLink to={`/other/dashboard/cart`} className={`btn bg-[#9538E2] text-white btn-block rounded-[2rem]`}>View Cart</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wishlist */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-xs sm:btn-sm bg-white btn-circle">
                            <div className="indicator text-black">
                                <CiHeart size={18} />
                                <span className="badge badge-sm indicator-item">{wishlist.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold text-black">{wishlist.length} Items</span>
                                <div className="card-actions">
                                    <NavLink to={`/other/dashboard/wishlist`} className={`btn bg-[#9538E2] text-white btn-block rounded-[2rem]`}>View Wishlist</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-xs sm:btn-sm btn-ghost lg:hidden">
                            <MdMenuOpen size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {links}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;