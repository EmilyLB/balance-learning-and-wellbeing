import { type AnyObject, type ObjectSchema, object, string } from "yup";

const textRegExp = /^[-'\p{L} _@.,]+$/u;

const defaultFormRules = () => {
	return {
		name: string()
			.required("This is a requried field")
			.min(1)
			.max(35)
			.matches(textRegExp, "Please enter letters only"),
		email: string()
			.required("This is a requried field")
			.matches(
				/^\w+([+]?([.-]?\w+))*@\w+([.-]?\w+)*(\.\w{2,})+$/,
				"Please enter a valid email address",
			),
		message: string().required("This is a requried field").min(1).max(500),
	};
};

type FormRules = ObjectSchema<
	{
		name: string;
		email: string;
		message: string;
	},
	AnyObject,
	{
		name: undefined;
		email: undefined;
		message: undefined;
	},
	""
>;

export const contactMeValidationSchema = (): FormRules => {
	const defaultRules = defaultFormRules();
	return object().shape({ ...defaultRules });
};
