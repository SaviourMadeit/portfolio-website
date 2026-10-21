import { useEffect, useRef, useState } from "react";
import "./HeroSlider.css";
import storefrontImage from "../assets/hero/bixyl-storefront-optimized.webp";
import workshopImage from "../assets/hero/hero-workshop.webp";
import itInfrastructureImage from "../assets/hero/it-support1.webp";
import securityImage from "../assets/hero/security.webp";
import technicalSupportImage from "../assets/hero/tech-support-service.webp";

const slides = [
	{ src: workshopImage, alt: "Bixyl Lab electronics workshop" },
	{ src: itInfrastructureImage, alt: "IT specialist configuring business network infrastructure" },
	{ src: securityImage, alt: "Technician installing a CCTV security camera" },
	{
		src: technicalSupportImage,
		alt: "Technical support specialist working at an electronics bench",
	},
	{
		src: storefrontImage,
		alt: "Bixyl Lab storefront",
	},
];

const HeroSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	);
	const touchStartX = useRef(null);

	useEffect(() => {
		const motionPreference = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		const updateMotionPreference = () =>
			setPrefersReducedMotion(motionPreference.matches);

		motionPreference.addEventListener("change", updateMotionPreference);
		return () =>
			motionPreference.removeEventListener("change", updateMotionPreference);
	}, []);

	useEffect(() => {
		if (isPaused || prefersReducedMotion || slides.length < 2) return undefined;

		const intervalId = window.setInterval(() => {
			setActiveSlide((current) => (current + 1) % slides.length);
		}, 5500);

		return () => window.clearInterval(intervalId);
	}, [isPaused, prefersReducedMotion]);

	const showSlide = (index) => {
		setActiveSlide((index + slides.length) % slides.length);
	};

	const handleTouchStart = (event) => {
		touchStartX.current = event.changedTouches[0].clientX;
	};

	const handleTouchEnd = (event) => {
		if (touchStartX.current === null) return;
		const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
		touchStartX.current = null;

		if (Math.abs(swipeDistance) < 50) return;
		showSlide(activeSlide + (swipeDistance < 0 ? 1 : -1));
	};

	return (
		<div
			className="hero-slider"
			role="group"
			aria-label="Hero background images"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocus={() => setIsPaused(true)}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setIsPaused(false);
				}
			}}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{slides.map((slide, index) => (
				<img
					key={`${slide.src}-${index}`}
					className={`hero-slider__image${index === activeSlide ? " hero-slider__image--active" : ""}`}
					src={slide.src}
					alt={slide.alt}
					aria-hidden={index !== activeSlide}
					loading={index === 0 ? "eager" : "lazy"}
					fetchPriority={index === 0 ? "high" : "auto"}
				/>
			))}
			<div className="hero-slider__scrim" aria-hidden="true" />
			<div
				className="hero-slider__dots"
				role="group"
				aria-label="Choose hero image"
			>
				{slides.map((slide, index) => (
					<button
						key={`${slide.alt}-${index}`}
						type="button"
						className={`hero-slider__dot${index === activeSlide ? " hero-slider__dot--active" : ""}`}
						aria-label={`Show image ${index + 1} of ${slides.length}`}
						aria-pressed={index === activeSlide}
						onClick={() => showSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSlider;
