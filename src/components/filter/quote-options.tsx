import React, { useMemo, useState } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const QuoteFilter = (props : any) => {
	const { column, setFilterValue } = props;
	const { preFilteredRows, setFilter, filterTypes} = column;
	
	const [ equal, setEqual] = useState('');
	const [ greaterthan, setgreaterthan] = useState('');
	const [ lessthan, setlessthan] = useState('');
	console.log(props);
	// const quoteFilterTypes = React.useMemo(
	// 	() => ({
	// 		greater: (rows:any, filterValue:any) => {
	// 			console.log(rows, filterValue);
	// 			const arr: any[]= [];
	// 			rows.forEach((val: any) => {
	// 				if(val.original.quotes >= filterValue){
	// 					arr.push(val);
	// 					console.log(val.values.quotes);	
	// 				}
	// 			});
	// 			console.log(arr);
	// 			return arr;
	// 		},
	// 		lesser : (rows:any, filterValue:any) => {
	// 			const arr: any[]= [];
	// 			rows.forEach((val: any) => {
	// 				if(val.original.quotes <= filterValue){
	// 					arr.push(val);
	// 					console.log(val.values.quotes);	
	// 				}	
	// 			});
	// 			console.log(arr);
	// 			return arr;
	// 		},
	// 		equal : (rows:any, filterValue:any) => {
	// 			const arr: any[]= [];
	// 			rows.forEach((val: any) => {
	// 				if(val.original.quotes == filterValue){
	// 					arr.push(val);
	// 					console.log(val.values.quotes);	
	// 				}	
	// 			});
	// 			console.log(arr);
	// 			return arr;
	// 		}
	// 	}),
	// 	[]);
	return (
		<div>
			<div>
				<ArrowBackIosIcon /> 
				<input
					value={equal}
					type="number"
					onChange={(e) => {
						setEqual(e.target.value);
						setFilter(e.target.value);
						column.filter = 'lesser';
						// filterTypes.lesser(preFilteredRows, parseInt(e.target.value, 10));
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
						setFilter(e.target.value);
						column.filter = 'greater';
						// filterTypes.greater(preFilteredRows, parseInt(e.target.value, 10));
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
						setFilter(e.target.value);
						column.filter = 'equal';
						// filterTypes.equal(preFilteredRows, parseInt(e.target.value, 10));
					}}
				/>
			</div>

		</div>
	);
};

export default QuoteFilter;