import { useEffect, useState } from "react";

const LazyImage = ({ src, alt, className }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const [imageRef, setImageRef] = useState(null);

	useEffect(() => {
		if (!imageRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setImageSrc(src);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		observer.observe(imageRef);
		return () => observer.disconnect();
	}, [imageRef, src]);

	return (
		<img
			ref={setImageRef}
			src={
				imageSrc ||
				'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3C/svg%3E'
			}
			alt={alt}
			className={className}
		/>
	);
};

export default LazyImage;
