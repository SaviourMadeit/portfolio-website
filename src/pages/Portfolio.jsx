import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import GalleryModal from "../components/ui/GalleryModal";
import MediaModal from "../components/ui/MediaModal";
import ProjectModal from "../components/ui/ProjectModal";
import Certifications from "../sections/Certifications";
import CurrentlyBuilding from "../sections/CurrentlyBuilding";
import Impact from "../sections/Impact";
import Projects from "../sections/Projects";
import { certifications, impactActivities, projects } from "../data";

const Portfolio = () => {
	const { isDark } = useOutletContext();
	const [selectedMedia, setSelectedMedia] = useState(null);
	const [expandedProject, setExpandedProject] = useState(null);
	const [expandedGallery, setExpandedGallery] = useState(null);
	const [galleryIndex, setGalleryIndex] = useState(0);

	return (
		<>
			<div className="pt-32 pb-8 px-4 text-center">
				<h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
					Portfolio
				</h1>
				<p
					className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
				>
					Projects, builds, certifications, and the community work
					I'm part of
				</p>
			</div>

			{expandedProject && (
				<ProjectModal
					project={expandedProject}
					onClose={() => setExpandedProject(null)}
					setSelectedMedia={setSelectedMedia}
				/>
			)}
			{selectedMedia && (
				<MediaModal
					media={selectedMedia}
					onClose={() => setSelectedMedia(null)}
				/>
			)}
			{expandedGallery && (
				<GalleryModal
					gallery={expandedGallery.gallery}
					title={expandedGallery.title}
					onClose={() => setExpandedGallery(null)}
					galleryIndex={galleryIndex}
					setGalleryIndex={setGalleryIndex}
				/>
			)}

			<Projects
				isDark={isDark}
				projects={projects}
				setExpandedProject={setExpandedProject}
			/>

			<CurrentlyBuilding isDark={isDark} />

			<Certifications isDark={isDark} certifications={certifications} />

			<Impact
				isDark={isDark}
				impactActivities={impactActivities}
				setGalleryIndex={setGalleryIndex}
				setExpandedGallery={setExpandedGallery}
			/>
		</>
	);
};

export default Portfolio;
