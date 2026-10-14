import { useOutletContext } from "react-router-dom";
import { skills, testimonials } from "../data";
import Skills from "../sections/Skills";
import Testimonials from "../sections/Testimonials";

const About = () => {
	const { isDark } = useOutletContext();

	return (
		<>
			<div className="pt-32 pb-16 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent mb-6">
						About Bixyl Lab IT & Engineering Consult
					</h1>
					<p className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
						Bixyl Lab IT & Engineering Consult is a technology and service-driven business focused on practical solutions, reliable support, and smart systems for modern living, business growth, and event performance.
					</p>
				</div>
			</div>

			<section className="px-4 pb-6">
				<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
					{[
						{ title: "Vision", text: "To become a trusted technology partner known for dependable systems, practical service, and user-centered solutions across multiple sectors.", icon: "🎯" },
						{ title: "Mission", text: "To provide smart, safe, and professional IT, security, electrical, and event technology services that improve the reliability and productivity of every client we serve.", icon: "🚀" },
						{ title: "Purpose", text: "To solve real-world technical challenges using a blend of engineering knowledge, service excellence, and clear communication that builds confidence and trust.", icon: "💡" },
					].map(({ title, text, icon }) => (
						<div
							key={title}
							className={`rounded-2xl border p-6 ${isDark ? "border-slate-700 bg-slate-900/40" : "border-slate-200 bg-white/80"}`}
						>
							<div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500 text-2xl">
								{icon}
							</div>
							<h3 className={`mb-2 text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
							<p className={isDark ? "text-slate-300" : "text-slate-600"}>{text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="px-4 pb-20">
				<div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
					<div className={`rounded-3xl border p-8 ${isDark ? "border-slate-700 bg-slate-900/40" : "border-slate-200 bg-white/80"}`}>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Who we are</p>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>A technical business built for service, safety, and results</h2>
						<p className={`mt-4 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							Bixyl Lab IT & Engineering Consult combines practical technical skills in embedded systems, IT support, security infrastructure, electrical installation, and event technology. Our work is built on a service mindset, strong troubleshooting ability, and a commitment to delivering dependable solutions in real environments.
						</p>
					</div>
					<div className={`rounded-3xl border p-8 ${isDark ? "border-slate-700 bg-slate-900/40" : "border-slate-200 bg-white/80"}`}>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Our focus</p>
						<ul className="mt-5 space-y-4">
							{[
								"IT support and infrastructure for homes and businesses",
								"Security systems including CCTV and access control",
								"Electrical and power solutions for safe and reliable operations",
								"Stage lighting, fog, haze, laser, and live event systems",
								"Repair, maintenance, and technical troubleshooting support",
							].map((item) => (
								<li key={item} className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">✓</span>
									<span className={isDark ? "text-slate-200" : "text-slate-700"}>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<Skills isDark={isDark} skills={skills} />
			<Testimonials isDark={isDark} testimonials={testimonials} />
		</>
	);
};

export default About;
