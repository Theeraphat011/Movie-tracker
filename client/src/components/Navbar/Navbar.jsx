import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="py-3 px-7 flex justify-between items-center bg-zinc-700 text-white">
			<div>LOGO</div>
			<ul className="flex gap-2">
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/"}>About</Link>
				</li>
				<li>
					<Link to={"/"}>Service</Link>
				</li>
				<li>
					<Link to={"/"}>Help</Link>
				</li>
			</ul>
			<div>
				<Link to={"/"} className="mr-2">Login</Link>
				<Link to={"/"}>Sign in</Link>
			</div>
		</div>
	);
};
export default Navbar;
