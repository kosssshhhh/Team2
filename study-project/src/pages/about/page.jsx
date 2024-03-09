export default function AboutPage() {
	return (
		<main>
			<div className="flex min-h-screen w-screen flex-col ">
				<div className="flex flex-col flex-grow mx-auto w-1/5">
					<Outlet />
				</div>
			</div>
		</main>
	);
}
