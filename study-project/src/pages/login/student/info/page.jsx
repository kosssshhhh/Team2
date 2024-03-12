import Input from './Input';

export default function UserInfoPage() {
	return (
		<div className="flex flex-col flex-grow w-11/12 h-full justify-start items-start gap-4 mx-auto">
			<h2 className="text-2xl font-semibold mt-2 text-textBlack">입력하신 정보는 Members에 노출돼요</h2>
			<label className="flex flex-col w-full gap-2">
				<span className="text-sm font-semibold text-textBlack">프로필 사진 *</span>
				<img className="w-full border-textBlack border h-56 rounded-lg" />
				<input className="hidden" type="file" accept="image/*" />
			</label>
			<div className="w-full flex flex-col gap-5 my-4">
				<Input title="성함" />
				<Input title="태그" />
				<Input title="학과명" />
				<Input title="이메일" />
			</div>
			<button className="bg-kwRed w-full px-2 py-3 rounded-lg text-white mt-4 text-center">스터디 참여하기</button>
		</div>
	);
}
