
export default function HomePage() {
	return (
		<>
		<div className="bg-white pt-20 pb-40 mx-auto w-4/5 ">
			<div className="flex  justify-center items-center"> 

				<div className=" flex-1  max-w-fit pr-32 ">
					<h1 className="text-4xl font-bold mb-4">KW-HCC Lab FE Study</h1>
					<p className="mb-1">- HCC Lab 학부 연구생을 중심으로 만들어진 FE 스터디에요.</p>
					<p className="mb-1">- 좋은 개발에 대해 고민하고 더 나은 경험을 제공하기 위한 방법들을 함께 나누어봐요.</p>
					<p className="mb-1">- 여러분이 광운대학교 학생이라면 누구든지 상관 없어요.</p>
					<p className="mb-12">- 프론트엔드 개발을 위한 마음과 열정 그리고 함께 나누고자 하는 마음만 있으면 돼요.</p>
					<button style={{ width: '150px', height: '50px' }}
					className="bg-kwRed text-white font-bold py-2 px-4 focus:outline-none hover:bg-gray-200 transition-colors rounded-md">
					<p className="text-white font-bold">스터디 참여하기</p>
					</button>
				</div>
				<div className="flex justify-end pt-8">
					<img src="/src/assets/images/uni.png"
					style={{ width: '250px', height:  'center' }} />
				</div>
			</div>
	  	</div>


		<div className="bg-kwRed h-50 pt-20 pb-40 flex flex-col items-center justify-center">
			<h2 className="text-white text-3xl font-bold mb-3">About KW-HCC Lab</h2>
			<p className="text-white mb-16">연구실의 다른 활동들이 궁금하세요?</p>
		
			<div className="flex justify-center space-x-8">
				<button style={{ width: '280px', height: '190px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<div className="flex justify-center  mb-4">
					<img src="/src/assets/images/insta_logo.png" alt="인스타 로고" style={{ width: '40px', height: 'auto' }} />
				</div>
				<p className="text-white text-xl font-bold">인간중심컴퓨팅 연구실</p>
				</button>

				<button style={{ width: '280px', height: '190px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<p className="text-white mb-3">연구실 홈페이지</p>
				<p className="text-white text-2xl font">KW-HCC Lab</p>
				</button>

				<button style={{ width: '280px', height: '190px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<p className="text-white mb-3">전공 동아리</p>
				<p className="text-white text-2xl font-bold">CHIC</p>
				</button>
			</div>

		</div>

		<div className="bg-[#F8F9FB]  h-50 py-40 flex flex-col items-center justify-center">
			<h2 className="text-3xl font-bold mb-4">우리 스터디는 여기에서 진행해요</h2>
			<p className="mb-8">누구나 편하게 자신의 FE 개발 경험담, 고민 등의 이야기를 편하게 나눠보아요</p>
			<button style={{ width: '300px', height: '200px' }}
			className="bg-white font-extrabold text-xl py-2 px-4 rounded shadow">
				새빛관 ✨
			</button>
		</div>
		</>
	);
  };