import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
		if (
			formData.name &&
			formData.email &&
			formData.subject &&
			formData.message
		) {
			const mailtoLink = `mailto:Senamdagadusaviour@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
			window.location.href = mailtoLink;

			setFormSubmitted(true);
			setFormData({ name: "", email: "", subject: "", message: "" });
			setTimeout(() => setFormSubmitted(false), 3000);
		}
	};

	return (
		<section className="relative pt-32 pb-32 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Contact Form Section */}
				<div
					className={`relative backdrop-blur-xl rounded-3xl border p-12 overflow-hidden animate-in slide-in-from-bottom duration-700 mb-16 ${
						isDark
							? "bg-linear-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border-green-400/20"
							: "bg-linear-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 border-green-400/30"
					}`}
				>
					<div className="relative text-center space-y-8 mb-12">
						<div className="inline-block">
							<Mail className="w-16 h-16 mx-auto text-green-400 animate-bounce-slow" />
						</div>

						<div>
							<h1 className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
								Get In Touch
							</h1>
							<p
								className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}
							>
								Have questions or want to collaborate? Fill out
								the form below and I'll get back to you soon.
							</p>
						</div>
					</div>

					{/* Form */}
					<form
						onSubmit={handleFormSubmit}
						className="space-y-6 max-w-2xl mx-auto"
					>
						<div className="grid md:grid-cols-2 gap-6">
							{/* Name */}
							<div>
								<label
									className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleFormChange}
									placeholder="Your name"
									className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
										isDark
											? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-500"
											: "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
									}`}
									required
								/>
							</div>

							{/* Email */}
							<div>
								<label
									className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleFormChange}
									placeholder="your@email.com"
									className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
										isDark
											? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-500"
											: "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
									}`}
									required
								/>
							</div>
						</div>

						{/* Subject */}
						<div>
							<label
								className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
							>
								Subject
							</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleFormChange}
								placeholder="What is this about?"
								className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
									isDark
										? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-500"
										: "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
								}`}
								required
							/>
						</div>

						{/* Message */}
						<div>
							<label
								className={`block text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
							>
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleFormChange}
								placeholder="Your message..."
								rows="5"
								className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 resize-none ${
									isDark
										? "bg-slate-700/50 border-slate-600 text-white placeholder-gray-500"
										: "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500"
								}`}
								required
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-4 px-6 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg font-bold text-white text-lg shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 transition-all hover:scale-105 flex items-center justify-center space-x-2"
						>
							<Mail className="w-5 h-5" />
							<span>Send Message</span>
						</button>

						{/* Success Message */}
						{formSubmitted && (
							<div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center font-semibold animate-in fade-in">
								✓ Thank you! I'll get back to you soon.
							</div>
						)}
					</form>
				</div>

				{/* CTA + Social Links */}
				<div
					className={`relative backdrop-blur-xl rounded-3xl border p-12 overflow-hidden animate-in slide-in-from-bottom duration-700 ${
						isDark
							? "bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-400/20"
							: "bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-400/30"
					}`}
				>
					<div
						className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iJHtpc0RhcmsgPyAncmdiYSgyNTUsMjU1LDI1NSwwLjAzKScgOiAncmdiYSgwLDAsMCwwLjAzKSd9IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30`}
					/>

					<div className="relative text-center space-y-8">
						<div className="inline-block">
							<Mail className="w-20 h-20 mx-auto text-blue-400 mb-6 animate-bounce-slow" />
						</div>

						<h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Let's Build Something Amazing
						</h2>

						<p
							className={`text-xl max-w-2xl mx-auto leading-relaxed ${
								isDark ? "text-gray-300" : "text-gray-700"
							}`}
						>
							Have a project in mind? Looking for collaboration
							opportunities? I'm always excited to work on
							innovative embedded systems projects.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
							<a
								href="mailto:Senamdagadusaviour@gmail.com"
								className="group px-10 py-5 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 flex items-center justify-center space-x-3 text-white"
							>
								<Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
								<span>Send Email</span>
							</a>

							<a
								href="https://www.linkedin.com/in/saviour-dagadu"
								target="_blank"
								rel="noopener noreferrer"
								className={`px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-3 ${
									isDark
										? "bg-slate-700/50 backdrop-blur-sm border-2 border-slate-600 hover:bg-slate-600/50 hover:border-blue-400/50"
										: "bg-white/50 backdrop-blur-sm border-2 border-gray-300 hover:bg-gray-100/50 hover:border-blue-500/50"
								}`}
							>
								<Linkedin className="w-6 h-6" />
								<span>Connect on LinkedIn</span>
							</a>
						</div>

						<div className="pt-8 border-t border-slate-700/50">
							<div className="flex justify-center space-x-6">
								{[
									{
										icon: Github,
										url: "https://github.com/SaviourMadeit",
										label: "GitHub",
									},
									{
										icon: Twitter,
										url: "https://twitter.com/pshyco_Blaq",
										label: "Twitter",
									},
									{
										icon: Mail,
										url: "mailto:Senamdagadusaviour@gmail.com",
										label: "Email",
									},
								].map((social, idx) => (
									<a
										key={idx}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex flex-col items-center space-y-2"
										title={social.label}
									>
										<div
											className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
												isDark
													? "bg-slate-800/50 border border-slate-700 text-gray-400 group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:bg-slate-700/50"
													: "bg-white/50 border border-gray-300 text-gray-600 group-hover:text-blue-500 group-hover:border-blue-500/50 group-hover:bg-gray-100/50"
											}`}
										>
											<social.icon className="w-6 h-6" />
										</div>
										<span
											className={`text-xs transition-colors ${
												isDark
													? "text-gray-500 group-hover:text-blue-400"
													: "text-gray-600 group-hover:text-blue-500"
											}`}
										>
											{social.label}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
