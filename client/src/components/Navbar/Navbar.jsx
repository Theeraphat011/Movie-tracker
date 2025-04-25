import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Nexflix from "/netflix.png";
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="fixed top-0 px-7 flex justify-between items-center bg-black/80 text-white backdrop-blur-sm shadow-md shadow-zinc-900/30 w-full z-10">
			<Link to={"/"} className="relative cursor-pointer">
				<img src={Nexflix} alt={"Nexflix-logo"} width={90} height={10} />
			</Link>
			<ul className="hidden sm:flex gap-11">
				<li className="underline-animation">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="underline-animation">
					<Link to={"/"}>About</Link>
				</li>
				<li className="underline-animation">
					<Link to={"/"}>Service</Link>
				</li>
				<li className="underline-animation">
					<Link to={"/"}>Help</Link>
				</li>
			</ul>
			<div>
				<Bars3Icon className="cursor-pointer h-8 w-8 text-gray-300 sm:hidden" />
				<div className="hidden sm:block font-semibold">
					<Link to={"/"} className="mr-5 underline-animation">
						Login
					</Link>
					<Link
						to={"/"}
						className="bg-white px-5 py-2 text-black hover:bg-zinc-800 hover:text-white transition-colors duration-200 ">
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
