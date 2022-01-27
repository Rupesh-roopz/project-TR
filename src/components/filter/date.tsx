import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button, ClickAwayListener, FormLabel, Grid, Grow, MenuList, Popper, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
// import ReferenceFilter from './filter/text';
import KeyDatePickerContainer from '../calender';
import DateFnsUtils from '@date-io/date-fns';
// import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MuiPickersUtilsProvider } from '@material-ui/pickers';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const DateFilter = (props: any) => {
	const { column, setFilterValue } = props;
	const { preFilteredRows, setFilter, filterValue} = column;

	const [ checked, setChecked ] = useState(true);
	const [date, changeDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());

	const [value, setValue] = useState('');

	const handleBefore = (e: any) => {
		setValue(e.target.value);
		console.log(e.target.value);
	};
	const handleDateChange = (date: any) => {
		setStartDate(date); 
		console.log(value);
		value === 'before' ? column.filter = 'before' : '';
		value === 'after' ? column.filter = 'after' : '';
		value === 'on' ? column.filter = 'on' : '';

		setFilter(date);
	};

	const [openInner, setOpenInner] = React.useState(false);
	const anchorRefInner = React.useRef<HTMLButtonElement>(null);
	
	const handleToggleInner = () => {
		setOpenInner((prevOpen) => !prevOpen);
	};

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
			<FormGroup sx={{width:'100%'}}>
				<FormControlLabel 
					control={<Checkbox  checked={checked} value='before' onChange={(e)=>handleBefore(e)} sx={{padding : '0px'}}/>} 
					label={
						<Typography 
							ref={anchorRefInner}
							id="compositionI-button"
							aria-controls={openInner ? 'composition-menu' : undefined}
							aria-expanded={openInner ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleToggleInner}
							sx={{ width:'100%' }}
						>
							Before</Typography>} 
				/>  
				<FormControlLabel 
					control={<Checkbox  checked={checked} value='after' onChange={(e)=>handleBefore(e)} sx={{padding : '0px'}}/>} 
					label={
						<Typography 
							ref={anchorRefInner}
							id="compositionI-button"
							aria-controls={openInner ? 'composition-menu' : undefined}
							aria-expanded={openInner ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleToggleInner}
							sx={{ width:'100%' }}
						>
							After</Typography>} 
				/> 
				<FormControlLabel 
					control={<Checkbox  checked={checked} value='on' onChange={(e)=>handleBefore(e)} sx={{padding : '0px'}}/>} 
					label={
						<Typography 
							ref={anchorRefInner}
							id="compositionI-button"
							aria-controls={openInner ? 'composition-menu' : undefined}
							aria-expanded={openInner ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleToggleInner}
							sx={{ width:'100%' }}
						>
							On</Typography>} 
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
							<ClickAwayListener onClickAway={handleCloseInner}>
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
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);

};

export default DateFilter;