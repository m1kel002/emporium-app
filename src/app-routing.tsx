import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "./products/pages/ProductDetailsPage/ProductDetailsPage";
import ProductPage from "./products/pages/ProductPage/ProductPage";

export const router = createBrowserRouter([
    {
		path: '/products/:id', element: <ProductDetailsPage />
	},
	{
		path: '/', element: <ProductPage/>
	},
	{
		path: '*', element: <ProductPage/>
	}
])
