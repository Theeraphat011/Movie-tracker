import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
	return (
		<div className="relative h-full bg-black">
				<Navbar />
			<div className="container mx-auto max-w-[1380px] w-full pt-25">
				<Outlet />
			</div>
		</div>
	);
};
export default MainLayout;
