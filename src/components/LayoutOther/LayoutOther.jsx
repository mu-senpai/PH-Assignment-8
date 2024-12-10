import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const LayoutOther = () => {
    return (
        <div className="w-full min-[1920px]:w-[120rem] min-h-screen mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default LayoutOther;