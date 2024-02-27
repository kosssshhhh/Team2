// NOTE: 라우터 경로를 정의하는 파일
export const routes = {
	home: {
		path: '/home',
		title: 'Home',
	},
	board: {
		path: '/board',
		title: 'BOARD',
	},
	members: {
		path: '/members',
		title: 'MEMBERS',
	},
	schedule: {
		path: '/schedule',
		title: 'SCHEDULE',
	},
	about: {
		path: '/about',
		title: 'ABOUT US',
	},
	login: {
		path: '/login',
		title: 'SIGN UP',
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
