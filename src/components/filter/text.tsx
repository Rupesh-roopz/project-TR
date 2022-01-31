import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const TextFilter = (props: any) => {
	const { column } = props;
	const {setFilter, filterValue} = column;
	
	useEffect(() => {
		column.filterCheckbox ? setFilter(filterValue) :  setFilter('');
	},[column.filterCheckbox, column.customFilterValue]);

	const handleTextChange = (value : any) => {
		column.customFilterValue = value;
		setFilter(value);
	};

	return (
		<>
			<SearchIcon />
			<input 
				type='text'
				value ={filterValue || ''}
				onChange={(e: any) =>handleTextChange(e.target.value)}
				placeholder='Enter Filter Text'
				autoFocus
			/>
		</>
	);
};

export default TextFilter;