import { type ObjectSchema, object, string } from "yup";

const textRegExp = /^[-'\p{L} _@.,]+$/u;

const defaultFormRules = () => {
	return {
		name: string().required().min(1).max(35).matches(textRegExp, "pls match"),
		email: string()
			.required()
			.matches(
				/^\w+([+]?([.-]?\w+))*@\w+([.-]?\w+)*(\.\w{2,})+$/,
				"sort it out",
			),
		message: string()
			.required()
			.min(1)
			.max(500)
			.matches(textRegExp, "pls match"),
	};
};

export const contactMeValidationSchema = (): ObjectSchema<any> => {
	const defaultRules = defaultFormRules();
	return object().shape({ ...defaultRules });
};
