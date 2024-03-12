import LoginLayout from '../layout/LoginLayout';
import StudentLogin from '../pages/login/student/login/page';
import AdminLogin from '../pages/login/admin/page';
import { routes } from '../constants/routes';
import TermsPage from '../pages/login/student/terms/page';
import UserInfoPage from '../pages/login/student/info/page';

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
		{
			path: routes.terms.path,
			element: <TermsPage />,
		},
		{
			path: routes.userInfo.path,
			element: <UserInfoPage />,
		},
	],
};

export default loginRoutes;
