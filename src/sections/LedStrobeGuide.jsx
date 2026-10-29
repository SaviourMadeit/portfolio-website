import { AlertTriangle, ArrowUpRight, CheckCircle2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const LedStrobeGuide = ({ isDark }) => {
	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-300" : "text-slate-600";
	const border = isDark ? "border-slate-700" : "border-slate-200";
	const panel = isDark ? "bg-slate-900/70" : "bg-white";

	return (
		<article id="led-rgb-strobe-guide" className="scroll-mt-28 px-4 pb-24">
			<div className={`mx-auto max-w-4xl rounded-3xl border p-6 sm:p-10 ${border} ${panel}`}>
				<header className="mb-8">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
						Event technology · Troubleshooting guide
					</p>
					<h1 className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${ink}`}>
						How to Troubleshoot an LED RGB Strobe Light
					</h1>
					<p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${muted}`}>
						Use this guide to check common problems with an RGB LED strobe,
						from no output and incorrect color to control and overheating
						issues. Start with safe external checks, follow the fixture manual,
						and change one setting at a time.
					</p>
				</header>

				<aside className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-950 dark:text-amber-100">
					<div className="flex items-center gap-2">
						<AlertTriangle className="h-5 w-5 shrink-0" />
						<h2 className="text-lg font-bold">Read this before testing</h2>
					</div>
					<p className="mt-2 text-base leading-7">
						Strobe flashes can trigger seizures in some people and may cause
						discomfort or disorientation. Do not test around an audience.
						Follow venue safety procedures, warn people before any test, and
						stop if anyone feels unwell. Consider a non-strobe alternative
						where appropriate.
					</p>
					<p className="mt-3 text-base leading-7">
						Disconnect the fixture from power before inspecting its exterior.
						Never open the housing, probe internal circuits, bypass protection,
						or work on energized equipment. Refer electrical faults to a
						qualified technician.
					</p>
				</aside>

				<div className={`mb-8 rounded-2xl border p-5 ${border} ${isDark ? "bg-blue-950/40" : "bg-blue-50"}`}>
					<h2 className={`text-lg font-bold ${ink}`}>Quick troubleshooting order</h2>
					<ol className={`mt-3 grid gap-2 text-base leading-7 sm:grid-cols-2 ${muted}`}>
						<li><span className="font-semibold text-cyan-700 dark:text-cyan-300">1.</span> Identify whether one fixture or the whole rig is affected.</li>
						<li><span className="font-semibold text-cyan-700 dark:text-cyan-300">2.</span> Check external power and cables with the fixture off.</li>
						<li><span className="font-semibold text-cyan-700 dark:text-cyan-300">3.</span> Test a built-in mode if the manual provides one.</li>
						<li><span className="font-semibold text-cyan-700 dark:text-cyan-300">4.</span> Verify DMX mode, address, and channel values.</li>
						<li><span className="font-semibold text-cyan-700 dark:text-cyan-300">5.</span> Stop if it overheats, smells, sparks, or trips power.</li>
					</ol>
				</div>

				<div className="space-y-9 text-base leading-7 sm:text-lg sm:leading-8">
					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							1. Work out where the problem is
						</h2>
						<p className={`mt-3 ${muted}`}>
							Note what the fixture does, when the fault starts, and whether
							other lights on the same controller or power circuit behave the
							same way. If several fixtures fail together, check shared
							external control and power connections first. If only one fails,
							isolate it using the manufacturer’s normal setup instructions.
						</p>
					</section>

					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							2. Check power and external connections
						</h2>
						<ul className={`mt-3 space-y-3 ${muted}`}>
							<li className="flex gap-3">
								<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
								With the light switched off and unplugged, look for a damaged
								power lead, loose connector, bent pin, or visible contamination.
								Do not use damaged cables.
							</li>
							<li className="flex gap-3">
								<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
								Check that the external outlet and power distribution are
								suitable for the fixture, following its manual and venue
								procedure. Do not open an outlet or distribution equipment.
							</li>
							<li className="flex gap-3">
								<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
								Use only the fixture’s specified fuse type and rating. If a
								fuse blows again, stop using the light and get qualified
								service; never bridge or increase the fuse rating.
							</li>
						</ul>
					</section>

					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							3. Check the mode and DMX settings
						</h2>
						<p className={`mt-3 ${muted}`}>
							If the fixture offers a standalone test mode, use it as directed
							in the manual, away from people. If it works in standalone but
							not from the lighting desk, check:
						</p>
						<ul className={`mt-3 list-disc space-y-2 pl-6 ${muted}`}>
							<li>The fixture’s DMX personality and channel map match the desk patch.</li>
							<li>The start address and channel range do not conflict with another fixture.</li>
							<li>Blackout, shutter, master dimmer, strobe-rate, and RGB channels are set as intended.</li>
							<li>The controller output, known-good DMX cable, and signal-chain setup are correct.</li>
						</ul>
						<p className={`mt-3 ${muted}`}>
							When fixtures disagree or lose control intermittently, follow
							the manual’s instructions for the DMX cable chain and termination.
							Fixtures can have different channel layouts, so verify the exact
							model and mode.
						</p>
					</section>

					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							4. Diagnose color and flicker symptoms
						</h2>
						<p className={`mt-3 ${muted}`}>
							For an incorrect color, confirm RGB mode and check the desk’s
							color channels, effect macros, and fixture profile. For uneven
							or unexpected flashing, check that a programmed effect or
							strobe channel is not overriding the intended output.
						</p>
						<p className={`mt-3 ${muted}`}>
							If flicker appears only in video, compare the live output with
							the recording. The camera’s shutter and frame rate can interact
							with a fixture’s pulse timing. Consult the camera and fixture
							manuals for adjustment guidance; do not open the fixture to
							measure its driver.
						</p>
					</section>

					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							5. Respond to heat or automatic shutdown
						</h2>
						<p className={`mt-3 ${muted}`}>
							Switch off and unplug a hot fixture and allow it to cool before
							handling. Once cool, check only that external vents are clear
							and the fixture has the clearance required by its manual. If it
							repeatedly dims or shuts down, stop using it and arrange
							qualified inspection rather than continuing to reset it.
						</p>
					</section>

					<section className="rounded-2xl border border-red-500/25 bg-red-500/5 p-5">
						<h2 className={`flex items-center gap-2 text-xl font-bold ${ink}`}>
							<AlertTriangle className="h-5 w-5 text-red-500" />
							Stop and seek service
						</h2>
						<p className={`mt-2 ${muted}`}>
							Disconnect power when safe to do so and keep the fixture out of
							service if you notice smoke, sparks, a burning smell, unusual
							electrical noise, a damaged power cable, repeated fuse failure,
							or a tripped breaker. Also stop if the fault appears to be
							inside the housing or the unit is under warranty.
						</p>
					</section>

					<section>
						<h2 className={`text-2xl font-bold leading-tight sm:text-3xl ${ink}`}>
							Keep a simple fault record
						</h2>
						<p className={`mt-3 ${muted}`}>
							Record the fixture model, operating mode, controller profile,
							what you observed, and when the issue occurred. This helps a
							technician or manufacturer support team diagnose the problem
							without repeated live testing.
						</p>
						<p className={`mt-4 flex gap-2 rounded-xl bg-cyan-500/10 p-4 text-base leading-7 ${muted}`}>
							<Lightbulb className="mt-1 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />
							<strong>Bottom line:</strong> Start with safe external checks
							and controller settings. Internal electrical diagnosis and
							repairs belong to qualified service personnel.
						</p>
					</section>
				</div>

				<footer className={`mt-10 border-t pt-6 text-sm leading-6 ${muted} ${border}`}>
					<h2 className={`text-lg font-bold ${ink}`}>Sources and further reading</h2>
					<ul className="mt-3 space-y-2">
						<li>
							<a
								href="https://www.bklite.com/article/troubleshooting-led-strobe-issues.html"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 font-medium text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
							>
								BKlite: Troubleshooting LED strobe issues
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						</li>
						<li>
							<a
								href="https://epilepsysociety.org.uk/understanding-epilepsy/photosensitive-epilepsy"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 font-medium text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
							>
								Epilepsy Society: Photosensitive epilepsy
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						</li>
					</ul>
					<p className="mt-4">
						This is general guidance for user-level checks, not a repair
						manual. Always follow the exact fixture manual, venue rules, and
						local safety requirements.
					</p>
				</footer>

				<section className="mt-8 rounded-2xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800 p-6 text-white sm:p-8">
					<h2 className="text-2xl font-bold">
						Need help with a lighting setup?
					</h2>
					<p className="mt-3 max-w-2xl leading-7 text-blue-100">
						Bixyl Lab IT &amp; Engineering Consult supports stage lighting and
						event technology setup, troubleshooting, and maintenance. Tell us
						about your fixture and symptoms, and we can discuss the right next
						step. Internal electrical repairs should be handled by qualified
						technicians.
					</p>
					<div className="mt-5 flex flex-wrap gap-3">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
						>
							Contact Bixyl Lab
							<ArrowUpRight className="h-4 w-4" />
						</Link>
						<Link
							to="/services#lighting-effects-events"
							className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
						>
							View event technology services
						</Link>
					</div>
				</section>
			</div>
		</article>
	);
};

export default LedStrobeGuide;
