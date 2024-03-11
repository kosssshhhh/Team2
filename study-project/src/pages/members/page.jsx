const members = [
	{ name: '강준우', department: '컴퓨터정보공학부', role: '#FullStack', image: '/강준우.png' },
	{ name: '고석환', department: '정보융합학부', role: '#Frontend', image: '/강준우.png' },
	{ name: '고석환', department: '정보융합학부', role: '#Frontend', image: '/강준우.png' },
	{ name: '고석환', department: '정보융합학부', role: '#Frontend', image: '/강준우.png' },
	{ name: '고석환', department: '정보융합학부', role: '#Frontend', image: '/강준우.png' },
	{ name: '고석환', department: '정보융합학부', role: '#Frontend', image: '/강준우.png' },
];

export default function MembersPage() {
	return (
		<main>
			{/* <h3>멤버 페이지</h3> */}
			<div className="flex flex-col w-screen items-center bg-backgroundGrey p-20">
				<div className="flex flex-col items-center mx-auto mb-10">
					<h2 className="normal font-bold text-4xl text-textBlack">스터디 참여자</h2>
					<p className="mt-5 text-base text-textLightBlack">HCCLab Study에 참여하고 있는 분들을 소개합니다.</p>
				</div>
				<div className="flex flex-wrap item-center justify-center p-10">
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># UX Researcher</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># Product Designer</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># AI</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># Data Analyst</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># Front End</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># Back End</div>
					<div className="m-2.5 bg-darkGrey rounded-3xl py-1 px-3 text-sm"># Full-Stack</div>
				</div>
				<div className="flex flex-wrap justify-center px-20 ">
					{members.map((member, index) => (
						<div
							key={index}
							className="w-1/3 mx-8 md:w-1/3 sm:w-full my-10 flex flex-col justify-end z-0" // flex-wrap과 조합하여 한 줄에 세 항목만 표시
							style={{
								height: '300px',
								width: '300px',
								backgroundImage: `url(${member.image})`,
								backgroundSize: 'cover',
							}}>
							{/* <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-4">
								<p className="text-textBlack">{member.name}</p>
								<p className="text-textBlack">{member.department}</p>
								<p className="text-textBlack">{member.role}</p>
							</div> */}
							<div className="flex flex-col p-2 bg-white h-1/4 opacity-70 z-10 rounded-b-lg backdrop-blur-sm text-textBlack">
								<div className="flex font-bold">
									<p className="mr-2">{member.name}</p>
									<p>@{member.department}</p>
								</div>
								<div className="mt-2 text-sm">{member.role}</div>
							</div>
						</div>
					))}
				</div>
				{/* <div className="flex flex-wrap ">
					<div className="flex flex-col">
						<div className="mx-auto my-20 flex">
							<div
								className="w-1/3 flex flex-col justify-end"
								style={{
									backgroundImage: `url(${members[0].image})`,
									backgroundSize: 'cover',
									height: '300px',
									width: '300px',
								}}>
								<div className="flex bg-white h-1/5 opacity-70 rounded-b-lg">
									<p>강준우</p>
									<p>@컴퓨터정보공학부</p>
									<div>#FullStack</div>
								</div>
							</div>
							<div
								className="w-1/3 flex flex-col justify-end"
								style={{
									backgroundImage: `url(${members[0].image})`,
									backgroundSize: 'cover',
									height: '300px',
									width: '300px',
								}}>
								<div className="flex bg-white h-1/5 opacity-70 rounded-b-lg">
									<p>강준우</p>
									<p>@컴퓨터정보공학부</p>
									<div>#FullStack</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</main>
	);
}
