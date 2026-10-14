import { createElement } from "react";
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
			<section className="px-4 py-12 sm:py-16">
				<div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl shadow-blue-950/15">
					<div className="grid lg:grid-cols-[1.15fr_0.85fr]">
						<div className="p-8 sm:p-12 lg:p-14">
							<p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
								{siteProfile.name} · Services
							</p>
							<h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
								The right technical support, from setup to ongoing care.
							</h1>
							<p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
								Explore our service areas to see how Bixyl Lab can support your
								home, business, venue, or event. Tell us what you need and we’ll
								discuss a practical way forward.
							</p>
							<Link
								to="/contact"
								className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
							>
								Talk to our team
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>

						<div className="grid min-h-64 grid-cols-2">
							<img
								src={services[3].image}
								alt={services[3].imageAlt}
								className="h-full min-h-64 w-full object-cover"
							/>
							<div className="flex flex-col justify-center gap-5 bg-gradient-to-br from-blue-900 to-cyan-800 p-6 sm:p-8">
								<a
									href={siteProfile.phoneHref}
									className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-cyan-200"
								>
									<Phone className="h-5 w-5 shrink-0 text-cyan-300" />
									{siteProfile.phone}
								</a>
								<a
									href={`mailto:${siteProfile.email}`}
									className="flex items-center gap-3 break-all text-sm font-medium text-white transition hover:text-cyan-200"
								>
									<Mail className="h-5 w-5 shrink-0 text-cyan-300" />
									{siteProfile.email}
								</a>
								<a
									href={siteProfile.locationLink}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-cyan-200"
								>
									<MapPin className="h-5 w-5 shrink-0 text-cyan-300" />
									{siteProfile.location}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-10">
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
							({ id, title, description, highlights, details, image, imageAlt, icon, color }, index) => (
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
											<div className="absolute bottom-6 left-6 flex items-center gap-3 text-white sm:bottom-8 sm:left-8">
												<span className={`rounded-2xl bg-gradient-to-r ${color} p-3 shadow-lg`}>
													{createElement(icon, { className: "h-6 w-6" })}
												</span>
												<span className="text-sm font-semibold uppercase tracking-[0.18em]">
													Service {String(index + 1).padStart(2, "0")}
												</span>
											</div>
										</div>

										<div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
											<p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
												Bixyl Lab IT Consult
											</p>
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
