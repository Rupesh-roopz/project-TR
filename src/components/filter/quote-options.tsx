import React, { useEffect, useMemo, useState } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const QuoteFilter = (props : any) => {
	const { column, setFilterValue } = props;
	const { preFilteredRows, setFilter, filterTypes, filterValue} = column;
	
	const [ equal, setEqual] = useState('');
	const [ greaterthan, setgreaterthan] = useState('');
	const [ lessthan, setlessthan] = useState('');

	console.log(column.customFilterValue);
	console.log(column.filterCheckbox);

	// useEffect(() => {
	// 	column.filterCheckbox ? setFilter(filterValue) :  setFilter('');
	// },[column.filterCheckbox, column.customFilterValue]);
	
	// let column.customFilterValue = filterValue;
	return (
		<div>
			<div>
				<ArrowBackIosIcon /> 
				<input
					value={equal}
					type="number"
					onChange={(e) => {
						setEqual(e.target.value);
						setgreaterthan('');
						setlessthan('');
						column.customFilterValue = e.target.value;
						setFilter(e.target.value);
						column.filter = 'lesser';
					}}
				/>
			</div>
			<div>
				<ArrowForwardIosIcon /> 
				<input
					value={greaterthan}
					type="number"
					onChange={(e) => {
						setgreaterthan(e.target.value);
						setlessthan('');
						setEqual('');
						column.customFilterValue = e.target.value;
						setFilter(e.target.value);
						column.filter = 'greater';
					}}
				/>
			</div>
			<div>
				<DragHandleIcon /> 
				<input
					value={lessthan}
					type="number"
					onChange={(e) => {
						setlessthan(e.target.value);
						setgreaterthan('');
						setEqual('');
						column.customFilterValue = e.target.value;	
						setFilter(e.target.value);
						column.filter = 'equal';
					}}
				/>
			</div>

		</div>
	);
};

export default QuoteFilter;