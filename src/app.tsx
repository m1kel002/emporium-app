import { RouterProvider } from 'react-router-dom';
import './app.scss'
import HeaderNav from './shared/components/HeaderNav/HeaderNav';
import {router} from './app-routing';

export function App() {
  return (
		<div>
			<HeaderNav></HeaderNav>
			<RouterProvider router={router} />
		</div>
	);
}
