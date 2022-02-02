/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Fragment, useEffect, useMemo, useState } from 'react';

export function CheckboxFilter(props : any) {
	const { column } = props;
	const { filterValue = [], setFilter, preFilteredRows, id } = column;
	
	const options = useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row: { values: { [x: string]: unknown; }; }) => {
		  options.add(row.values[id]);
		});
		return [...options.values()];
	  }, [id, preFilteredRows]);

	  console.log(filterValue);
	  useEffect(() => {
		column.filterCheckbox ? null : (
			setFilter(undefined),
			setCheckedState(new Array(options.length).fill(false))
		);
	},[column.filterCheckbox,options]);

	  function setFilteredParams(filterArr:any, val:any, i: number) {
		  
		column.filterCheckbox = true;
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
	
	console.log(checkedState.map(i => {return i;}));
	// setCheckedState([false, false, false]);
	console.log(checkedState[1]);

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
										column.filterType === 'multiple' ? column.filter = 'multipleFilter' : null;
										column.filterCheckbox ? setFilter(setFilteredParams(filterValue, e.target.value, i)) : setFilter([]);
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
  