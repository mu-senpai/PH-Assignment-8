import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const CartContext = createContext('cart');

const Dashboard = () => {

    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="w-full">
            <div className="w-full bg-[#9538E2] py-6 sm:py-8 lg:py-10">
                <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] mx-auto space-y-3 lg:space-y-4">
                    <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">Dashboard</h1>
                    <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="w-full text-center space-x-4">
                        <NavLink to={'cart'} className={({isActive}) => `btn btn-ghost px-9 sm:px-16 border border-white rounded-[2rem] ${isActive ? 'bg-white text-[#9538E2]' : 'text-white'}`}>Cart</NavLink>
                        <NavLink to={'wishlist'} className={({isActive}) => `btn btn-ghost px-9 sm:px-16 border border-white rounded-[2rem] ${isActive ? 'bg-white text-[#9538E2]' : 'text-white'}`}>Wishlist</NavLink>
                    </div>
                </div>
            </div>
            <CartContext.Provider value={[cartItems, setCartItems]}>
                <Outlet></Outlet>
            </CartContext.Provider>
        </div>
    );
};

export default Dashboard;