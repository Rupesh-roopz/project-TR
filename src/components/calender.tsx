import React, { useState } from 'react';
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
const Calender = (props: any) => {
	const { column } = props;
	const [ checked, setChecked ] = useState(false);
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
		event.stopPropagation();
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
					control={<Checkbox  checked={checked} sx={{padding : '0px'}}/>} 
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
                        Filter</Typography>} 
				/>  
			</FormGroup>
			<Popper
				open={openInner}
				anchorEl={anchorRefInner.current}
				// role={undefined}
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
							<ClickAwayListener onClickAway={handleCloseInner}>
								<h1>Rupesh</h1>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
};

export default Calender;