import { useOutletContext } from "react-router-dom";
import { aboutHighlights, siteProfile, skills, testimonials } from "../data";
import Skills from "../sections/Skills";
import Testimonials from "../sections/Testimonials";

const About = () => {
	const { isDark } = useOutletContext();

	return (
		<>
			<div className="pt-32 pb-16 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
						About Me
					</h1>
					<p className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
						{siteProfile.intro}
					</p>
				</div>
			</div>

			<section className="px-4 pb-20">
				<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
					{aboutHighlights.map(({ title, description, icon: Icon }) => (
						<div
							key={title}
							className={`rounded-2xl border p-6 ${isDark ? "border-slate-700 bg-slate-900/40" : "border-slate-200 bg-white/80"}`}
						>
							<div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500">
								<Icon className="h-6 w-6" />
							</div>
							<h3 className={`mb-2 text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
							<p className={isDark ? "text-slate-300" : "text-slate-600"}>{description}</p>
						</div>
					))}
				</div>
			</section>

			<Skills isDark={isDark} skills={skills} />
			<Testimonials isDark={isDark} testimonials={testimonials} />
		</>
	);
};

export default About;
