import React from 'react';
import Calender from '../calender';

const DateFilter = () => {
	return (
		<div>
			<div>
				<input type="checkbox" id="horns" name="beforeDate" />
				<label htmlFor="beforeDate">Before</label>
			</div> 
		</div>
	);
};

export default DateFilter;