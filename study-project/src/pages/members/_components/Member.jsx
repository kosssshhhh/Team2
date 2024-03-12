export default function Member({ member, index }) {
	return (
		<div
			key={index}
			className="w-1/3 mx-8 md:w-1/3 sm:w-full my-10 flex flex-col justify-end z-0" // flex-wrap과 조합하여 한 줄에 세 항목만 표시
			style={{
				height: '300px',
				width: '300px',
				backgroundImage: `url(${member.image})`,
				backgroundSize: 'cover',
			}}>
			<div className="flex flex-col p-3 pl-5 bg-white h-1/4 opacity-70 z-10 rounded-b-lg backdrop-blur-sm text-textBlack">
				<div className="flex font-bold">
					<p className="mr-2">{member.name}</p>
					<p>@{member.department}</p>
				</div>

				<div className="flex">
					{member.roles.map((role, index) => {
						return (
							<p key={index} className="mt-2 mr-2 text-sm">
								{role}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}
