import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Nexflix from "/Netfilxhome.png";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleClickOutside = () => {
			if (isOpen) setIsOpen(false);
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isOpen]);

	return (
		<nav className="fixed top-0 z-10 text-white bg-black/90 w-full max-h-[90px]">
			<div className="container mx-auto md:flex md:justify-between sm:items-center gap-10 h-full">
				<figure className="relative flex justify-center items-center h-[100px] sm:pl-10">
					<Link to="/">
						<img
							src={Nexflix}
							alt="Movie Tracker"
							className="object-cover w-[250px] h-full"
						/>
					</Link>
					{isOpen ? (
						<XMarkIcon
							className="absolute right-5 top-10 w-9 cursor-pointer sm:hidden"
							onClick={(e) => {
								e.stopPropagation();
								handleIsOpen();
							}}
						/>
					) : (
						<Bars3Icon
							className="absolute right-5 top-10 w-9 cursor-pointer sm:hidden"
							onClick={(e) => {
								e.stopPropagation();
								handleIsOpen();
							}}
						/>
					)}
				</figure>

				<div
					className={`sm:flex sm:items-center sm:justify-center text-base pb-5 md:pb-0 
						transition-all duration-300 overflow-hidden
						${isOpen
							? "absolute top-[100px] left-0 w-full bg-black/90 py-6 max-h-[500px] opacity-100"
							: "absolute top-[100px] left-0 w-full max-h-0 opacity-0 py-0 sm:static sm:max-h-none sm:opacity-100 sm:py-0"
					}`}>
					<ul className="grid justify-center gap-10 text-center sm:flex sm:items-center sm:gap-8 w-full ">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									`underline-animation ${isActive && "text-red-500 font-semibold"}`
								}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									`underline-animation ${isActive && "text-red-500 font-semibold"}`
								}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/server"
								className={({ isActive }) =>
									`underline-animation ${isActive && "text-red-500 font-semibold"}`
								}>
								Server
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/categories"
								className={({ isActive }) =>
									`underline-animation ${isActive && "text-red-500 font-semibold"}`
								}>
								Categories
							</NavLink>
						</li>
					</ul>
					<div className="flex justify-center items-center mt-6 gap-2 sm:mt-0 md:pr-10 w-1/3 text-sm xl:text-base">
						<Link
							to="/signup"
							className="px-4 py-2 rounded hover:bg-gray-800 transition-colors">
							Sign up
						</Link>
						<Link
							to="/login"
							className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors">
							Login
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
