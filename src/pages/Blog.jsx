import { useOutletContext } from "react-router-dom";
import TechBlog from "../sections/TechBlog";
import { blogPosts } from "../data";

const Blog = () => {
	const { isDark } = useOutletContext();

	return (
		<div className="pt-24">
			<TechBlog isDark={isDark} blogPosts={blogPosts} />
		</div>
	);
};

export default Blog;
