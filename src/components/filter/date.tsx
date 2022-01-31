import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, ClickAwayListener, FormLabel, Grid, Grow, MenuList, Popper, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = (props: any) => {
	const { column, setFilterValue } = props;
	const { preFilteredRows, setFilter, filterValue} = column;

	//setting filter state for before, after, on
	const [beforeCheckBox, setBeforeCheckBox] = useState(false);
	const [afterCheckBox, setAfterCheckBox] = useState(false);
	const [onCheckBox, setOnCheckBox] = useState(false);

	//handling filter check
	const handleBeforeCheckBox = (e : any) => {
		console.log(e);
		setBeforeCheckBox(e.target.checked);
		e.target.checked ? column.filterCheckbox = true : column.filterCheckbox = false;  
		console.log(column.filterCheckbox);
	};
	const [ checked, setChecked ] = useState(true);
	const [date, changeDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());

	const [value, setValue] = useState('');

	// checked ? column.filterCheckbox = true : column.filterCheckbox = false;
	// useEffect(() => {
	// 	column.filterCheckbox && column.customFilterValue !== '' ? setFilter(column.customFilterValue) :  setFilter('');
	// },[column.filterCheckbox, column.customFilterValue]);

	const handleToggleInner = (e: any) => {
		setOpenInner(true);
		setValue(e.target.value);
		setBeforeCheckBox(prevState => !prevState);
		setAfterCheckBox(false);
		setOnCheckBox(false);
	};

	const handleAfterCheckbox = (e: any) => {
		setOpenInner(true);
		setValue(e.target.value);
		setAfterCheckBox(prevState => !prevState);
		setBeforeCheckBox(false);
		setOnCheckBox(false);
	};

	const handleOncheckbox = (e: any) => {
		setOpenInner(true);
		setValue(e.target.value);
		setOnCheckBox(prevState => !prevState);
		setAfterCheckBox(false);
		setBeforeCheckBox(false);
	};

	const handleDateChange = (date: any) => {
		setStartDate(date); 
		column.customFilterValue = date;
		value === 'before' ? (column.filter = 'before' , setBeforeCheckBox(true)): '';
		value === 'after' ? column.filter = 'after' : '';
		value === 'on' ? column.filter = 'on' : '';
		setFilter(date);
	};

	const [openInner, setOpenInner] = React.useState(false);
	const anchorRefInner = React.useRef<HTMLButtonElement>(null);

	const handleCloseInner = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRefInner.current &&
			anchorRefInner.current.contains(event.target as HTMLElement)
		) {
			return;
		}
		setOpenInner(false);
	};

	function handleListKeyDownInner(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpenInner(false);
		} else if (event.key === 'Escape') {
			setOpenInner(false);
		}
	}
	return (
		<>
			<ClickAwayListener onClickAway={handleCloseInner}>
				<div>
					<FormGroup sx={{width:'100%'}} >
						<FormControlLabel 
							ref={anchorRefInner}
							sx={{width:'100%'}}
							control={<Checkbox  
								checked={beforeCheckBox} 
								sx={{padding : '0px'}}
								value='before'
								aria-controls={openInner ? 'composition-menu' : undefined}
								aria-expanded={openInner ? 'true' : undefined}
								aria-haspopup="true"
								onClick={(e)=>handleToggleInner(e)}
						
							/>} 
							label="Before"
					
						/>  
						<FormControlLabel 
							ref={anchorRefInner}
							sx={{width:'100%'}}
							control={<Checkbox  
								checked={afterCheckBox} 
								sx={{padding : '0px'}}
								aria-controls={openInner ? 'composition-menu' : undefined}
								aria-expanded={openInner ? 'true' : undefined}
								aria-haspopup="true"
								onClick={(e)=>handleAfterCheckbox(e)}
								value='after'
						
							/>} 
							label="After"
					
						/>  
						<FormControlLabel 
							ref={anchorRefInner}
							sx={{width:'100%'}}
							control={<Checkbox  
								checked={onCheckBox} 
								sx={{padding : '0px'}}
								aria-controls={openInner ? 'composition-menu' : undefined}
								aria-expanded={openInner ? 'true' : undefined}
								aria-haspopup="true"
								onClick={(e)=>handleOncheckbox(e)}
								value='on'
							/>} 
							label="On"
					
						/>  
				
					</FormGroup>
					<Popper
						open={openInner}
						anchorEl={anchorRefInner.current}
						// role={undefined}
						placement="right"
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: placement === 'right-start' ? 'left top' : 'right bottom',
								}}
							>
								<Paper>
							
									<MenuList
										autoFocusItem={openInner}
										id="composition-menu"
										aria-labelledby="composition-button"
										onKeyDown={handleListKeyDownInner}
									>
										<MenuItem sx={{padding : 0}}>
											<DatePicker
												selected={startDate}
												onChange={(date: any) =>{ handleDateChange(date);}}
												peekNextMonth
												showMonthDropdown
												showYearDropdown
												dropdownMode="select"
												inline
											/>
										</MenuItem>
									</MenuList>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</ClickAwayListener>
		</>
	);

};

export default DateFilter;