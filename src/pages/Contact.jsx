import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { contactDetails, siteProfile } from "../data";

const Contact = () => {
	const { isDark } = useOutletContext();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.subject || !formData.message) {
			return;
		}

		const mailtoLink = `mailto:${siteProfile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})

${formData.message}`)}`;
		window.location.href = mailtoLink;
		setFormSubmitted(true);
		setFormData({ name: "", email: "", subject: "", message: "" });
		window.setTimeout(() => setFormSubmitted(false), 3000);
	};

	const panelClasses = isDark
		? "border-slate-700 bg-slate-900/60"
		: "border-slate-200 bg-white/80";

	return (
		<section className="relative pt-32 pb-32 px-4">
			<div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.05fr_1.45fr]">
				<div className={`rounded-3xl border p-8 ${panelClasses}`}>
					<h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Let?s build something real.
					</h1>
					<p className={`mt-4 text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
						Whether you need a hardware prototype, a reliable firmware solution, or robotics training for your team, I?m ready to help.
					</p>

					<div className="mt-8 space-y-4">
						{contactDetails.map(({ label, value, href, icon: Icon }) => (
							<a
								key={label}
								href={href}
								className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors ${isDark ? "border-slate-700 text-slate-200 hover:border-blue-400" : "border-slate-200 text-slate-700 hover:border-blue-500"}`}
							>
								<Icon className="h-5 w-5 text-blue-500" />
								<span>{value}</span>
							</a>
						))}
					</div>
				</div>

				<div className={`rounded-3xl border p-8 ${panelClasses}`}>
					<div className="mb-8 flex items-center gap-3 text-blue-500">
						<Mail className="h-7 w-7" />
						<h2 className="text-2xl font-semibold">Send a project brief</h2>
					</div>

					<form onSubmit={handleFormSubmit} className="space-y-5">
						<div className="grid gap-5 md:grid-cols-2">
							<label className="block">
								<span className={`mb-2 block text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>Name</span>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleFormChange}
									placeholder="Your name"
									className={`w-full rounded-xl border px-4 py-3 ${isDark ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500" : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"}`}
									required
								/>
							</label>

							<label className="block">
								<span className={`mb-2 block text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>Email</span>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleFormChange}
									placeholder="you@example.com"
									className={`w-full rounded-xl border px-4 py-3 ${isDark ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500" : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"}`}
									required
								/>
							</label>
						</div>

						<label className="block">
							<span className={`mb-2 block text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>Subject</span>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleFormChange}
								placeholder="Project scope or service needed"
								className={`w-full rounded-xl border px-4 py-3 ${isDark ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500" : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"}`}
								required
							/>
						</label>

						<label className="block">
							<span className={`mb-2 block text-sm font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>Message</span>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleFormChange}
								rows="6"
								placeholder="Tell me about your goals, timeline, and constraints..."
								className={`w-full rounded-xl border px-4 py-3 ${isDark ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500" : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"}`}
								required
							/>
						</label>

						<div className="flex items-center justify-between gap-4 pt-2">
							<button
								type="submit"
								className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
							>
								Send message
								<ArrowRight className="h-4 w-4" />
							</button>
							{formSubmitted && (
								<span className="text-sm font-medium text-emerald-500">Message prepared in your email app.</span>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
