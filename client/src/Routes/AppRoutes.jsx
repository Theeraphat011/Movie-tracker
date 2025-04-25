import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Detailpage from "../pages/Detailpage/Detailpage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ index: true, element: <Homepage /> },
			{ path: "/about/:id", element: <Detailpage /> },
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};
export default AppRoutes;
