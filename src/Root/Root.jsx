import { Outlet } from "react-router-dom";
import Nav from "../sheard/Nav";
import Footer from "../sheard/Footer";


const Root = () => {
    return (
        <div className=" container  mx-auto lg:px-5 px-2">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;