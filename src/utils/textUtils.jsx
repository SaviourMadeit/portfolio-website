// src/utils/textUtils.js

export const renderDescriptionWithBullets = (text) => {
	const paragraphs = text.split("\n\n");

	return paragraphs.map((paragraph, pIdx) => {
		// Check if paragraph contains bullet points
		const lines = paragraph.split("\n");

		// Check if this is a section with bullets (starts with a title and has bullet lines)
		const hasBullets = lines.some((line) => line.trim().startsWith("•"));

		if (hasBullets) {
			// Find the title (first line that doesn't start with •)
			const titleLine = lines.find(
				(line) => !line.trim().startsWith("•"),
			);
			const bulletLines = lines.filter((line) =>
				line.trim().startsWith("•"),
			);

			return (
				<div key={pIdx}>
					{titleLine && (
						<p className="font-semibold text-gray-200 mb-3">
							{titleLine}
						</p>
					)}
					{bulletLines.length > 0 && (
						<ul className="space-y-2 ml-4 mb-3">
							{bulletLines.map((line, idx) => (
								<li
									key={idx}
									className="flex items-start space-x-3 text-gray-300"
								>
									<span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">
										•
									</span>
									<span>{line.replace("•", "").trim()}</span>
								</li>
							))}
						</ul>
					)}
				</div>
			);
		}

		// Regular paragraph without bullets
		return (
			<p key={pIdx} className="leading-relaxed text-gray-300">
				{paragraph}
			</p>
		);
	});
};
