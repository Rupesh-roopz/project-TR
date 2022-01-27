import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSortBy } from 'react-table';

const ReferenceFilter = (props: any) => {
	
	const { column } = props;
	const { filterValue, setFilter} = column;
	const [text, setText] = useState('');
	

	useEffect(() => {
		console.log(column.isFilterChecked);
		column.isFilterChecked ? setFilter(text) :  setFilter('');
	},[column.isFilterChecked]);

	const handleTextChange = (value : any) => {
		setText(value);
		setFilter(value);
	};

	return (
		<>
			<SearchIcon />
			<input 
				type='text'
				// value ={filterValue || ''}
				value ={text}
				onChange={(e: any) =>handleTextChange(e.target.value)}
				// onChange={(e) => !column.disableFilters ? setFilter(e.target.value) : null}
				// onChange = {e => setFilter(e.target.value)}
				placeholder='Enter Filter Text'
				autoFocus
			/>
		</>
	);
};

export default ReferenceFilter;