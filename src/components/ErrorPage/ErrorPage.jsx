import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    useEffect(() => {
        document.title = `${error.status} - ${error.statusText} | Gadget Heaven`
    }, [error])

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">Ooops!</h1>
            <p className="text-xl/normal sm:text-2xl/normal font-medium text-center text-[#09080F99]">{`${error.status}: ${error.statusText}`}</p>
            <Link to={'/'} className="hover:underline text-blue-500">Go to Home page</Link>
        </div>
    );
};

export default ErrorPage;