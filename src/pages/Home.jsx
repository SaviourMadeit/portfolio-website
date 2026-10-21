import { createElement } from "react";
import {
	ArrowRight,
	Check,
	CircleHelp,
	Clock3,
	ShieldCheck,
	Wrench,
} from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { services, siteProfile } from "../data";

const Home = () => {
	const { isDark } = useOutletContext();
	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-300" : "text-slate-600";
	const panel = isDark
		? "border-slate-700 bg-slate-900/70"
		: "border-slate-200 bg-white";

	return (
		<div className="pb-20">
			<section className="relative isolate flex min-h-[min(760px,100svh)] items-center overflow-hidden bg-slate-950 px-4 pb-16 pt-32 text-center text-white sm:pb-20">
				<HeroSlider />
				<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
					<h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						Reliable technology. Practical solutions.
					</h1>
					<p className="mt-6 max-w-[720px] text-lg leading-relaxed text-slate-200 sm:text-xl">
						Bixyl Lab IT & Engineering Consult combines practical technical skills in embedded systems, 
						IT support, security infrastructure, electrical installation, and event technology. 
						Our work is built on a service mindset, strong troubleshooting ability, and a commitment to 
						delivering dependable solutions in real environments.
					</p>
					<div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
						<Link
							to="/services"
							className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
						>
							Explore our services
							<ArrowRight className="h-4 w-4" />
						</Link>
						<Link
							to="/contact"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
						>
							Request a service
						</Link>
					</div>
					<div className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-200 sm:flex-row">
						<span className="inline-flex items-center gap-2">
							<Check className="h-4 w-4 text-cyan-300" />
							Practical, client-focused solutions
						</span>
						<span className="inline-flex items-center gap-2">
							<Check className="h-4 w-4 text-cyan-300" />
							Support for homes, businesses, and stages
						</span>
					</div>
				</div>
			</section>

			<section className="px-4 py-20">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
							What we do
						</p>
						<h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${ink}`}>
							One trusted team for your technical needs
						</h2>
						<p className={`mt-4 text-lg leading-relaxed ${muted}`}>
							Choose the service you need to see how we can help. Each service
							page includes a fuller breakdown and a direct way to enquire.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{services.map(({ id, title, description, highlights, image, imageAlt, icon }) => (
							<article
								key={id}
								className={`group overflow-hidden rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${panel}`}
							>
								<Link to={`/services#${id}`} className="block">
									<div className="relative h-56 overflow-hidden bg-slate-200">
										<img
											src={image}
											alt={imageAlt}
											loading="lazy"
											className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
										<div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
											<span className="rounded-xl bg-cyan-500 p-2.5">
												{createElement(icon, { className: "h-5 w-5" })}
											</span>
											<h3 className="text-xl font-bold">{title}</h3>
										</div>
									</div>
									<div className="p-6">
										<p className={`leading-relaxed ${muted}`}>{description}</p>
										<div className="mt-5 flex flex-wrap gap-2">
											{highlights.slice(0, 3).map((highlight) => (
												<span
													key={highlight}
													className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300"
												>
													{highlight}
												</span>
											))}
										</div>
										<span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-cyan-300">
											Explore this service
											<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
										</span>
									</div>
								</Link>
							</article>
						))}
					</div>

					<div className="mt-10 text-center">
						<Link
							to="/services"
							className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
						>
							View all service details
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			<section className={`px-4 py-16 ${isDark ? "bg-slate-900/50" : "bg-slate-100"}`}>
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto mb-10 max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
							Why Bixyl Lab
						</p>
						<h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${ink}`}>
							Good service means more than installing equipment
						</h2>
					</div>
					<div className="grid gap-5 md:grid-cols-3">
						{[
							{
								title: "Understand your needs",
								text: "We listen first, learn how your space or event works, and recommend a practical solution for your goals.",
								icon: CircleHelp,
							},
							{
								title: "Reliable technical work",
								text: "We focus on careful setup, clear communication, and dependable operation not just a quick fix.",
								icon: ShieldCheck,
							},
							{
								title: "Support beyond setup",
								text: "From troubleshooting to maintenance, we help you keep your systems useful and ready for what comes next.",
								icon: Wrench,
							},
						].map(({ title, text, icon }) => (
							<div key={title} className={`rounded-3xl border p-6 ${panel}`}>
								<span className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-300">
									{createElement(icon, { className: "h-6 w-6" })}
								</span>
								<h3 className={`mt-4 text-xl font-semibold ${ink}`}>{title}</h3>
								<p className={`mt-2 leading-relaxed ${muted}`}>{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="px-4 py-20">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800 p-8 text-white shadow-2xl shadow-blue-950/20 md:flex-row md:items-center md:justify-between md:p-12">
					<div>
						{/* <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
							<Clock3 className="h-4 w-4" />
							Let’s get started
						</p> */}
						<h2 className="mt-3 max-w-2xl text-3xl font-bold">
							Tell us what you need. We’ll help you find the right solution.
						</h2>
						<p className="mt-3 text-blue-100">
							Contact Us for a service enquiry or project
							conversation.
						</p>
					</div>
					<div className="flex shrink-0 flex-wrap gap-3">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
						>
							Contact us
							<ArrowRight className="h-4 w-4" />
						</Link>
						<a
							href={siteProfile.phoneHref}
							className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
						>
							Call {siteProfile.phone}
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
