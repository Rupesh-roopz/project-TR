import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const ReferenceFilter = (props: any) => {
	
	const { column } = props;
	const {setFilter} = column;
	const [text, setText] = useState(column.customFilterValue);
	
	console.log(column.filterCheckbox);
	
	useEffect(() => {
		column.filterCheckbox ? setFilter(column.customFilterValue) :  setFilter('');
	},[column.filterCheckbox, column.customFilterValue]);

	const handleTextChange = (value : any) => {
		column.customFilterValue = value;
		setText(value);
		setFilter(value);
		// value === '' ? column.filterCheckbox = false : column.filterCheckbox = true;
	};

	return (
		<>
			<SearchIcon />
			<input 
				type='text'
				// value ={filterValue || ''}
				value ={text}
				onChange={(e: any) =>handleTextChange(e.target.value)}
				placeholder='Enter Filter Text'
				autoFocus
			/>
		</>
	);
};

export default ReferenceFilter;