const Footer = () => {
    return (
        <div className="w-full bg-white">
            <div className="w-full min-[1920px]:w-[97.5rem] mx-auto">

                <footer className="footer footer-center text-black py-10 sm:py-16 lg:py-24">
                    <aside className="w-[90%] mx-auto space-y-3">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Gadget Heaven</h1>
                        <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal font-medium text-center text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
                    </aside>

                    <div className="w-[95%] sm:w-[90%] lg:w-[81.25%] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 content-start">
                        <div className="text-center sm:text-left space-y-4">
                            <h4 className="text-lg font-semibold text-center">Services</h4>
                            <ul className="flex flex-col items-center text-[#09080F99] space-y-3">
                                <li><a className="link link-hover">Product Support</a></li>
                                <li><a className="link link-hover">Order Tracking</a></li>
                                <li><a className="link link-hover">Shipping & Delivery</a></li>
                                <li><a className="link link-hover">Returns</a></li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left space-y-4">
                            <h4 className="text-lg font-semibold text-center">Company</h4>
                            <ul className="flex flex-col items-center text-[#09080F99] space-y-3">
                                <li><a className="link link-hover">About Us</a></li>
                                <li><a className="link link-hover">Careers</a></li>
                                <li><a className="link link-hover">Contact</a></li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left space-y-4">
                            <h4 className="text-lg font-semibold text-center">Legal</h4>
                            <ul className="flex flex-col items-center text-[#09080F99] space-y-3">
                                <li><a className="link link-hover">Terms of Service</a></li>
                                <li><a className="link link-hover">Privacy Policy</a></li>
                                <li><a className="link link-hover">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;