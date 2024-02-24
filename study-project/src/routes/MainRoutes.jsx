import React from 'react';

// import Layout from ""
import AboutPage from '../pages/about/page';
import BoardPage from '../pages/board/page';
import HomePage from '../pages/home/page';
import MembersPage from '../pages/members/page';
import SchedulePage from '../pages/schedule/page';

const mainRoutes = {
	path: '/',
	// element: <Layout/>,
	children: [
		{
			path: 'about',
			element: <AboutPage />,
		},
		{
			path: 'board',
			element: <BoardPage />,
		},
		{
			path: 'home',
			element: <HomePage />,
		},
		{
			path: 'members',
			element: <MembersPage />,
		},
		{
			path: 'schedule',
			element: <SchedulePage />,
		},
	],
};

export default mainRoutes;
