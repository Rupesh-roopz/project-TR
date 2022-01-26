import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const ReferenceFilter = (props: any) => {
	
	const { column } = props;
	const { filterValue, setFilter} = column;

	return (
		<>
			<SearchIcon />
			<input 
				type='text'
				value ={filterValue || ''}
				onChange={(e) => setFilter(e.target.value)}
				placeholder='Enter Filter Text'
				autoFocus
			/>
		</>
	);
};

export default ReferenceFilter;