import { SectionHeader } from "../SectionHeader";
import { SendEmail } from "../SendEmail";

export const ContactMe = () => {
	return (
		<section>
			<SectionHeader headerText="Contact Me" />
			<SendEmail />
		</section>
	);
};
