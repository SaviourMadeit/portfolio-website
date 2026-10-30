import { ArrowRight, Check } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { services } from "../data";
import HeroSlider from "../components/HeroSlider";
import saviourImage from "../assets/hero/Meet-Mr.-Saviour.webp";
import securityImage from "../assets/hero/security.webp";
import technicalSupportImage from "../assets/hero/tech-support-service.webp";

const serviceHeroSlides = [
	{ src: saviourImage, alt: "Bixyl Lab founder Saviour" },
	{ src: securityImage, alt: "Technician installing a CCTV security camera" },
	{
		src: technicalSupportImage,
		alt: "Technical support specialist working at an electronics bench",
	},
];

const ServicesPage = () => {
	const { isDark } = useOutletContext();
	const panel = isDark
		? "border-slate-700 bg-slate-900/70"
		: "border-slate-200 bg-white";
	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-300" : "text-slate-600";

	return (
		<div className="pb-20 pt-24">
			<section className="relative isolate flex min-h-[min(680px,90svh)] items-center overflow-hidden bg-slate-950 px-4 py-24 text-center text-white">
				<HeroSlider
					slides={serviceHeroSlides}
					label="Service hero images"
					controlsLabel="Choose service image"
				/>
				<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
					<h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						Practical support for the technology you rely on.
					</h1>
					<p className="mt-6 max-w-[720px] text-lg leading-relaxed text-slate-200 sm:text-xl">
						From IT and security to custom electronic boards, electrical works, and
						Repair & Maintance Service, find the right support for your home, business,
						or project.
					</p>
					<div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
						<a
							href="#service-categories"
							className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
						>
							Browse services
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</a>
						<Link
							to="/contact"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
						>
							Tell us what you need
						</Link>
					</div>
				</div>
			</section>

			<section id="service-categories" className="scroll-mt-24 px-4 py-10">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto mb-8 max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
							Start with what you need
						</p>
						<h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${ink}`}>
							Find the right service
						</h2>
						<p className={`mt-4 text-lg leading-relaxed ${muted}`}>
							Choose a service to jump straight to what we can help with. Not
							sure which one fits? Tell us about the problem and we’ll help you
							work out the next step.
						</p>
					</div>

					<nav aria-label="Jump to a service" className="mb-14">
						<ul className="flex flex-wrap justify-center gap-3">
							{services.map(({ id, title }) => (
								<li key={id}>
									<a
										href={`#${id}`}
										className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:text-cyan-300 ${
											isDark
												? "border-slate-700 bg-slate-900/70 text-slate-200"
												: "border-slate-200 bg-white text-slate-700"
										}`}
									>
										{title}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="space-y-10">
						{services.map(
							({ id, title, description, details, image, imageAlt }, index) => (
								<article
									id={id}
									key={id}
									className={`scroll-mt-28 overflow-hidden rounded-3xl border shadow-sm ${panel}`}
								>
									<div
										className={`grid lg:grid-cols-2 ${
											index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
										}`}
									>
										<div className="relative min-h-64 overflow-hidden bg-slate-200 sm:min-h-80 lg:min-h-[28rem]">
											<img
												src={image}
												alt={imageAlt}
												loading={index > 0 ? "lazy" : "eager"}
												className="absolute inset-0 h-full w-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
										</div>

										<div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
											<h3 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
												{title}
											</h3>
											<p className={`mt-3 text-base leading-relaxed sm:text-lg ${muted}`}>
												{description}
											</p>

											<div className="mt-6">
												<h4 className={`text-sm font-bold ${ink}`}>
													Typical support includes
												</h4>
												<ul className="mt-3 space-y-3">
													{details.map((detail) => (
														<li key={detail} className={`flex items-start gap-3 text-sm leading-relaxed sm:text-base ${muted}`}>
															<Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" aria-hidden="true" />
															<span>{detail}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="mt-8">
												<Link
													to={`/contact?service=${encodeURIComponent(title)}`}
													className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
												>
													Ask about this service
													<ArrowRight className="h-4 w-4" aria-hidden="true" />
												</Link>
											</div>
										</div>
									</div>
								</article>
							),
						)}
					</div>
				</div>
			</section>

			<section className="px-4 pt-12">
				<div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800 p-8 text-center text-white sm:p-12">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
						Need help choosing?
					</p>
					<h2 className="mt-3 text-3xl font-bold">
						Tell us what you’re trying to solve.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100">
						Share a few details about your project or issue and we can help
						identify a practical next step.
					</p>
					<Link
						to="/contact"
						className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
					>
						Contact Bixyl Lab
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
