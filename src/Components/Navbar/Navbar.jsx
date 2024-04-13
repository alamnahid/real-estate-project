import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
const Navbar = () => {
    return (
       <div className="fixed w-full bg-white">
         <div className="pt-3 mx-[5%]">
            <div className="navbar bg-[#FAFAFA] px-[2%] rounded-[2rem] py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive, isPending }) => isActive ? "border-b-[2px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                            <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <div>
                            <img className="" src={logo} alt="website logo" />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex bg-white px-12 rounded-[2rem]">
                    <ul className="menu menu-horizontal px-1 text-[15px] space-x-4">
                        <li><NavLink to='/' className={({ isActive, isPending }) => isActive ? "border-b-[2px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive, isPending }) => isActive ? "border-b-[1px]" : isPending ? "pending" : ""}>Home</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn-neutral btn bg-white text-[15px] text-slate-700 hover:text-white px-8 rounded-[2rem] border-[1px] border-gray-200 shadow-none">Contact Us</button>
                </div>
            </div>

        </div>
       </div>
    );
};

export default Navbar;