import AuthLayout from '../layout/AuthLayout';
import StudentLogin from '../pages/login/student';
import AdminLogin from '../pages/login/admin';

const loginRoutes = {
	path: 'login',
	element: <AuthLayout />,
	children: [
		{
			path: 'admin',
			element: <AdminLogin />,
		},
		{
			path: 'student',
			element: <StudentLogin />,
		},
	],
};

export default loginRoutes;
