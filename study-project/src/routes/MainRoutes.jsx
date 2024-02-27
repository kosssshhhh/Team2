import { Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import AboutPage from '../pages/about/page';
import BoardPage from '../pages/board/page';
import HomePage from '../pages/home/page';
import MembersPage from '../pages/members/page';
import SchedulePage from '../pages/schedule/page';
import { routes } from '../constants/routes';
import AuthPage from '../pages/auth/page';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Navigate replace to={routes.home.path} />,
		},
		{
			path: routes.about.path,
			element: <AboutPage />,
		},
		{
			path: routes.board.path,
			element: <BoardPage />,
		},
		{
			path: routes.home.path,
			element: <HomePage />,
		},
		{
			path: routes.members.path,
			element: <MembersPage />,
		},
		{
			path: routes.schedule.path,
			element: <SchedulePage />,
		},
		{
			path: routes.admin.auth.path,
			element: <AuthPage />,
		},
	],
};

export default mainRoutes;
