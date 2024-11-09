import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Gadgets = () => {
    const { categoryName } = useParams();
    const data = useLoaderData();

    const [products, setProducts] = useState([]);
    const allProducts = data?.products || [];

    useEffect(() => {
        if (allProducts.length > 0) {
            const categoryFiltered = categoryName
                ? allProducts.filter(product => product.category === categoryName)
                : allProducts;
            setProducts(categoryFiltered);
        } else {
            setProducts([]);
        }
    }, [allProducts, categoryName]);

    if (products.length === 0) {
        return <p>Loading products...</p>;
    } else {
        return (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    categoryName ?
                    <Helmet>
                        <title>{categoryName} | Gadget Heaven</title>
                    </Helmet> :
                    <Helmet>
                        <title>Home | Gadget Heaven</title>
                    </Helmet>
                }
                {products.map(product => (
                    <Gadget key={product.product_id} product={product} />
                ))}
            </div>
        );
    }
};

export default Gadgets;