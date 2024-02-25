import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
	return (
		<>
			<div>로그인 레이아웃</div>
			<Outlet />
		</>
	);
}
