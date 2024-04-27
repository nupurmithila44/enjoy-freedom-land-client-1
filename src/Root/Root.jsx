import { Outlet } from "react-router-dom";
import Nav from "../sheard/Nav";
import Footer from "../sheard/Footer";


const Root = () => {
    return (
        <div className=" container w-[300px] lg:w-[1180px] md:w-[760px]  mx-auto ">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;