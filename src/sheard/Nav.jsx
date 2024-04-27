import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPovider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

   const navLinks = <>
    <NavLink to='/'><li><a>Home</a></li></NavLink>
    <NavLink to='/register'><li><a>Register</a></li></NavLink>
    <NavLink to='/login'><li><a>login</a></li></NavLink>
    <NavLink to='/addTours'><li><a>addTourist</a></li></NavLink>
  </>
  return (
    <div className="navbar bg-base-100 border-2 rounded-sm mb-4 dark:bg-[#304f47] dark:text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-sm">ENJOY TOURISM</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-2 relative group">

          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {
                user && <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              }
            </div>
          </div>


          <div className="absolute hidden border-2 w-60 text-center text-black shadow-lg rounded-md p-2 group-hover:block z-10 top-[60px] right-0">

            {
              user && <p>{user.displayName}</p>
            }
          </div>
        </div>
        {
          user && <button onClick={handleLogOut} className="btn w-[120px] bg-[#e8d4b3] text-black text-base font-semibold">Sign Out</button> ||
          <Link to="/login" className="btn w-[100px] bg-[#e8d4b3] text-black text-base font-semibold">Login</Link>
        }
      </div>
    </div>
  );
};

export default Nav;