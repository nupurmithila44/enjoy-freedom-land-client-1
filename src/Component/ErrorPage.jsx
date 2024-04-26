import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            {
                error.status === 404 &&
                <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                                <span className="sr-only">Error</span>404
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnot find this page.</p>
                            <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                            <Link to='/'><button className="btn bg-[#dbb781] text-white">back to home</button></Link>
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default ErrorPage;