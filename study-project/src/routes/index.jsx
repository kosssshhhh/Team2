import { useRoutes } from 'react-router-dom';

import mainRoutes from './MainRoutes';
import loginRoutes from './LoginRoutes';

export default function Routes() {
	return useRoutes([mainRoutes, loginRoutes]);
}
