import logo from '../../../assets/images/logo.png';

export default function Header() {
	return (
		<header className="h-20 flex items-center justify-start w-full sticky top-0 px-4">
			<img src={logo} alt="hcclab 로고 이미지" className="w-34 h-14" />
		</header>
	);
}
