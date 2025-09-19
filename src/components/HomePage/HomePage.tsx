import { AboutMe } from "../AboutMe";
import { ContactMe } from "../ContactMe";
import { Header } from "../Header";
import { NavBarDesktop } from "../NavBarDesktop";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { ServicesOffered } from "../ServicesOffered";
import { Testimonials } from "../Testimonials";

export const HomePage = () => (
	<>
		<Header />
		<NavBarDesktop />
		<PageWrapper>
			<ServicesOffered />
			<AboutMe />
			<Testimonials />
			<ContactMe />
		</PageWrapper>
	</>
);
