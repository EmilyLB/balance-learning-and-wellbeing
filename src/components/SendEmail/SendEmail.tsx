import emailjs from "@emailjs/browser";
import { Form, Formik, useFormik } from "formik";
import { contactMeValidationSchema } from "../../utils/validation/contactMeFormValidation";
import styles from "./SendEmail.module.css";

const SERVICE_ID = "official_email";
const TEMPLATE_ID = "template_j13xxmn";

export const SendEmail = () => {
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
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<section className={styles.sectionWrapper}>
				<label className={styles.label} htmlFor="name">
					Name
				</label>
				<input
					className={styles.fieldInput}
					id="name"
					type="text"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>

				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<input
					className={styles.fieldInput}
					id="email"
					type="email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<label className={styles.label} htmlFor="message">
					Message
				</label>
				<textarea
					className={styles.areaInput}
					id="message"
					name="message"
					onChange={formik.handleChange}
					value={formik.values.message}
				/>
				<div className={styles.paddingWrapper}>
					<button className={styles.sendButton} type="submit" value="Send">
						Submit
					</button>
				</div>
			</section>
		</form>
	);
};
