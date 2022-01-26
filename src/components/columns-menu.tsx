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

const ColumnsMenu = (props : any) => {
	const {allColumns, columnName, handleMenuClick} = props;
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
			<Typography 
				ref={anchorRefInner}
				id="compositionI-button"
				aria-controls={openInner ? 'composition-menu' : undefined}
				aria-expanded={openInner ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleToggleInner}
				sx={{ width:'100%' }}>
				<ViewColumnOutlinedIcon />
												Columns
				<KeyboardArrowRightOutlinedIcon />
			</Typography>
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
								<MenuList
									autoFocusItem={openInner}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDownInner}
								>
									<MenuItem sx={{padding : 0}}>
										<FormGroup>{
											allColumns.map((column: any) => (
												<div  key={column.id} >
													<FormControlLabel 
														control={<Checkbox sx={{padding : '0px'}} 
															{...column.getToggleHiddenProps()} 
														/>} label={column.id} />
												</div>
											))}
										</FormGroup>	
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

export default ColumnsMenu;