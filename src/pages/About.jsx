import { useOutletContext } from "react-router-dom";
import Skills from "../sections/Skills";
import Testimonials from "../sections/Testimonials";
import { skills, testimonials } from "../data";

const About = () => {
	const { isDark } = useOutletContext();

	return (
		<>
			<div className="pt-32 pb-16 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
						About Me
					</h1>
					<p
						className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
					>
						I'm Saviour Dagadu, an embedded hardware designer,
						firmware developer, and robotics instructor based in
						Accra, Ghana. I work at The Makersplace and with
						Accra Technical University, building embedded systems
						and IoT products, and mentoring the next generation
						of engineers. This page is a placeholder for a fuller
						bio — happy to help you write one when you're ready.
					</p>
				</div>
			</div>

			<Skills isDark={isDark} skills={skills} />

			<Testimonials isDark={isDark} testimonials={testimonials} />
		</>
	);
};

export default About;
