import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>About Us | Gadget Heaven</title>
            </Helmet>

           <div className="w-full bg-[#9538E2] py-6 sm:py-8 lg:py-10">
                <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] mx-auto space-y-3 lg:space-y-4">
                    <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">About Us</h1>
                    <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div> 
            <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-8 sm:py-10 lg:py-12 space-y-6">
                <p className="text-sm/normal sm:text-base/normmal lg:text-lg/normal text-justify text-[#09080FCC]">Welcome to <span className="font-bold">Gadget Heaven</span>, your go-to destination for the latest in electronic accessories. From sleek laptops and cutting-edge smartphones to advanced smartwatches, we are passionate about connecting people with technology that enhances their lives. Founded with a vision to make quality tech accessible, Gadget Heaven combines competitive pricing with a wide selection to meet the diverse needs of students, professionals, and tech enthusiasts alike.</p>
                <p className="text-sm/normal sm:text-base/normmal lg:text-lg/normal text-justify text-[#09080FCC]">At Gadget Heaven, we’re committed to putting our customers first. Every product undergoes thorough quality checks to ensure reliability and durability, while our team stands ready to assist in finding the perfect gadgets to fit your lifestyle. Join us on a journey through technology, where satisfaction and innovation go hand in hand.</p>
                <div className="w-full flex flex-col items-start gap-3">
                    <p className="text-base sm:text-lg lg:text-xl font-bold">Contact Us</p>
                    <i className="text-sm/normal sm:text-base/normmal lg:text-lg/normal text-[#09080FCC]">📍 Address: 123 Tech Avenue, Silicon City, TX 75001</i>
                    <i className="text-sm/normal sm:text-base/normmal lg:text-lg/normal text-[#09080FCC]">📞 Phone: +1 (555) 012-3456</i>
                    <i className="text-sm/normal sm:text-base/normmal lg:text-lg/normal text-[#09080FCC]">✉️ Email: support@gadgetheaven.com</i>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;