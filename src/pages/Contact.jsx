import { createElement, useState } from "react";
import {
	ArrowRight,
	Clock3,
	Mail,
	MapPin,
	MessageCircle,
} from "lucide-react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import { contactDetails, services, siteProfile } from "../data";

const WHATSAPP_NUMBER = "233248919044";
const fieldClasses =
	"mt-2 w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20";

const Contact = () => {
	const { isDark } = useOutletContext();
	const [searchParams] = useSearchParams();
	const [service, setService] = useState(() => {
		const requestedService = searchParams.get("service");
		return services.some(({ title }) => title === requestedService)
			? requestedService
			: "";
	});
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [handoffStarted, setHandoffStarted] = useState(false);

	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-300" : "text-slate-600";
	const panel = isDark
		? "border-slate-700 bg-slate-900/70"
		: "border-slate-200 bg-white";
	const fieldTheme = isDark
		? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
		: "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400";

	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setFormData((previous) => ({ ...previous, [name]: value }));
		setHandoffStarted(false);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const subject = service
			? `Service enquiry: ${service}`
			: "Service enquiry";
		const body = [
			`Name: ${formData.name}`,
			`Email: ${formData.email}`,
			formData.phone ? `Phone: ${formData.phone}` : null,
			service ? `Service needed: ${service}` : null,
			"",
			formData.message,
		]
			.filter((line) => line !== null)
			.join("\n");
		const mailtoLink = `mailto:${siteProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		setHandoffStarted(true);
		window.location.href = mailtoLink;
	};

	return (
		<div className="px-4 pb-20 pt-32">
			<section className="mx-auto max-w-7xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
						Contact Bixyl Lab
					</p>
					<h1 className={`mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl ${ink}`}>
						Let’s talk about what you need.
					</h1>
					<p className={`mt-5 text-lg leading-relaxed ${muted}`}>
						Need IT support, a security or electrical solution, event equipment
						support, or help with a technical project? Tell us a little about it
						and we’ll get the conversation started.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
					<aside className={`rounded-3xl border p-6 sm:p-8 ${panel}`}>
						<h2 className={`text-2xl font-bold ${ink}`}>Get in touch</h2>
						<p className={`mt-3 leading-relaxed ${muted}`}>
							Choose the contact option that works best for you. For a faster
							response, include your location and any timing requirements.
						</p>

						<div className="mt-7 space-y-3">
							{contactDetails.map(({ label, value, href, icon }) => (
								<a
									key={label}
									href={href}
									target={label === "Location" ? "_blank" : undefined}
									rel={label === "Location" ? "noreferrer" : undefined}
									className={`flex items-start gap-4 rounded-2xl border p-4 transition hover:border-cyan-500 ${
										isDark
											? "border-slate-700 bg-slate-950/60 text-slate-200"
											: "border-slate-200 bg-slate-50 text-slate-700"
									}`}
								>
									<span className="rounded-xl bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300">
										{createElement(icon, { className: "h-5 w-5" })}
									</span>
									<span className="min-w-0">
										<span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
											{label}
										</span>
										<span className="mt-1 block break-words font-medium">{value}</span>
									</span>
								</a>
							))}
						</div>

						<a
							href={`https://wa.me/${WHATSAPP_NUMBER}`}
							target="_blank"
							rel="noreferrer"
							className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
						>
							<MessageCircle className="h-5 w-5" />
							Chat with us on WhatsApp
						</a>

						<div className={`mt-7 flex items-start gap-3 border-t pt-5 ${isDark ? "border-slate-700" : "border-slate-200"}`}>
							<Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
							<p className={`text-sm leading-relaxed ${muted}`}>
								Share the details of your request and we’ll respond to discuss
								availability and next steps.
							</p>
						</div>

						<Link
							to="/services"
							className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300"
						>
							Not sure which service you need?
							<span className="underline underline-offset-4">Explore services</span>
						</Link>
					</aside>

					<div className={`rounded-3xl border p-6 sm:p-8 ${panel}`}>
						<div className="mb-7 flex items-start gap-4">
							<span className="rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-3 text-white">
								<Mail className="h-6 w-6" />
							</span>
							<div>
								<h2 className={`text-2xl font-bold ${ink}`}>Send an enquiry</h2>
								<p className={`mt-1 ${muted}`}>
									Fields marked with * are required.
								</p>
							</div>
						</div>

						<form onSubmit={handleFormSubmit} className="space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<label className={`block text-sm font-medium ${ink}`}>
									Your name *
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleFormChange}
										autoComplete="name"
										placeholder="Full name"
										className={`${fieldClasses} ${fieldTheme}`}
										required
									/>
								</label>

								<label className={`block text-sm font-medium ${ink}`}>
									Email address *
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleFormChange}
										autoComplete="email"
										placeholder="you@example.com"
										className={`${fieldClasses} ${fieldTheme}`}
										required
									/>
								</label>
							</div>

							<div className="grid gap-5 sm:grid-cols-2">
								<label className={`block text-sm font-medium ${ink}`}>
									Phone number
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleFormChange}
										autoComplete="tel"
										placeholder="Your preferred contact number"
										className={`${fieldClasses} ${fieldTheme}`}
									/>
								</label>

								<label className={`block text-sm font-medium ${ink}`}>
									Service you’re interested in *
									<select
										name="service"
										value={service}
										onChange={(event) => {
											setService(event.target.value);
											setHandoffStarted(false);
										}}
										className={`${fieldClasses} ${fieldTheme}`}
										required
									>
										<option value="" disabled>
											Choose a service
										</option>
										{services.map(({ title }) => (
											<option key={title} value={title}>
												{title}
											</option>
										))}
										<option value="Other / Not sure">Other / Not sure</option>
									</select>
								</label>
							</div>

							<label className={`block text-sm font-medium ${ink}`}>
								How can we help? *
								<textarea
									name="message"
									value={formData.message}
									onChange={handleFormChange}
									rows={6}
									placeholder="Describe the service or issue, where the work is needed, and any deadlines or other important details."
									className={`${fieldClasses} resize-y`}
									required
								/>
							</label>

							<div className="flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
								<button
									type="submit"
									className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
								>
									Prepare email enquiry
									<ArrowRight className="h-4 w-4" />
								</button>
								{handoffStarted && (
									<p role="status" className="text-sm text-emerald-600 dark:text-emerald-400">
										Your email app should open with your enquiry ready to send.
									</p>
								)}
							</div>
							<p className={`text-xs leading-relaxed ${muted}`}>
								This form prepares a message in your email application; it
								doesn’t send or store your enquiry on this website.
							</p>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
