import { useState } from 'react';

type useFormProps = {
	isAccount ?: boolean | undefined,
    isCreated ?: boolean | undefined,
	isModified ?: boolean | undefined,
	isQuotes ?: boolean | undefined,
	isPricingTier ?: boolean | undefined
}

const handleState = (initialValues: useFormProps) => {

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e: any)=> {
		// console.log(e);
		const { id, value } = e.target;
		setValues({
			...values,
			[id] : value
		});
	};
	return {
		values,
		setValues,
		handleInputChange
	};
};

export default handleState;