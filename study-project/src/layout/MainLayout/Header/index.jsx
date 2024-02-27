import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '../../../constants/routes';

// TODO: url 주소에 따라서 Header 컴포넌트의 스타일을 변경할 수 있도록 구현

export default function Header() {
	const location = useLocation();

	const [currentURL, setCurrentURL] = useState(location.pathname);

	useEffect(() => {
		console.log('currentURL: ', currentURL);
		setCurrentURL(location.pathname);
	}, [location]);

	return (
		<>
			<header className="h-20">
				<div className="flex justify-between items-center h-20">
					<Link to={routes.home.path} className="flex w-14 h-14 items-center">
						<img src="logo.png" alt="HCC Lab Logo" className="object-contain h-16 w-16 mx-4" />
						{/* <div className="mx-1">HOME</div> */}
					</Link>
					<div className="flex justify-end items-center">
						<ul className="mx-6">
							<Link
								to={routes.about.path}
								className={`px-6  hover:text-black transition duration-300 ${
									currentURL === routes.about.path ? 'text-black' : 'text-grey'
								}`}>
								{routes.about.title}
							</Link>

							<Link
								to={routes.members.path}
								className={`px-6  hover:text-black transition duration-300 ${
									currentURL === routes.members.path ? 'text-black' : 'text-grey'
								}`}>
								{routes.members.title}
							</Link>
							<Link
								to={routes.schedule.path}
								className={`px-6  hover:text-black transition duration-300 ${
									currentURL === routes.schedule.path ? 'text-black' : 'text-grey'
								}`}>
								{routes.schedule.title}
							</Link>
							<Link
								to={routes.board.path}
								className={`px-6  hover:text-black transition duration-300 ${
									currentURL === routes.board.path ? 'text-black' : 'text-grey'
								}`}>
								{routes.board.title}
							</Link>
							<Link
								to={routes.login.path}
								className={`px-6  hover:text-black transition duration-300 ${
									currentURL === routes.login.path ? 'text-black' : 'text-grey'
								}`}>
								{routes.login.title}
							</Link>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}
