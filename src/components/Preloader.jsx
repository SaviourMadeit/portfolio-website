import { useEffect, useState } from "react";
import "./Preloader.css";

const STORAGE_KEY = "bixyl-preloader-shown";
const MINIMUM_DISPLAY_MS = 600;
const FADE_DURATION_MS = 500;
const MAXIMUM_DISPLAY_MS = 5000;

const hasShownThisSession = () => {
	try {
		return window.sessionStorage.getItem(STORAGE_KEY) === "true";
	} catch (error) {
		console.warn("Preloader session storage is unavailable.", error);
		return false;
	}
};

const Preloader = () => {
	const [shouldShow] = useState(() => !hasShownThisSession());
	const [isHiding, setIsHiding] = useState(false);
	const [isRemoved, setIsRemoved] = useState(false);

	useEffect(() => {
		if (!shouldShow) return undefined;

		const startedAt = performance.now();
		try {
			window.sessionStorage.setItem(STORAGE_KEY, "true");
		} catch (error) {
			console.warn("Preloader session storage is unavailable.", error);
		}

		let isFinished = false;
		let minimumTimer;
		let removalTimer;
		let safetyTimer;

		const hidePreloader = () => {
			if (isFinished) return;
			isFinished = true;
			window.clearTimeout(minimumTimer);
			window.clearTimeout(safetyTimer);
			setIsHiding(true);
			removalTimer = window.setTimeout(() => {
				setIsRemoved(true);
			}, FADE_DURATION_MS);
		};

		const handleLoad = () => {
			const remainingMinimumTime = Math.max(
				0,
				MINIMUM_DISPLAY_MS - (performance.now() - startedAt),
			);
			minimumTimer = window.setTimeout(hidePreloader, remainingMinimumTime);
		};

		safetyTimer = window.setTimeout(
			hidePreloader,
			MAXIMUM_DISPLAY_MS - FADE_DURATION_MS,
		);

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad, { once: true });
		}

		return () => {
			window.removeEventListener("load", handleLoad);
			window.clearTimeout(minimumTimer);
			window.clearTimeout(removalTimer);
			window.clearTimeout(safetyTimer);
		};
	}, [shouldShow]);

	if (!shouldShow || isRemoved) return null;

	return (
		<div
			className={`site-preloader${isHiding ? " site-preloader--hiding" : ""}`}
			role="status"
			aria-label="Loading Bixyl Lab"
		>
			<picture className="site-preloader__picture">
				<source
					media="(prefers-color-scheme: dark)"
					srcSet="/images/bixyl/bixyl-logo-white-600x300.png 1x, /images/bixyl/bixyl-logo-white-1200x600@2x.png 2x"
				/>
				<img
					className="site-preloader__logo"
					src="/images/bixyl/bixyl-logo-600x300.png"
					srcSet="/images/bixyl/bixyl-logo-600x300.png 1x, /images/bixyl/bixyl-logo-1200x600@2x.png 2x"
					width="240"
					height="120"
					alt="Bixyl Lab IT Consult"
					fetchPriority="high"
				/>
			</picture>
			<span className="site-preloader__progress" aria-hidden="true">
				<span className="site-preloader__progress-fill" />
			</span>
		</div>
	);
};

export default Preloader;
