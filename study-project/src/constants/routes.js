// NOTE: 라우터 경로를 정의하는 파일
export const routes = {
	home: {
		path: '/home',
		title: 'Home',
	},
	board: {
		path: '/board',
		title: 'Board',
	},
	members: {
		path: '/members',
		title: 'Members',
	},
	schedule: {
		path: '/schedule',
		title: 'Schedule',
	},
	about: {
		path: '/about',
		title: 'About',
	},
	login: {
		path: '/login',
		title: 'Login',
	},
	admin: {
		// TODO: 다른 관리자 페이지가 있다면 추가
		auth: {
			path: '/admin/auth',
			title: 'Auth',
		},
		login: {
			path: '/admin/login',
			title: 'AdminLogin',
		},
	},
};
