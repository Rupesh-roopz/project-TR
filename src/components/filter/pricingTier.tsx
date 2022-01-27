/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-mixed-spaces-and-tabs */

import { Fragment, useMemo, useState } from 'react';

/* eslint-disable react/prop-types */
export const MultipleFilter = (rows:any, filler:any, filterValue:any) => {
	const arr: any[]= [];
	rows.forEach((val: any) => {
		if (filterValue.includes(val.original.pricingTier)) 
			arr.push(val);
	});
	
	return arr;
};
  

  
export function SelectColumnFilter(props : any) {
	console.log(props);
	const { column } = props;
	const { filterValue = [], setFilter, preFilteredRows, id } = column;

	console.log(column);
	const options = useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row: { values: { [x: string]: unknown; }; }) => {
		  options.add(row.values[id]);
		});
		return [...options.values()];
	  }, [id, preFilteredRows]);

	  function setFilteredParams(filterArr:any, val:any, i: number) {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === i ? !item : item
		);

		setCheckedState(updatedCheckedState);
		// if (val === undefined) return undefined;
		if (filterArr.includes(val)) {
		  filterArr = filterArr.filter((n: any) => {
				return n !== val;
		  });
		} else filterArr.push(val);
	
		if (filterArr.length === 0) filterArr = undefined;
		return filterArr;
	}

	const [checkedState, setCheckedState] = useState(
		new Array(options.length).fill(false)
	);
	
	return (
	  <Fragment>
			<div className="block">
		  {options.map((option: any, i) => {
					return (
			  <Fragment key={i}>
							<div className="flex items-center">
				  <input
									type="checkbox"
									id={option}
									name={option}
									value={option}
									checked={checkedState[i]}
									onChange={(e) => {
					  					setFilter(setFilteredParams(filterValue, e.target.value, i));
									}}
				  />
				  <label htmlFor={option}>
									{option}
				  </label>
							</div>
			  </Fragment>
					);
		  })}
			</div>
	  </Fragment>
	);
}
  