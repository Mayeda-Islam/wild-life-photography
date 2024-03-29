import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/wildlife-photography-logo-removebg-preview.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItemsEnd = (
    <>
      {user?.email ? (
        <>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className=" text-white  font-bold text-lg">
                <Link to={"/service"}>Service</Link>
              </li>
              <li className=" text-white font-bold text-lg">
                <Link to={"/myreviews"}>My Reviews</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li className="font-bold hidden lg:block text-white mr-8 text-lg">
                <Link onClick={handleSignOut}>Log out</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="navbar-end ">
          <ul className="menu menu-horizontal mr-8 px-1 ">
            <li className="font-semibold hidden lg:block text-white  text-lg ">
              <Link to={"/login"}>Log in</Link>
            </li>
            <li className="font-semibold hidden lg:block text-white  text-lg">
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-violet-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact font-semibold text-dark dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li cl>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/myreviews"}>My Reviews</Link>
              </li>
              <li>
                <Link to={"/service"}>Service</Link>
              </li>

              {user?.email ? (
                <li>
                  <Link onClick={handleSignOut}>Log out</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={"/login"}>Log in</Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img src={logo} width={150} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
            <li className="font-bold text-lg">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        {menuItemsEnd}
      </div>
    </div>
  );
};

export default Header;
