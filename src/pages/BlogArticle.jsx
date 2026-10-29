import { ArrowLeft } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import LedStrobeGuide from "../sections/LedStrobeGuide";

const BlogArticle = () => {
	const { isDark } = useOutletContext();

	return (
		<div className="pt-28">
			<div className="mx-auto mb-6 max-w-4xl px-4">
				<Link
					to="/blog"
					className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
						isDark
							? "text-cyan-300 hover:text-cyan-200"
							: "text-blue-700 hover:text-blue-600"
					}`}
				>
					<ArrowLeft className="h-4 w-4" />
					Back to all articles
				</Link>
			</div>
			<LedStrobeGuide isDark={isDark} />
		</div>
	);
};

export default BlogArticle;
