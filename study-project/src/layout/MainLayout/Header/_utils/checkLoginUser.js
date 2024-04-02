import { headerContents, adminHeaderContents, loginHeaderContents } from '../_constants/headerContents';
import { useUserStore } from '../../../../stores/store';

export const checkLoginUserRole = () => {
	const { user } = useUserStore((state) => state);
	console.log(user);

	if (user.role === 'admin') {
		// admin 로그인 상태
		return adminHeaderContents;
	} else if (user.id !== '' && user.role !== '') {
		// 로그인 상태
		return loginHeaderContents;
	} else {
		// 비로그인 상태
		return headerContents;
	}
};
