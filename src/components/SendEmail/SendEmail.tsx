import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { contactMeValidationSchema } from "../../utils/validation/contactMeFormValidation";
import styles from "./SendEmail.module.css";

const SERVICE_ID = "official_email";
const TEMPLATE_ID = "template_j13xxmn";

type HandleOnSubmitProps = {
	name: string;
	email: string;
	message: string;
};

export const SendEmail = () => {
	const handleOnSubmit = async (values: HandleOnSubmitProps) => {
		try {
			await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					title: "Email from website",
					name: values.name,
					message: values.message,
					email: values.email,
				},
				{ publicKey: "CDzF8PqEysCmOXSsJ" },
			);
			formik.resetForm();
			console.log("SUCCESS");
		} catch (error) {
			console.log(error);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		onSubmit: async (values) => {
			console.log("values", values);

			try {
				await emailjs.send(
					SERVICE_ID,
					TEMPLATE_ID,
					{
						title: "Email from website",
						name: values.name,
						message: values.message,
						email: values.email,
					},
					{ publicKey: "CDzF8PqEysCmOXSsJ" },
				);
				formik.resetForm();
				console.log("SUCCESS");
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: contactMeValidationSchema(),
	});

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				message: "",
			}}
			onSubmit={handleOnSubmit}
			validationSchema={contactMeValidationSchema()}
		>
			<Form>
				<section className={styles.sectionWrapper}>
					<label className={styles.label} htmlFor="name">
						Name
					</label>
					<Field className={styles.fieldInput} name="name" type="text" />
					<ErrorMessage
						className={styles.validationError}
						component="p"
						name="name"
					/>

					<label className={styles.label} htmlFor="email">
						Email Address
					</label>
					<Field className={styles.fieldInput} name="email" type="email" />
					<ErrorMessage
						className={styles.validationError}
						component="p"
						name="email"
					/>

					<label className={styles.label} htmlFor="message">
						Message
					</label>
					<Field
						className={styles.areaInput}
						name="message"
						type="text"
						as="textarea"
					/>
					<ErrorMessage
						className={styles.validationError}
						component="p"
						name="message"
					/>
					<div className={styles.paddingWrapper}>
						<button className={styles.sendButton} type="submit" value="Send">
							Submit
						</button>
					</div>
				</section>
			</Form>
		</Formik>
	);
};
