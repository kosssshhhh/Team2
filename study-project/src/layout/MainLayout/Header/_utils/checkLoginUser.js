import { headerContents, adminHeaderContents, loginHeaderContents } from '../_constants/headerContents';
import { useUserStore } from '../../../../stores/store';

export const checkLoginUserRole = () => {
	const { user } = useUserStore((state) => state);
	console.log(user);

	if (user.role === 'admin') {
		return adminHeaderContents;
	} else if (user.id !== '' && user.role !== '') {
		return loginHeaderContents;
	} else {
		return headerContents;
	}
};

export const isLogin = () => {
	const { user } = useUserStore((state) => state);
	if (user.id === '') {
		return false;
	} else {
		return true;
	}
};
