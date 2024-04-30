import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPovider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, settheme]=useState('light')

  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localtheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localtheme)
  },[theme])

  const handletoggle = e =>{
    if(e.target.checked){
      settheme('synthwave')
    }
    else{
      settheme('light')
    }
  }
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const navLinks = <>
    <NavLink to='/'><li><a>Home</a></li></NavLink>
    <NavLink to='/addTours'><li><a>Add Tourist</a></li></NavLink>
    <NavLink to='/touristsSpot'><li><a>Tourist Spot</a></li></NavLink>
    <NavLink to='/userPages'><li><a>My List</a></li></NavLink>
    <NavLink to='/gellary'><li><a>Gellary</a></li></NavLink>
    <NavLink to='/contactUs'><li><a>Contact Us</a></li></NavLink>
  </>
  return (
    <div className="navbar bg-base-100 border-2 rounded-sm mb-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl font-semibold">TOURIST</a>
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
          user && <button onClick={handleLogOut} className="btn  bg-[#e8d4b3] text-black text-base font-semibold">Sign Out</button> ||
          <Link to="/login" className="btn bg-[#e8d4b3] text-black text-base font-semibold">Login</Link>
        }
      </div>
      {/* theme  */}
      <label className="cursor-pointer grid place-items-center">
        <input onChange={handletoggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    </div>
  );
};

export default Nav;