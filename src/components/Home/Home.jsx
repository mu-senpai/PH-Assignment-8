import { NavLink, Outlet, useLoaderData} from "react-router-dom";
import Category from "../Category/Category";
import { useEffect, useState } from "react";

const Home = () => {
    
    const data = useLoaderData();
    const categories = data?.categories || [];
    const [categoryNames, setCategoryNames] = useState([]);

    useEffect(() => {
        const fetchCategoriesFallback = async () => {
            
            const storedCategories = JSON.parse(localStorage.getItem('categories'));
            
            if (storedCategories) {
                setCategoryNames(storedCategories);
            } else {
                try {
                    const response = await fetch('/categories.json');
                    if (!response.ok) throw new Error("Network response was not ok");
                    const data = await response.json();
                    const fallbackCategories = data.categories.map(category => category.category_name);
                    setCategoryNames(fallbackCategories);
                    
                    localStorage.setItem('categories', JSON.stringify(fallbackCategories));
                } catch (error) {
                    console.error("Error fetching fallback categories:", error);
                }
            }
        };

        if (categories.length > 0) {
            const categoryNamesFromLoader = categories.map(category => category.category_name);
            setCategoryNames(categoryNamesFromLoader);
            
            localStorage.setItem('categories', JSON.stringify(categoryNamesFromLoader));
        } else {
            fetchCategoriesFallback();
        }
    }, [categories]);




    return (
        <div className="w-full min-h-screen space-y-5 sm:space-y-8 lg:space-y-12 pb-10 sm:pb-16 lg:pb-24">
            <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0 lg:justify-between">

                <div className="w-full lg:w-[18.75%] flex flex-col p-6 bg-white gap-6 rounded-2xl">
                    <NavLink to={'/'} className={({isActive}) => `w-full btn rounded-[2rem] ${isActive ? 'bg-[#9538E2] text-bold text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}>All Products</NavLink>
                    {
                        categoryNames.map((category, idx) => <Category key={idx} category={category}></Category>)
                    }
                </div>

                <div className="w-full lg:w-[79.375%]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;