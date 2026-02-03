const Background = ({ isDark, mousePosition }) => {
	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none">
			<div
				className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-500 ${
					isDark ? "bg-blue-500/10" : "bg-blue-500/5"
				}`}
				style={{
					left: mousePosition.x - 192,
					top: mousePosition.y - 192,
					transition: "all 0.3s ease-out",
				}}
			/>
			<div
				className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
					isDark ? "bg-purple-500/10" : "bg-purple-500/5"
				}`}
			/>
			<div
				className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
					isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
				}`}
				style={{ animationDelay: "1s" }}
			/>
		</div>
	);
};

export default Background;
