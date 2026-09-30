import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { engineeringServices, securityElectricalServices, siteProfile } from "../data";

const galleryImages = [
	"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
];

const ServicesPage = () => {
	const { isDark } = useOutletContext();
	const panel = isDark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white/80";

	return (
		<div className="pt-24 pb-20">
			<section className="px-4 py-16">
				<div className="mx-auto max-w-6xl rounded-3xl border overflow-hidden p-8 md:p-12 shadow-2xl shadow-blue-500/5">
					<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
						<div>
							<div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
								Bixyl Lab IT Consult
							</div>
							<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-linear-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text">
								Technology, security, and event support under one trusted brand.
							</h1>
							<p className={`mt-5 text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								Bixyl Lab IT Consult brings together IT support, CCTV and security systems, electrical services, stage lighting, event technology, and maintenance solutions for homes, businesses, churches, venues, and production teams.
							</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
									Book a service call
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a href={siteProfile.phoneHref} className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold ${isDark ? "border-slate-600 text-slate-100 hover:border-blue-400" : "border-slate-200 text-slate-800 hover:border-blue-500"}`}>
									<Phone className="h-4 w-4" />
									{siteProfile.phone}
								</a>
							</div>
						</div>

						<div className={`rounded-3xl border p-6 ${panel}`}>
							<h2 className={`mb-4 text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Quick booking</h2>
							<div className="space-y-3">
								<a href={`mailto:${siteProfile.email}`} className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<Mail className="h-5 w-5 text-blue-500" />
									{siteProfile.email}
								</a>
								<a href={siteProfile.locationLink} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<MapPin className="h-5 w-5 text-blue-500" />
									{siteProfile.location}
								</a>
								<div className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<CalendarDays className="h-5 w-5 text-blue-500" />
									Fast response for event and venue support
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-8">
				<div className="mx-auto max-w-6xl">
					<div className="mb-10 text-center">
						<h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>Our core service categories</h2>
						<p className={`mx-auto mt-4 max-w-3xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							From IT and security systems to stage technology and electrical support, we work across the areas that keep homes, businesses, and events operating smoothly and professionally.
						</p>
					</div>

					<div className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
						{galleryImages.map((image, index) => (
							<div key={index} className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/30">
								<img src={image} alt="Event lighting and stage equipment" className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
							</div>
						))}
					</div>

					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{engineeringServices.map(({ title, description, highlights, icon: Icon, color }) => (
							<div key={title} className={`rounded-3xl border p-6 ${panel}`}>
								<div className={`mb-5 inline-flex rounded-2xl bg-linear-to-r ${color} p-3 text-white`}>
									<Icon className="h-6 w-6" />
								</div>
								<h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
								<p className={`mt-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
								<div className="mt-5 flex flex-wrap gap-2">
									{highlights.map((tag) => (
										<span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">{tag}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={`px-4 py-16 ${isDark ? "bg-slate-900/40" : "bg-slate-50"}`}>
				<div className="mx-auto max-w-6xl">
					<div className="mb-10 text-center">
						<h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>Why clients choose Bixyl Lab IT Consult</h2>
						<p className={`mx-auto mt-4 max-w-2xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							We combine technical expertise, practical field support, and a solution-driven mindset to keep systems reliable, secure, and ready for real-world use.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{securityElectricalServices.map(({ title, description, icon: Icon, color }) => (
							<div key={title} className={`rounded-3xl border p-6 ${panel}`}>
								<div className={`mb-5 inline-flex rounded-2xl bg-linear-to-r ${color} p-3 text-white`}>
									<Icon className="h-6 w-6" />
								</div>
								<h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
								<p className={`mt-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="px-4 py-16">
				<div className="mx-auto max-w-5xl">
					<div className="mb-10 text-center">
						<h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>Client feedback</h2>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{
								quote: "Reliable, professional, and very quick on troubleshooting. They kept our event lighting system operating without stress.",
								person: "Event Director",
							},
							{
								quote: "Their support helped us solve lighting issues on the spot. The team understood the urgency and delivered with confidence.",
								person: "Venue Manager",
							},
							{
								quote: "From system setup to repair support, they bring both technical skill and professionalism. Highly recommended for live events.",
								person: "Production Lead",
							},
						].map(({ quote, person }) => (
							<div key={person} className={`rounded-3xl border p-6 ${panel}`}>
								<p className={`text-lg leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									“{quote}”
								</p>
								<div className="mt-4 border-t border-slate-200 dark:border-slate-700 pt-3">
									<span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{person}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
