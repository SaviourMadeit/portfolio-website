import { createElement, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

const themeOptions = [
	{ value: "auto", label: "System theme", icon: Monitor },
	{ value: "day", label: "Light theme", icon: Sun },
	{ value: "night", label: "Dark theme", icon: Moon },
];

const ThemeToggle = ({ theme, handleThemeChange, isDark }) => {
	const [expanded, setExpanded] = useState(false);
	const ActiveIcon = themeOptions.find((option) => option.value === theme)?.icon ?? Monitor;

	const chooseTheme = (value) => {
		handleThemeChange(value);
		setExpanded(false);
	};

	return (
		<div
			role="group"
			aria-label="Choose color theme"
			className={`group relative flex h-12 items-center justify-end overflow-hidden rounded-full border p-1 shadow-lg backdrop-blur-md transition-[width] duration-300 ease-out motion-reduce:transition-none ${
				expanded
					? "w-48"
					: "w-12 hover:w-48 focus-within:w-48"
			} ${
				isDark
					? "border-slate-700 bg-slate-900/95"
					: "border-slate-200 bg-white/95"
			}`}
		>
			<div
				className={`mr-12 flex items-center gap-1 transition-[opacity,transform] delay-75 duration-200 ${
					expanded
						? "visible translate-x-0 opacity-100"
						: "invisible translate-x-2 opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-x-0 group-focus-within:opacity-100"
				}`}
			>
				{themeOptions.map(({ value, label, icon: Icon }) => (
					<button
						key={value}
						type="button"
						onClick={() => chooseTheme(value)}
						aria-label={label}
						aria-pressed={theme === value}
						className={`rounded-full p-2 transition-colors ${
							theme === value
								? value === "day"
									? "bg-amber-500 text-white"
									: value === "night"
										? "bg-violet-600 text-white"
										: "bg-blue-600 text-white"
								: isDark
									? "text-slate-300 hover:bg-slate-800"
									: "text-slate-600 hover:bg-slate-100"
						}`}
					>
						{createElement(Icon, { className: "h-4 w-4" })}
					</button>
				))}
			</div>

			<button
				type="button"
				onClick={() => setExpanded((current) => !current)}
				aria-label={`Theme: ${theme}. ${expanded ? "Collapse" : "Expand"} theme options`}
				aria-expanded={expanded}
				className={`absolute right-1 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
					isDark
						? "text-slate-200 hover:bg-slate-800"
						: "text-slate-700 hover:bg-slate-100"
				}`}
			>
				<ActiveIcon className="h-5 w-5" />
			</button>
		</div>
	);
};

export default ThemeToggle;
