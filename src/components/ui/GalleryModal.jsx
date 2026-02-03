import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GalleryModal = ({
	gallery,
	onClose,
	title,
	galleryIndex,
	setGalleryIndex,
}) => {
	if (!gallery || gallery.length === 0) return null;

	const currentImage = gallery[galleryIndex];

	const nextImage = () => {
		setGalleryIndex((prev) => (prev + 1) % gallery.length);
	};

	const prevImage = () => {
		setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
	};

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in"
			onClick={onClose}
		>
			<div
				className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
				>
					<X className="w-8 h-8 text-white" />
				</button>

				{/* Title */}
				<div className="text-center mb-4">
					<h3 className="text-2xl font-bold text-white">
						{title} Gallery
					</h3>
					<p className="text-gray-300 text-sm mt-1">
						{galleryIndex + 1} of {gallery.length}
					</p>
				</div>

				{/* Image Container */}
				<div className="relative flex-1 flex items-center justify-center rounded-xl overflow-hidden mb-4">
					<img
						src={currentImage}
						alt={`${title} ${galleryIndex + 1}`}
						className="max-w-full max-h-[70vh] object-contain"
					/>

					{/* Navigation Buttons */}
					{gallery.length > 1 && (
						<>
							<button
								onClick={prevImage}
								className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={nextImage}
								className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>
						</>
					)}
				</div>

				{/* Thumbnail Strip */}
				{gallery.length > 1 && (
					<div className="flex gap-2 justify-center overflow-x-auto pb-2">
						{gallery.map((img, idx) => (
							<button
								key={idx}
								onClick={() => setGalleryIndex(idx)}
								className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
									idx === galleryIndex
										? "border-blue-400 scale-110"
										: "border-white/20 hover:border-white/50 opacity-70 hover:opacity-100"
								}`}
							>
								<img
									src={img}
									alt={`Thumbnail ${idx + 1}`}
									className="w-full h-full object-cover"
								/>
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default GalleryModal;
