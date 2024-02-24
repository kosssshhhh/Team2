import { Outlet } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<Outlet />
			<footer>Footer</footer>
		</>
	);
}
