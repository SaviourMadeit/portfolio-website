import { ExternalLink, Github, X } from "lucide-react";
import { renderDescriptionWithBullets } from "../../utils/textUtils";

const ProjectModal = ({ project, onClose, setSelectedMedia }) => {
	if (!project) return null;

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in"
			onClick={onClose}
		>
			<div
				className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
				>
					<X className="w-6 h-6" />
				</button>

				<div className="p-8">
					{/* Header */}
					<div className="flex items-start justify-between mb-8">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<div
									className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
								>
									<project.icon className="w-6 h-6 text-white" />
								</div>
								<div>
									<h2 className="text-3xl font-bold text-white">
										{project.title}
									</h2>
									<span className="text-sm text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full">
										{project.category}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Content Grid */}
					<div className="grid lg:grid-cols-2 gap-8">
						{/* Media Section */}
						<div className="space-y-4">
							{/* Main Image/Video */}
							<div className="relative rounded-xl overflow-hidden border border-slate-700">
								{project.video ? (
									<div className="relative pb-[56.25%]">
										<iframe
											src={project.video}
											className="absolute top-0 left-0 w-full h-full"
											allowFullScreen
											title={`${project.title} demo`}
										/>
									</div>
								) : (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-64 object-cover"
									/>
								)}
							</div>

							{/* Gallery */}
							{project.gallery && project.gallery.length > 0 && (
								<div>
									<h4 className="text-lg font-semibold mb-4 text-gray-300">
										Gallery
									</h4>
									<div className="grid grid-cols-3 gap-2">
										{project.gallery.map((img, index) => (
											<div
												key={index}
												className="aspect-square rounded-lg overflow-hidden border border-slate-700 cursor-pointer hover:border-blue-400 transition-colors"
												onClick={() =>
													setSelectedMedia({
														type: "image",
														src: img,
													})
												}
											>
												<img
													src={img}
													alt={`${project.title} gallery ${index + 1}`}
													className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
												/>
											</div>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Info Section */}
						<div className="space-y-6">
							{/* Full Description */}
							<div>
								<h4 className="text-lg font-semibold mb-3 text-gray-300">
									Project Overview
								</h4>
								<div className="space-y-3">
									{renderDescriptionWithBullets(
										project.fullDescription,
									)}
								</div>
							</div>

							{/* Technology Stack */}
							<div>
								<h4 className="text-lg font-semibold mb-3 text-gray-300">
									Technology Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="px-3 py-1.5 bg-blue-400/10 text-blue-400 rounded-lg text-sm border border-blue-400/20"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="flex gap-4 pt-4">
								{project.links.website && (
									<a
										href={project.links.website}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
									>
										<ExternalLink className="w-5 h-5" />
										Live Site
									</a>
								)}
								{project.links.github && (
									<a
										href={project.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold text-white text-center hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
									>
										<Github className="w-5 h-5" />
										Source Code
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
