import { useOutletContext } from "react-router-dom";
import Services from "../sections/Services";
import { services } from "../data";

const ServicesPage = () => {
	const { isDark } = useOutletContext();

	return (
		<div className="pt-24">
			<Services isDark={isDark} services={services} />
		</div>
	);
};

export default ServicesPage;
