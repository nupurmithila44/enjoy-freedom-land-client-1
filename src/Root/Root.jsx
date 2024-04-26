import { Outlet } from "react-router-dom";
import Nav from "../sheard/Nav";
import Footer from "../sheard/Footer";


const Root = () => {
    return (
        <div className=" px-40 mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;