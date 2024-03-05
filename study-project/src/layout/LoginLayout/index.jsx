import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
	return (
		<div className="flex min-h-screen w-screen flex-col ">
			<div className="flex flex-col flex-grow mx-auto w-1/5">
				<Outlet />
			</div>
		</div>
	);
}
