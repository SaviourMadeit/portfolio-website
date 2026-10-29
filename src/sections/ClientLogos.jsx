const clients = [
	{
		name: "Virtual Hub",
		logo: "/images/clients/virtual-hub-gh.png",
	},
	{
		name: "Pan & Tilt Ghana",
		logo: "/images/clients/Pan-&-Tilt-Ghana.png",
	},
];

const ClientLogos = ({ isDark }) => {
	return (
		<section
			aria-labelledby="client-logos-heading"
			className={`overflow-hidden px-4 py-16 ${
				isDark ? "bg-slate-950/60" : "bg-slate-50"
			}`}
		>
			<div className="mx-auto max-w-7xl">
				<h2
					id="client-logos-heading"
					className={`mb-8 text-center text-2xl font-bold sm:text-3xl ${
						isDark ? "text-white" : "text-slate-900"
					}`}
				>
					Our Trusted Partners 
				</h2>
				<ul
					aria-label="Our clients"
					className="flex flex-wrap justify-center gap-x-16 gap-y-10"
				>
					{clients.map(({ name, logo }) => (
						<li
							key={name}
							className="flex w-60 flex-col items-center gap-4"
						>
							<img
								src={logo}
								alt={`${name} logo`}
								className="h-30 w-30 object-contain sm:h-48 sm:w-48"
							/>
							<span
								className={`text-center text-lg font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								{name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ClientLogos;
