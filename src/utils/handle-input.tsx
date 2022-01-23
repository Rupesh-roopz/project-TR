import { useState } from 'react';

type useFormProps = {
	account ?: boolean | undefined,
    created ?: boolean | undefined,
	modified ?: boolean | undefined,
	quotes ?: boolean | undefined,
	pricingTier ?: boolean | undefined
}

const handleState = (initialValues: useFormProps) => {

	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e: any)=> {
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