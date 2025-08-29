import { AboutMe } from "../AboutMe";
import { Header } from "../Header";
import { NavBarDesktop } from "../NavBarDesktop";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { SendEmail } from "../SendEmail";
import { ServicesOffered } from "../ServicesOffered";

export const HomePage = () => (
	<>
		<Header />
		<NavBarDesktop />
		<PageWrapper>
			<ServicesOffered />
			<AboutMe />
			<h2>Contact Me</h2>
			<SendEmail />
		</PageWrapper>
	</>
);
