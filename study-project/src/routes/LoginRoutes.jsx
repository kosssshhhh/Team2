import LoginLayout from '../layout/LoginLayout';
import StudentLogin from '../pages/login/student/page';
import AdminLogin from '../pages/login/admin/page';
import { routes } from '../constants/routes';

const loginRoutes = {
	path: '/',
	element: <LoginLayout />,
	children: [
		{
			path: routes.admin.login.path,
			element: <AdminLogin />,
		},
		{
			path: routes.login.path,
			element: <StudentLogin />,
		},
	],
};

export default loginRoutes;
