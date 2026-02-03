import { X } from "lucide-react";

const MediaModal = ({ media, onClose }) => {
	if (!media) return null;

	return (
		<div
			className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in"
			onClick={onClose}
		>
			<div
				className="relative max-w-6xl w-full"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
				>
					<X className="w-8 h-8" />
				</button>
				{media.type === "image" ? (
					<img
						src={media.src}
						alt="Project"
						className="w-full h-auto rounded-lg shadow-2xl"
					/>
				) : (
					<div className="relative pb-[56.25%] h-0">
						<iframe
							src={media.src}
							className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
							allowFullScreen
							title="Project video"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default MediaModal;
