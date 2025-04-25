import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="h-screen">
				<Navbar/>
			<div className="container mx-auto max-w-[1380px]">
				<Outlet />
			</div>
		</div>
	);
};
export default MainLayout;
