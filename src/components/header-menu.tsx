/* eslint-disable no-constant-condition */
import React from 'react';
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
import { Button, ClickAwayListener, Grid, Grow, MenuList, Popper, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ColumnsMenu from './columns-menu';
import FilterMenu from './filter-menu';

const DropdownMenu = (props : any) => {
	const {open, anchorRef,handleClose, handleListKeyDown, allColumns, toggleSortBy, columnName, column } = props;
	console.log(column);
	const handleSortingAsc = () => {
		toggleSortBy(false, false);
	};
	const handleSortingdesc = () => {
		toggleSortBy(true, false);
	};

	return (
		<Popper
			open={open}
			anchorEl={anchorRef.current}
			role={undefined}
			placement="bottom-start"
			transition
			disablePortal
		>
			{({ TransitionProps, placement }) => (
				<Grow
					{...TransitionProps}
					style={{
						transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
					}}
				>
					<Paper sx={{padding : '10px'}}>
						<ClickAwayListener onClickAway={handleClose}>
							<MenuList
								autoFocusItem={open}
								id="composition-menu"
								aria-labelledby="composition-button"
								onKeyDown={handleListKeyDown}
								sx={{padding:'0px'}}
							>
								{
									column.canSort 
										? 
										<MenuItem sx={{padding : '0px	'}} onClick={handleSortingAsc}>
											<Typography sx={{width:'100%' }}>
												<ArrowUpwardIcon />
									Sort Ascending
											</Typography>
										</MenuItem>
										: 
										<MenuItem disabled sx={{padding : '0px	'}} onClick={handleSortingAsc}>
											<Typography sx={{width:'100%' }}>
												<ArrowUpwardIcon />
											Sort Ascending
											</Typography>
										</MenuItem>
								}
								{
									column.canSort  
										? 
										<MenuItem  divider autoFocus sx={{padding : '0px	'}} onClick={handleSortingdesc}>
											<Typography sx={{width:'100%' }}>

												<ArrowDownwardIcon />
											Sort Descending
											</Typography>
										</MenuItem>
										: 
										<MenuItem disabled divider autoFocus sx={{padding : '0px	'}} onClick={handleSortingdesc}>
											<Typography sx={{width:'100%' }}>
												<ArrowDownwardIcon />
											Sort Descending
											</Typography>
										</MenuItem>

								}
								<MenuItem divider autoFocus sx={{padding : '0px	'}}>
									<ColumnsMenu allColumns= {allColumns} />
								</MenuItem>
								<MenuItem sx={{paddingLeft : '10px'}}>  
									<FilterMenu column={column}/>
								</MenuItem>
							</MenuList>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	);
};

export default DropdownMenu;