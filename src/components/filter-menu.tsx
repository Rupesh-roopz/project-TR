import React, { Fragment, useEffect, useState } from 'react';
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
import ReferenceFilter from './filter/text';
// import PricingTierFilter from './filter/pricingTier';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FilterMenu = (props : any) => {
	const { column } = props;
	const [ checked, setChecked ] = useState(column.filterCheckbox );
	const [openInner, setOpenInner] = React.useState(false);
	const anchorRefInner = React.useRef<HTMLButtonElement>(null);

	checked ? column.filterCheckbox = true : column.filterCheckbox = false;

	const handleToggleInner = (e: any) => {
		setOpenInner(true);
		column.customFilterValue !== '' ? setChecked((prevState: boolean) => !prevState) :setChecked(false);
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
		event.stopPropagation();
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpenInner(false);
		} else if (event.key === 'Escape') {
			setOpenInner(false);
		}
	}
	return (
		<Fragment>
			<ClickAwayListener onClickAway={handleCloseInner}>
				<div>
					<FormGroup sx={{width:'100%'}} >
						<FormControlLabel 
							ref={anchorRefInner}
							sx={{width:'100%'}}
							control={<Checkbox  
								checked={checked} 
								sx={{padding : '0px'}}
								aria-controls={openInner ? 'composition-menu' : undefined}
								aria-expanded={openInner ? 'true' : undefined}
								aria-haspopup="true"
								onClick={(e)=>handleToggleInner(e)}
						
							/>} 
							label="Filter"
					
						/>  
					</FormGroup>
					{
						column.canFilter 
							? <Popper
								open={openInner}
								anchorEl={anchorRefInner.current}
								placement="right-start"
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
												<MenuItem onClick={()=>{setChecked(true);}}>
													<div>
														{
															column.canFilter ? column.render('Filter') : null
														}
													</div>
										
												</MenuItem>
											</MenuList>
									
										</Paper>
									</Grow>
								)}
							</Popper>
							: null
					}
				</div>
			</ClickAwayListener>
		</Fragment>
	);
};

export default FilterMenu;