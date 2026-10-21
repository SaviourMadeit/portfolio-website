import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { services, siteProfile } from "../data";

const ServicesPage = () => {
	const { isDark } = useOutletContext();
	const panel = isDark
		? "border-slate-700 bg-slate-900/70"
		: "border-slate-200 bg-white";
	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-300" : "text-slate-600";

	return (
		<div className="pb-20 pt-24">
			<section className="px-4 py-10 sm:py-14">
				<div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-blue-950/20">
					<div className="grid lg:grid-cols-[1.05fr_0.95fr]">
						<div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
							<h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
								Smarter systems. Stronger spaces. Better experiences.
							</h1>
							<p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
								From business IT and security to electrical work and live-event
								technology, get practical technical support shaped around the
								way you work, live, and gather.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<a
									href="#service-categories"
									className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
								>
									Explore our services
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</a>
								<Link
									to="/contact"
									className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
								>
									Plan a project
								</Link>
							</div>
							<div className="mt-8 flex flex-wrap gap-2">
								{services.slice(0, 3).map(({ id, title }) => (
									<a
										key={id}
										href={`#${id}`}
										className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200"
									>
										{title}
									</a>
								))}
							</div>
						</div>

						<div className="relative min-h-[24rem] overflow-hidden sm:min-h-[30rem]">
							<img
								src="/images/profile/Workshop.jpg"
								alt="Bixyl Lab's hands-on electronics and engineering workspace"
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-slate-950/10" />
							<div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/65 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
									Practical expertise, built around you
								</p>
								<p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
									From the first assessment to dependable ongoing support.
								</p>
							</div>
						</div>
					</div>

					<div className="grid gap-3 border-t border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3 sm:p-5">
						<a
							href={siteProfile.phoneHref}
							className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-200"
						>
							<Phone className="h-5 w-5 shrink-0 text-cyan-300" />
							{siteProfile.phone}
						</a>
						<a
							href={`mailto:${siteProfile.email}`}
							className="flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-200"
						>
							<Mail className="h-5 w-5 shrink-0 text-cyan-300" />
							<span className="truncate">{siteProfile.email}</span>
						</a>
						<a
							href={siteProfile.locationLink}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-200"
						>
							<MapPin className="h-5 w-5 shrink-0 text-cyan-300" />
							{siteProfile.location}
						</a>
					</div>
				</div>
			</section>

			<section id="service-categories" className="scroll-mt-24 px-4 py-10">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
							Our services
						</p>
						<h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${ink}`}>
							Choose an area to explore
						</h2>
						<p className={`mt-4 text-lg leading-relaxed ${muted}`}>
							Each category explains the support available and common ways we
							can help. Contact us to discuss your requirements and scope.
						</p>
					</div>

					<div className="space-y-10">
						{services.map(
							({ id, title, description, highlights, details, image, imageAlt }, index) => (
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
										<div className="relative min-h-72 overflow-hidden bg-slate-200 lg:min-h-[28rem]">
											<img
												src={image}
												alt={imageAlt}
												loading={index > 1 ? "lazy" : "eager"}
												className="absolute inset-0 h-full w-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
										</div>

										<div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
											{/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
												Bixyl Lab IT & Engineering Consult
											</p> */}
											<h3 className={`mt-3 text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
												{title}
											</h3>
											<p className={`mt-4 text-base leading-relaxed sm:text-lg ${muted}`}>
												{description}
											</p>

											<div className="mt-6">
												<h4 className={`text-sm font-bold uppercase tracking-[0.12em] ${ink}`}>
													How we can help
												</h4>
												<ul className="mt-3 space-y-3">
													{details.map((detail) => (
														<li key={detail} className={`flex items-start gap-3 ${muted}`}>
															<Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
															<span>{detail}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="mt-6 flex flex-wrap gap-2">
												{highlights.map((highlight) => (
													<span
														key={highlight}
														className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-300"
													>
														{highlight}
													</span>
												))}
											</div>

											<div className="mt-8">
												<Link
													to="/contact"
													className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-3 font-semibold text-white transition hover:opacity-90"
												>
													Enquire about this service
													<ArrowRight className="h-4 w-4" />
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
						Not sure where to start?
					</p>
					<h2 className="mt-3 text-3xl font-bold">
						Describe the challenge. We’ll help you find the right service.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100">
						Share what you need, where the work is needed, and any timing
						requirements. We’ll get back to discuss the next steps.
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
