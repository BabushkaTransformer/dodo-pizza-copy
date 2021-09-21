import Main from "./pages/Main/Main";
import Bonus from './pages/Bonus/Bonus';
import Cart from './pages/Cart/Cart';

export const MAIN_ROUTE = "/";
export const BONUS_ROUTE = '/bonus';
export const CART_ROUTE = '/cart';


export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: BONUS_ROUTE,
		Component: Bonus,
	},
	{
		path: CART_ROUTE,
		Component: Cart,
	},
];
