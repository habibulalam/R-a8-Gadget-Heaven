import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../../App";


const Nav = () => {

    const currentLocation = useLocation();
    const { pathname } = currentLocation;
    // console.log(pathname);

    // Context API
    const { cartProduct, wishlistProduct, handleToggleCartWishlist } = useContext(ProductContext);

    // Navigate to the dashboard
    const navigateToDashboard = useNavigate();

    const handleNavigate = (boleanValueFromNav) => {
        handleToggleCartWishlist(boleanValueFromNav);
        navigateToDashboard('/dashboard');
    }

    return (
        <section className={`max-w-[1540px] w-[90%] mx-auto mt-4 border-b-0 ${pathname === '/' ? "border" : ""} px-2 pt-2 rounded-t-4xl sticky -top-2 z-50`}>
            <div className={`navbar bg-base-100  border-b-0 rounded-t-4xl ${pathname === '/' ? 'bg-purple-600 text-white border' : 'bg-base-100'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            // DroDown Menu
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 border shadow-lg shadow-black text-black">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'statistics'}>Statistics</NavLink></li>
                            <li><NavLink to={'dashboard'}>Dashboard</NavLink></li>
                            <li><NavLink to={'contactUs'}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Main Nav List */}
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "bg-white text-purple-600" : ""}
                        >
                            Home</NavLink></li>
                        <li><NavLink to={'statistics'} className={({ isActive }) => isActive ? "bg-purple-600 text-white" : ""}
                        >
                            Statistics</NavLink></li>
                        <li><NavLink to={'dashboard'} className={({ isActive }) => isActive ? "bg-purple-600 text-white" : ""}>Dashboard</NavLink></li>
                        <li><NavLink to={'contactUs'} className={({ isActive }) => isActive ? "bg-purple-600 text-white" : ""}>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <button onClick={()=> handleNavigate(true)} className="btn btn-ghost btn-circle relative">
                            <i className="fa-solid fa-cart-shopping relative"></i>
                            <span className="absolute top-0 right-0 badge badge-xs rounded-full badge-error text-white px-1 py-1">{cartProduct ? cartProduct.length : 0}</span>
                        </button>
                        <button onClick={()=> handleNavigate(false)} className="btn btn-ghost btn-circle relative">
                            <i className="fa-regular fa-heart"></i>
                            <span className="absolute top-0 right-0 badge badge-xs rounded-full badge-error text-white px-1 py-1">{wishlistProduct ? wishlistProduct.length : 0}</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Nav;