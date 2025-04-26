import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import DotLoader from "react-spinners/DotLoader";

const MainLayout = React.lazy(() => import("../Layout/MainLayout"));
const Homepage = React.lazy(() => import("../pages/Homepage/Homepage"));
const Detailpage = React.lazy(() => import("../pages/Detailpage/Detailpage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense
				fallback={
					// <div className="grid place-content-center gap-5 h-screen text-gray-800">
					// 	<DotLoader color="#333" /> <span>Loading</span>
					// </div>
					<div></div>
				}>
				<MainLayout />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense
						fallback={
							<div></div>
						}>
						<Homepage />
					</Suspense>
				),
			},
			{
				path: "/about/:id",
				element: (
					<Suspense
						fallback={
							<div></div>
						}>
						<Detailpage />
					</Suspense>
				),
			},
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
