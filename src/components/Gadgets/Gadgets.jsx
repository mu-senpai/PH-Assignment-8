import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useLoaderData, useParams } from "react-router-dom";

const Gadgets = () => {
    const { categoryName } = useParams();
    const data = useLoaderData();

    const [products, setProducts] = useState([]);
    const allProducts = data?.products || [];

    useEffect(() => {
        // const fetchFallbackData = async () => {
        //     try {
        //         const storedProducts = JSON.parse(localStorage.getItem('all-products'));
                
        //         if (storedProducts) {
        //             const filteredProducts = categoryName
        //                 ? storedProducts.filter(product => product.category === categoryName)
        //                 : storedProducts;
        //             setProducts(filteredProducts);
        //         } else {
        //             const response = await fetch('products.json');
        //             const fallbackData = await response.json();
        //             const fallbackProducts = fallbackData.products || [];
                    
        //             const categoryFiltered = categoryName
        //                 ? fallbackProducts.filter(product => product.category === categoryName)
        //                 : fallbackProducts;
        //             setProducts(categoryFiltered);
                    
        //             localStorage.setItem('all-products', JSON.stringify(fallbackProducts));
        //         }
        //     } catch (error) {
        //         console.error("Error fetching fallback data:", error);
        //         setProducts([]);
        //     }
        // };

        if (allProducts.length > 0) {
            const categoryFiltered = categoryName
                ? allProducts.filter(product => product.category === categoryName)
                : allProducts;
            setProducts(categoryFiltered);
            
            // if (!localStorage.getItem('all-products')) {
            //     localStorage.setItem('all-products', JSON.stringify(allProducts));
            // }
        } else {
            // fetchFallbackData();
            setProducts([]);
        }
    }, [allProducts, categoryName]);

    if (products.length === 0) {
        return <p>Loading products...</p>;
    } else {
        return (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map(product => (
                    <Gadget key={product.product_id} product={product} />
                ))}
            </div>
        );
    }
};

export default Gadgets;