import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SortingRows = (props : any) => {
	const { order} = props;
	console.log(order);

	return (
		<>
			{ 
				order.isSorted
					? order.isSortedDesc
						?  <ArrowDownwardIcon/>
						: <ArrowUpwardIcon/>
					: ''
			}
		</>
	);
};

export default SortingRows;