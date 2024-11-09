import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {

    const { productId } = useParams();
    const productIdInt = parseInt(productId);
    const data = useLoaderData();
    const allProducts = data.products;
    console.log(allProducts);
    // const allProducts = JSON.parse(localStorage.getItem('all-products'));

    const selectedProduct = allProducts?.find(product => product.product_id === productIdInt);

    const { product_image, product_title, price, availability, description, specification, rating } = selectedProduct;

    const [isAvailable, setIsAvailable] = useState(availability);
    const [notWishlisted, setNotWishlisted] = useState(true);

    useEffect(() => {
        if (availability) {
            const getCart = JSON.parse(localStorage.getItem('cart-items'));
            if (getCart) {
                if (getCart.find(item => item.product_id === selectedProduct.product_id)) {
                    setIsAvailable(false);
                } else {
                    setIsAvailable(true);
                }
            } else {
                setIsAvailable(true);
            }
        } else {
            setIsAvailable(false);
        }

        if (notWishlisted) {
            const getCart = JSON.parse(localStorage.getItem('wish-list'));
            if (getCart) {
                if (getCart.find(item => item.product_id === selectedProduct.product_id)) {
                    setNotWishlisted(false);
                } else {
                    setNotWishlisted(true);
                }
            } else {
                setNotWishlisted(true);
            }
        } else {
            setNotWishlisted(false);
        }
    }, [selectedProduct, availability, notWishlisted])

    const handleAddToCart = product => {
        if (isAvailable) {
            setIsAvailable(false);
            if (JSON.parse(localStorage.getItem('cart-items'))) {
                const cartItems = JSON.parse(localStorage.getItem('cart-items'));
                const updateCartItems = [...cartItems, product];
                localStorage.setItem('cart-items', JSON.stringify(updateCartItems));
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
            } else {
                const updateCartItems = [product];
                localStorage.setItem('cart-items', JSON.stringify(updateCartItems));
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
    }

    const handleAddToWishlist = product => {
        if (notWishlisted) {
            setNotWishlisted(false);
            if (JSON.parse(localStorage.getItem('wish-list'))) {
                const cartItems = JSON.parse(localStorage.getItem('wish-list'));
                const updateCartItems = [...cartItems, product];
                localStorage.setItem('wish-list', JSON.stringify(updateCartItems));
                toast.success(`${product.product_title} has added to the wishlist!`, {
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
                const updateCartItems = [product];
                localStorage.setItem('wish-list', JSON.stringify(updateCartItems));
                toast.success(`${product.product_title} has added to the wishlist!`, {
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
    }

    return (
        <div className="w-full relative">
            <Helmet>
                <title>{product_title} | Gadget Heaven</title>
            </Helmet>

            <div className="w-full h-[20rem] lg:h-[30rem] bg-[#9538E2] pt-5 sm:pt-7 lg:pt-8 mb-[42rem] sm:mb-[50rem] lg:mb-[30rem]">
                <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] mx-auto space-y-3 lg:space-y-4">
                    <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">Product Details</h1>
                    <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className="w-[90%] sm:w-[80%] lg:w-[72%] h-[50rem] sm:h-[56.5rem] lg:h-[38rem] rounded-[2rem] absolute left-[5%] sm:left-[10%] lg:left-[14%] right-[5%] sm:right-[10%] lg:right-[14%] -bottom-[190%] sm:-bottom-[230%] lg:-bottom-[65%] p-4 sm:p-6 lg:p-8 bg-white flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0">

                <div className="w-full lg:w-[35%] h-[20rem] sm:h-[25rem] lg:h-full">
                    <img src={product_image} className="w-full h-full object-contain rounded-2xl" alt="" />
                </div>

                <div className="w-full lg:w-[62.5%] lg:h-full flex flex-col items-start lg:justify-center gap-4">
                    <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold">{product_title}</h1>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-[#09080FCC]">Price: ${price}</p>
                    {
                        isAvailable ? <p className="text-xs xl:text-sm px-2 py-1 rounded-[2rem] border border-[#309C08] text-[#309C08] bg-[#309C081A] font-medium">In Stock</p> : <p className="text-xs xl:text-sm px-2 py-1 rounded-[2rem] border border-red-600 text-red-600 bg-red-600/[0.1] font-medium">Out of Stock</p>
                    }
                    <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal xl:text-lg/normal text-[#09080F99]">{description}</p>
                    <h4 className="text-xs/normal sm:text-sm/normal lg:text-base/normal xl:text-lg/normal text-black font-bold">Specification:</h4>
                    <ol className="list-decimal ml-5">
                        {
                            specification.map((spec, idx) => <li key={idx} className="text-xs/normal sm:text-sm/normal lg:text-base/normal xl:text-lg/normal text-[#09080F99]">{spec}</li>)
                        }
                    </ol>
                    <div>
                        <h4 className="text-xs/normal sm:text-sm/normal lg:text-base/normal xl:text-lg/normal text-black font-bold">Rating:</h4>
                        <ReactStars
                            count={5}
                            value={rating}
                            size={30}
                            isHalf={true}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleAddToCart(selectedProduct)} className={`btn ${isAvailable ? '' : 'btn-disabled'} border-none bg-[#9538E2] rounded-[2rem] text-white font-bold inline-flex items-center gap-1`}>Add To Card
                            <CiShoppingCart size={25} />
                        </button>
                        <button onClick={() => handleAddToWishlist(selectedProduct)} className={`btn ${notWishlisted ? '' : 'btn-disabled'} btn-circle btn-ghost border-2 border-[#09080F0D] text-black`}>
                            <CiHeart size={25} />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;