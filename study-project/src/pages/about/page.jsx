import AImage from '../../assets/images/A.png';
import BImage from '../../assets/images/B.png';
import CImage from '../../assets/images/C.png';

const ProfileCard = ({ image, name, intro }) => {
	return (
		<div className="flex flex-col items-center mx-14 relative">
			<img src={image} alt={name} className="w-56 h-56 object-cover" />
			<div className="absolute bottom-0 w-60 h-10 opacity-70 z-10 rounded-b-lg backdrop-blur-xl bg-white/30 text-textBlack">
				<div className="flex flex-col p-3 pl-5">
					<p className="font-bold">{name}</p>
					<p>{intro}</p>
				</div>
			</div>
		</div>
	);
};

export default function AboutPage() {
	return (
		<div className="flex flex-col items-center justify-center ">
			<div className="bg-backgroundGrey w-full">
				<div className=" flex flex-col flex-grow mx-auto w-1/2">
					<p className="pt-40 text-2xl font-semibold text-center">우리는</p>
					<p className="pt-3 text-sm text-center">
						KW-HCC Lab 소속 프론트엔드 개발에 관심있는 사람들이 모여 만든 그룹이에요.
					</p>

					<p className="pt-16 text-2xl font-semibold text-center">여기에서는</p>
					<p className="pt-3 text-sm text-center">
						누구나 편하게 자신의 FE 개발 경험담, 고민 등의 이야기를 편하게 나눌 수 있어요.
					</p>
					<p className="text-sm text-center">
						모든 분야의 사용자에 대하여 연구하고 좋은 경험을 제공할 수 있는 방법을 이야기해보아요.
					</p>

					<p className="pt-16 text-2xl font-semibold text-center">환영합니다</p>
					<p className="pt-3 text-sm text-center">여러분이 휴학생이든 재학생이든 상관없어요.</p>
					<p className="text-sm text-center">사용자를 위한 마음과 열정 그리고 함께 연구하고 싶은 마음만 있으면 돼요.</p>

					<p className="pt-16 text-2xl font-semibold text-center">함께해요</p>
					<p className="pt-3 text-sm text-center">혼자가 아닌 같이 발전 할 수 있는 스터디를 만들어가요.</p>
					<p className="text-sm text-center pb-32">모두 멋진 FE 개발자가 되어 다시 볼 수 있을 날을 기다려요.</p>
				</div>
			</div>

			<div className="bg-white pb-40">
				<p className="pt-20 text-2xl font-semibold text-center">개발자</p>
				<p className="pt-3 text-sm text-center pb-20">HCClab Study사이트 개발자들을 소개합니다.</p>
				<div className="flex justify-around items-end mx-auto">
					<ProfileCard image={AImage} name="강준우 @소속" intro="내용 삽입" />
					<ProfileCard image={BImage} name="양희동 @소속" intro="내용 삽입" />
					<ProfileCard image={CImage} name="홍길동 @소속" intro="내용 삽입" />
				</div>
			</div>
		</div>
	);
}
