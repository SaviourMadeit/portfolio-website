import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ theme, handleThemeChange }) => (
	<div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700">
		<button
			onClick={() => handleThemeChange("auto")}
			className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === "auto" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"}`}
		>
			Auto
		</button>
		<button
			onClick={() => handleThemeChange("day")}
			className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === "day" ? "bg-yellow-500 text-white" : "text-gray-400 hover:text-white"}`}
		>
			<Sun className="w-4 h-4" />
		</button>
		<button
			onClick={() => handleThemeChange("night")}
			className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === "night" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"}`}
		>
			<Moon className="w-4 h-4" />
		</button>
	</div>
);

export default ThemeToggle;
