import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronRight, MessageCircle } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { engineeringServices, projects, stats } from "../data";

/* ------------------------------------------------------------------ */
/* Things to fill in                                                   */
/* ------------------------------------------------------------------ */
// WhatsApp number in international format, digits only (e.g. "233241234567").
// Leave "" to hide the WhatsApp button.
const WHATSAPP_NUMBER = "";
// Path to your photo (e.g. "/images/saviour.jpg"). Leave "" to hide the intro strip.
const PROFILE_IMAGE = "";
// Add real quotes to show the testimonials section. Leave empty to hide it.
// Example: { quote: "Delivered on time and the board worked first try.", name: "Client name", role: "Company" }
const TESTIMONIALS = [];

// Fonts (add to index.html <head>):
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
const DISPLAY_FONT = {
	fontFamily:
		"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};
const MONO_FONT = {
	fontFamily:
		"'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
};

/* ------------------------------------------------------------------ */
/* Interactive board (the one memorable element on the page)           */
/* ------------------------------------------------------------------ */
const BOOT_LINES = [
	"boot: dev-board rev A",
	"clk 80MHz ok",
	"i2c scan: 1 device found",
	"ready. switch a peripheral on below",
];

const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function useBoard() {
	const [log, setLog] = useState([]);
	const [on, setOn] = useState({ led: false, sensor: false, motor: false });
	const [temp, setTemp] = useState(26.8);
	const tempRef = useRef(26.8);

	const push = (line) => setLog((l) => [...l, line].slice(-6));

	// Boot sequence: the single orchestrated moment on page load.
	useEffect(() => {
		if (prefersReducedMotion()) {
			setLog(BOOT_LINES);
			return;
		}
		const timers = BOOT_LINES.map((_, i) =>
			setTimeout(() => setLog(BOOT_LINES.slice(0, i + 1)), 450 * (i + 1)),
		);
		return () => timers.forEach(clearTimeout);
	}, []);

	// Sensor readings while the sensor is on.
	useEffect(() => {
		if (!on.sensor) return;
		const id = setInterval(() => {
			const next = Math.min(
				34,
				Math.max(24, tempRef.current + (Math.random() - 0.5) * 0.8),
			);
			tempRef.current = next;
			setTemp(next);
			setLog((l) => [...l, `adc0 -> ${next.toFixed(1)} C`].slice(-6));
		}, 1400);
		return () => clearInterval(id);
	}, [on.sensor]);

	const toggle = (name) => {
		const next = !on[name];
		setOn((s) => ({ ...s, [name]: next }));
		const messages = {
			led: next ? "gpio5 -> HIGH" : "gpio5 -> LOW",
			sensor: next ? "adc0 sampling started" : "adc0 sampling stopped",
			motor: next ? "pwm1 duty 60%" : "pwm1 duty 0%",
		};
		push(messages[name]);
	};

	return { log, on, temp, toggle };
}

function BoardIllustration({ isDark, on, temp }) {
	const board = isDark ? "#0f1b33" : "#e8effc";
	const edge = isDark ? "#25457f" : "#b6c8ee";
	const trace = "#3b82f6";
	const label = isDark ? "#94a3b8" : "#475569";
	const chip = isDark ? "#0a1222" : "#1e293b";
	const reduce = prefersReducedMotion();
	const anyOn = on.led || on.sensor || on.motor;
	// Each path is drawn in the direction the signal travels.
	const traces = [
		{ d: "M150 82 H92 V50 H62", active: on.led, color: "#fbbf24" }, // MCU -> LED
		{ d: "M62 150 H92 V118 H150", active: on.sensor, color: "#38bdf8" }, // sensor -> MCU
		{ d: "M210 100 H272", active: on.motor, color: "#60a5fa" }, // MCU -> motor
	];

	return (
		<svg
			viewBox="0 0 360 200"
			className="w-full h-auto"
			role="img"
			aria-label="Illustration of a development board with an LED, a temperature sensor and a motor"
		>
			<rect
				x="4"
				y="4"
				width="352"
				height="192"
				rx="14"
				fill={board}
				stroke={edge}
				strokeWidth="2"
			/>

			{/* traces: dim copper base + animated current on top */}
			<g fill="none" strokeLinecap="round">
				{traces.map((t) => (
					<g key={t.d}>
						<path d={t.d} stroke={trace} strokeWidth="2" opacity="0.35" />
						<path
							d={t.d}
							stroke={t.active ? t.color : trace}
							strokeWidth="3"
							opacity={t.active ? 1 : 0.4}
							className={`sm-flow ${t.active ? "sm-flow-fast" : ""}`}
						/>
						{t.active && !reduce && (
							<circle r="4" fill={t.color} stroke="none">
								<animateMotion dur="1.1s" repeatCount="indefinite" path={t.d} />
							</circle>
						)}
					</g>
				))}
			</g>

			{/* MCU */}
			<rect
				x="145"
				y="63"
				width="70"
				height="74"
				rx="8"
				fill="none"
				stroke="#3b82f6"
				strokeWidth="2"
				opacity={anyOn ? 0.75 : 0.15}
				className={anyOn ? "motion-safe:animate-pulse" : ""}
				style={{ transition: "opacity 300ms" }}
			/>
			<rect x="150" y="68" width="60" height="64" rx="5" fill={chip} />
			<g stroke={edge} strokeWidth="2">
				{[80, 92, 104, 116].map((y) => (
					<g key={y}>
						<line x1="144" y1={y} x2="150" y2={y} />
						<line x1="210" y1={y} x2="216" y2={y} />
					</g>
				))}
			</g>
			<text
				x="180"
				y="104"
				textAnchor="middle"
				fontSize="12"
				fill="#e2e8f0"
				style={MONO_FONT}
			>
				MCU
			</text>

			{/* LED */}
			<circle
				cx="46"
				cy="50"
				r="20"
				fill="#fbbf24"
				opacity={on.led ? 0.28 : 0}
				style={{ transition: "opacity 200ms" }}
			/>
			<circle
				cx="46"
				cy="50"
				r="10"
				fill={on.led ? "#fbbf24" : isDark ? "#334155" : "#cbd5e1"}
				stroke={edge}
				strokeWidth="2"
				style={{ transition: "fill 200ms" }}
			/>
			<text x="46" y="82" textAnchor="middle" fontSize="10" fill={label} style={MONO_FONT}>
				LED
			</text>

			{/* Sensor */}
			<rect
				x="34"
				y="140"
				width="24"
				height="20"
				rx="3"
				fill={on.sensor ? "#38bdf8" : isDark ? "#334155" : "#cbd5e1"}
				stroke={edge}
				strokeWidth="2"
				style={{ transition: "fill 200ms" }}
			/>
			<text x="46" y="180" textAnchor="middle" fontSize="10" fill={label} style={MONO_FONT}>
				{on.sensor ? `${temp.toFixed(1)}°C` : "TEMP"}
			</text>

			{/* Motor */}
			<circle
				cx="308"
				cy="100"
				r="30"
				fill="none"
				stroke={edge}
				strokeWidth="2"
			/>
			<g
				className={on.motor ? "motion-safe:animate-spin" : ""}
				style={{
					transformBox: "fill-box",
					transformOrigin: "center",
					animationDuration: "0.9s",
				}}
			>
				<line
					x1="308"
					y1="76"
					x2="308"
					y2="124"
					stroke={on.motor ? "#3b82f6" : label}
					strokeWidth="5"
					strokeLinecap="round"
				/>
				<line
					x1="284"
					y1="100"
					x2="332"
					y2="100"
					stroke={on.motor ? "#3b82f6" : label}
					strokeWidth="5"
					strokeLinecap="round"
				/>
			</g>
			<text x="308" y="148" textAnchor="middle" fontSize="10" fill={label} style={MONO_FONT}>
				MOTOR
			</text>
		</svg>
	);
}

function DeviceDemo({ isDark }) {
	const { log, on, temp, toggle } = useBoard();
	const controls = [
		{ key: "led", label: "LED" },
		{ key: "sensor", label: "Sensor" },
		{ key: "motor", label: "Motor" },
	];

	return (
		<div
			className={`rounded-3xl border p-4 sm:p-5 ${
				isDark
					? "bg-slate-900/80 border-slate-700/80 backdrop-blur-md"
					: "bg-white/85 border-slate-200 shadow-xl shadow-slate-200/60 backdrop-blur-md"
			}`}
		>
			<BoardIllustration isDark={isDark} on={on} temp={temp} />

			<div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Board peripherals">
				{controls.map((c) => (
					<button
						key={c.key}
						type="button"
						aria-pressed={on[c.key]}
						onClick={() => toggle(c.key)}
						className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
							on[c.key]
								? "bg-blue-500 border-blue-500 text-white"
								: isDark
									? "border-slate-600 text-slate-300 hover:border-blue-400"
									: "border-slate-300 text-slate-700 hover:border-blue-500"
						}`}
					>
						{c.label} {on[c.key] ? "on" : "off"}
					</button>
				))}
			</div>

			<div
				role="log"
				aria-live="off"
				className="mt-3 rounded-xl bg-slate-950 px-4 py-3 h-[9.5rem] overflow-hidden text-[13px] leading-6 text-slate-300"
				style={MONO_FONT}
			>
				{log.map((line, i) => (
					<div key={`${i}-${line}`} className="whitespace-nowrap">
						<span className="text-amber-300 mr-2">&gt;</span>
						{line}
					</div>
				))}
				<span className="inline-block w-2 h-4 bg-slate-400 align-middle motion-safe:animate-pulse" />
			</div>
		</div>
	);
}

/* ------------------------------------------------------------------ */
/* Live-scrolling firmware                                             */
/* ------------------------------------------------------------------ */
const FIRMWARE = `#include "board.h"
#include "gpio.h"
#include "adc.h"
#include "pwm.h"

#define LED_PIN     5
#define TEMP_CH     0
#define MOTOR_DUTY  60
#define FAN_ON_C    30.0f

static volatile uint32_t ticks;

// 1 kHz system tick
void SysTick_Handler(void) {
	ticks++;
}

static float read_temp_c(void) {
	uint16_t raw = adc_read(TEMP_CH);
	float mv = raw * 3300.0f / 4095.0f;
	return (mv - 500.0f) / 10.0f;
}

static void motor_update(float t) {
	if (t > FAN_ON_C) {
		pwm_set(1, MOTOR_DUTY);
	} else {
		pwm_set(1, 0);
	}
}

int main(void) {
	clock_init(80000000);
	gpio_mode(LED_PIN, GPIO_OUT);
	adc_init(TEMP_CH);
	pwm_init(1, 20000);
	uart_init(115200);

	for (;;) {
		if (ticks % 500 == 0) {
			gpio_toggle(LED_PIN);
		}
		float t = read_temp_c();
		motor_update(t);
		uart_printf("adc0 -> %.1f C\\n", t);
		delay_ms(100);
	}
}
`.split("\n");

const TOKEN_RE =
	/(\/\/.*$|"[^"]*"|#\w+|\b\d+(?:\.\d+)?f?\b|\b(?:static|volatile|void|int|float|uint8_t|uint16_t|uint32_t|const|if|else|for|while|return)\b)/;

function highlight(line, c) {
	return line.split(TOKEN_RE).map((part, i) => {
		if (i % 2 === 0) return part;
		let color = c.kw;
		if (part.startsWith("//")) color = c.com;
		else if (part.startsWith('"')) color = c.str;
		else if (part.startsWith("#")) color = c.pre;
		else if (/^\d/.test(part)) color = c.num;
		return (
			<span key={i} style={{ color }}>
				{part}
			</span>
		);
	});
}

// Renders the source twice and slides it up by half its height, so the loop is seamless.
function CodeStream({ isDark }) {
	const c = isDark
		? { base: "#94a3b8", kw: "#93c5fd", num: "#fbbf24", str: "#86efac", pre: "#c4b5fd", com: "#64748b", gutter: "#475569" }
		: { base: "#475569", kw: "#1d4ed8", num: "#b45309", str: "#15803d", pre: "#7e22ce", com: "#94a3b8", gutter: "#cbd5e1" };

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%] overflow-hidden opacity-20 lg:opacity-60"
			style={{
				maskImage:
					"radial-gradient(ellipse 75% 80% at 70% 50%, black 25%, transparent 75%)",
				WebkitMaskImage:
					"radial-gradient(ellipse 75% 80% at 70% 50%, black 25%, transparent 75%)",
			}}
		>
			<div className="sm-code text-[13px] leading-6 px-6" style={{ ...MONO_FONT, color: c.base }}>
				{[0, 1].map((copy) => (
					<div key={copy}>
						{FIRMWARE.map((line, n) => (
							<div key={n} className="whitespace-pre flex">
								<span className="w-8 shrink-0 text-right pr-4 select-none" style={{ color: c.gutter }}>
									{n + 1}
								</span>
								<span>{highlight(line, c) }</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const statValue = (s) => s.value ?? s.number ?? s.count ?? "";
const statLabel = (s) => s.label ?? s.title ?? s.name ?? "";

const Home = () => {
	const { isDark } = useOutletContext();
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	const featuredServices = engineeringServices.slice(0, 4);

	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-400" : "text-slate-600";
	const rule = isDark ? "border-slate-800" : "border-slate-200";
	const band = isDark ? "bg-slate-900/40" : "bg-slate-50";
	const gridColor = isDark ? "rgba(59,130,246,0.10)" : "rgba(59,130,246,0.12)";

	return (
		<div style={DISPLAY_FONT}>
			<style>{`
				@keyframes sm-flow { to { stroke-dashoffset: -20; } }
				@keyframes sm-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
				.sm-flow { stroke-dasharray: 6 14; animation: sm-flow 1.8s linear infinite; }
				.sm-flow-fast { animation-duration: 0.55s; }
				.sm-code { animation: sm-scroll 55s linear infinite; }
				@media (prefers-reduced-motion: reduce) {
					.sm-flow, .sm-code { animation: none; }
				}
			`}</style>

			{/* ---------------- Hero ---------------- */}
			<section className="relative overflow-hidden">
				<CodeStream isDark={isDark} />
				<div
					aria-hidden="true"
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
						backgroundSize: "32px 32px",
						maskImage:
							"radial-gradient(ellipse 70% 70% at 60% 40%, black 30%, transparent 75%)",
						WebkitMaskImage:
							"radial-gradient(ellipse 70% 70% at 60% 40%, black 30%, transparent 75%)",
					}}
				/>

				<div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16 lg:pt-36 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<h1
							className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] ${ink}`}
						>
							Embedded hardware and firmware that works outside the lab.
						</h1>
						<p className={`mt-6 text-lg max-w-xl leading-relaxed ${muted}`}>
							I design PCBs, write firmware, build IoT products and teach
							robotics, from first schematic to a device in someone's hands.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								to="/portfolio"
								className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
							>
								See projects
								<ArrowUpRight className="w-4 h-4" />
							</Link>
							<Link
								to="/contact"
								className={`inline-flex items-center rounded-full border font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
									isDark
										? "border-slate-600 text-white hover:border-blue-400"
										: "border-slate-300 text-slate-900 hover:border-blue-500"
								}`}
							>
								Start a project
							</Link>
						</div>

						{stats?.length > 0 && (
							<dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
								{stats.slice(0, 4).map((s, i) => (
									<div key={i}>
										<dt className={`text-sm ${muted}`}>{statLabel(s)}</dt>
										<dd className={`text-3xl font-bold ${ink}`}>
											{statValue(s)}
										</dd>
									</div>
								))}
							</dl>
						)}
					</div>

					<DeviceDemo isDark={isDark} />
				</div>
			</section>

			{/* ---------------- Intro strip (photo) ---------------- */}
			{PROFILE_IMAGE && (
				<section className={`border-y ${rule} ${band}`}>
					<div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center gap-6">
						<img
							src={PROFILE_IMAGE}
							alt="Saviour Dagadu at work"
							className="w-24 h-24 rounded-full object-cover shrink-0"
						/>
						<p className={`text-lg leading-relaxed max-w-3xl ${ink}`}>
							I'm Saviour. I build and teach embedded systems, and I like
							projects where the hardware has to survive real conditions.{" "}
							<Link
								to="/about"
								className="text-blue-500 hover:text-blue-400 font-medium whitespace-nowrap"
							>
								More about me
							</Link>
						</p>
					</div>
				</section>
			)}

			{/* ---------------- Services (list rows, not cards) ---------------- */}
			<section className="py-20 lg:py-28 px-4">
				<div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
					<div className="lg:sticky lg:top-28 self-start">
						<h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${ink}`}>
							What I can build for you
						</h2>
						<p className={`mt-4 leading-relaxed ${muted}`}>
							Pick a service to start a request. Each one begins with a short
							conversation about what you need.
						</p>
						<Link
							to="/services"
							className="mt-6 inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 font-medium"
						>
							See all services
							<ChevronRight className="w-4 h-4" />
						</Link>
					</div>

					<ul className={`border-t ${rule}`}>
						{featuredServices.map((service) => {
							const Icon = service.icon;
							return (
								<li key={service.title} className={`border-b ${rule}`}>
									<Link
										to={`/contact?service=${encodeURIComponent(service.title)}`}
										className="group flex items-start gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
									>
										<div
											className={`w-12 h-12 shrink-0 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center`}
										>
											{Icon && <Icon className="w-6 h-6 text-white" />}
										</div>
										<div className="flex-1 min-w-0">
											<h3
												className={`text-xl font-semibold transition-colors group-hover:text-blue-500 ${ink}`}
											>
												{service.title}
											</h3>
											<p className={`mt-1 leading-relaxed ${muted}`}>
												{service.description}
											</p>
										</div>
										<span className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-500 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pt-1">
											Request this
											<ArrowUpRight className="w-4 h-4" />
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* ---------------- Featured work (one large, two small) ---------------- */}
			{featuredProjects.length > 0 && (
				<section className={`py-20 lg:py-28 px-4 ${band}`}>
					<div className="max-w-7xl mx-auto">
						<div className="flex items-end justify-between flex-wrap gap-4 mb-10">
							<h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${ink}`}>
								Recent work
							</h2>
							<Link
								to="/portfolio"
								className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 font-medium"
							>
								View full portfolio
								<ChevronRight className="w-4 h-4" />
							</Link>
						</div>

						<div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
							{featuredProjects.map((project, i) => (
								<Link
									to="/portfolio"
									key={project.id}
									className={`group relative block overflow-hidden rounded-2xl bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
										i === 0
											? "md:row-span-2 min-h-[22rem]"
											: "min-h-[12rem]"
									}`}
								>
									<img
										src={project.image}
										alt={project.title}
										className="absolute inset-0 w-full h-full object-cover motion-safe:transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
									<div className="absolute inset-x-0 bottom-0 p-6">
										<span className="text-sm text-slate-300">
											{project.category}
										</span>
										<h3
											className={`text-white font-bold mt-1 ${i === 0 ? "text-2xl" : "text-lg"}`}
										>
											{project.title}
										</h3>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			)}

			{/* ---------------- Teaching ---------------- */}
			<section className="py-20 lg:py-28 px-4">
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${ink}`}>
							Teaching robotics, hands on
						</h2>
						<p className={`mt-4 text-lg leading-relaxed max-w-xl ${muted}`}>
							Learners wire circuits and program real boards from the first
							session. Available for schools, clubs and private groups.
						</p>
					</div>
					<div className="lg:justify-self-end">
						<Link
							to={`/contact?service=${encodeURIComponent("Robotics classes")}`}
							className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
						>
							Ask about classes
							<ArrowUpRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* ---------------- Testimonials (only when you add some) ---------------- */}
			{TESTIMONIALS.length > 0 && (
				<section className={`py-20 px-4 border-y ${rule} ${band}`}>
					<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
						{TESTIMONIALS.slice(0, 2).map((t) => (
							<figure key={t.name}>
								<blockquote className={`text-xl leading-relaxed ${ink}`}>
									{t.quote}
								</blockquote>
								<figcaption className={`mt-4 text-sm ${muted}`}>
									{t.name}
									{t.role ? `, ${t.role}` : ""}
								</figcaption>
							</figure>
						))}
					</div>
				</section>
			)}

			{/* ---------------- Closing call to action ---------------- */}
			<section className="py-20 lg:py-28 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${ink}`}>
						Have a hardware idea?
					</h2>
					<p className={`mt-4 text-lg leading-relaxed ${muted}`}>
						Tell me what you want to build and where you're stuck. I'll reply
						with clear next steps.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
						>
							Start a project
							<ArrowUpRight className="w-4 h-4" />
						</Link>
						{WHATSAPP_NUMBER && (
							<a
								href={`https://wa.me/${WHATSAPP_NUMBER}`}
								target="_blank"
								rel="noreferrer"
								className={`inline-flex items-center gap-2 rounded-full border font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
									isDark
										? "border-slate-600 text-white hover:border-green-400"
										: "border-slate-300 text-slate-900 hover:border-green-500"
								}`}
							>
								<MessageCircle className="w-4 h-4" />
								Message on WhatsApp
							</a>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
