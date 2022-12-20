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
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              
              <li>
                <Link to={"/service"}>Service</Link>
              </li>
              <li>
                <Link to={"/myreviews"}>My Reviews</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li className="font-semibold">
                <Link onClick={handleSignOut}>Log out</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold ">
              <Link to={"/login"}>Log in</Link>
            </li>
            <li className="font-semibold">
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
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
              <li>
                <Link to={"/login"}>Log in</Link>
              </li>
              <li>
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
          <img src={logo} width={150} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
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
