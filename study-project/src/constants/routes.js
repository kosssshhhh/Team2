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
	secret: {
		// TODO: 권한 부여하는 페이지 외에 다른 페이지도 있다면 추가
		professor: {
			path: '/secret/professor',
			title: 'Professor',
		},
	},
};
