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

	const options = useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row: { values: { [x: string]: unknown; }; }) => {
		  options.add(row.values[id]);
		});
		return [...options.values()];
	  }, [id, preFilteredRows]);

	  function setFilteredParams(filterArr:any, val:any) {
		console.log(filterArr);
		console.log(val);
		// if (val === undefined) return undefined;
		if (filterArr.includes(val)) {
		  filterArr = filterArr.filter((n: any) => {
				return n !== val;
		  });
		} else filterArr.push(val);
	
		if (filterArr.length === 0) filterArr = undefined;
		return filterArr;
	}

	return (
	  <Fragment>
			<div className="block">
		  <span className="block capitalize mb-4">{id}</span>
		  {options.map((option: any, i) => {
					return (
			  <Fragment key={i}>
							<div className="flex items-center">
				  <input
									type="checkbox"
									className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
									id={option}
									name={option}
									value={option}
									onChange={(e) => {
					  					setFilter(setFilteredParams(filterValue, e.target.value));
									}}
				  ></input>
				  <label
									htmlFor={option}
									className="ml-1.5 font-medium text-gray-700"
				  >
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
  