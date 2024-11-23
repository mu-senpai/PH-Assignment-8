import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Statistics = () => {

    useEffect(() => {
        document.title = "Statistics | Gadget Heaven"
    }, [])

    return (
        <div className="w-full">
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>

            <div className="w-full bg-[#9538E2] py-6 sm:py-8 lg:py-10">
                <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%] mx-auto space-y-3 lg:space-y-4">
                    <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">Statistics</h1>
                    <p className="text-xs/normal sm:text-sm/normal lg:text-base/normal text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto min-h-screen 2xl:min-h-[40rem] flex flex-col items-center justify-center">
                <h1 className="text-3xl/normal sm:text-4xl/normal lg:text-5xl/normal font-bold text-center text-red-600">No statistics are available at this moment.</h1>
            </div>
        </div>
    );
};

export default Statistics;