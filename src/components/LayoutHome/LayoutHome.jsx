import Navbar from "../Navbar/Navbar";
import BannerImg from "../../assets/banner.jpg";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const LayoutHome = () => {

    const handleShopNow = () => {
        const element = document.getElementById("products");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="w-full min-[1920px]:w-[120rem] mx-auto pt-6">
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <div className="w-[96.25%] h-[30rem] sm:h-[35rem] lg:h-[43.375rem] mx-auto border border-[#09080F1A] rounded-[2rem] p-2 mb-[12rem] sm:mb-[20rem] lg:mb-[28rem] xl:mb-[30rem]">
                <div className="w-full h-full rounded-3xl bg-[#9538E2] relative">
                    <Navbar></Navbar>
                    <div className="w-full pt-3 sm:pt-5 lg:pt-7 flex flex-col items-center gap-3 sm:gap-5 lg:gap-6">
                        <h2 className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[75%] text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal font-bold text-center text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                        <p className="w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] text-xs/normal sm:text-sm/normal md:text-base/normal text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button onClick={handleShopNow} className="btn xl:px-6 bg-white text-[#9538E2] border-none rounded-[2rem]">Shop Now</button>
                    </div>
                    <div className="w-[90%] sm:w-[80%] lg:w-[72%] h-[15rem] sm:h-[25rem] lg:h-[34rem] xl:h-[38rem] border-2 border-white rounded-[2rem] absolute left-[5%] sm:left-[10%] lg:left-[14%] right-[5%] sm:right-[10%] lg:right-[14%] -bottom-[30%] sm:-bottom-[45%] lg:-bottom-[53%] p-3 sm:p-5 lg:p-6 bg-white/[0.2]">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded-3xl" src={BannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="products" className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default LayoutHome;