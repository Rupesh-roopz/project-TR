import * as React from 'react';
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

// const columns = [];

const MenuDropdown = (props: any) => {
	const {allColumns, columnName, handleMenuClick} = props;

	// console.log(columnName);
	const [open, setOpen] = React.useState(false);
	const [openInner, setOpenInner] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const anchorRefInner = React.useRef<HTMLButtonElement>(null);

	const handleToggle = (columnName : string) => {
		setOpen((prevOpen) => !prevOpen);
		handleMenuClick(columnName);
	};

	const handleToggleInner = () => {
		setOpenInner((prevOpen) => !prevOpen);
	};
  
	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
		anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}
  
		setOpen(false);
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
  
	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	function handleListKeyDownInner(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpenInner(false);
		} else if (event.key === 'Escape') {
			setOpenInner(false);
		}
	}
  
	// return focus to the button when we transitioned from !open -> open
	// const prevOpen = React.useRef(open);
	// React.useEffect(() => {
	// 	if (prevOpen.current === true && open === false) {
	// 	anchorRef.current!.focus();
	// 	}
  
	// 	prevOpen.current = open;
	// }, [open]);
	return (
		<>
			<IconButton
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? 'composition-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={()=>handleToggle(columnName)}
			>
				<KeyboardArrowDownIcon />
			</IconButton>
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
						<Paper sx={{width : '200px'}}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
								>
									<MenuItem sx={{padding : '0px	'}}>
										<Typography sx={{ fontSize : 20, width:'100%' }}>
											<ArrowUpwardIcon />
											Sort Descending
										</Typography>
									</MenuItem>
									<MenuItem divider autoFocus sx={{padding : '0px	'}}>
										<Typography sx={{ fontSize : 20 }}>
											<ArrowDownwardIcon />
											Sort Descending
										</Typography>
									</MenuItem>
									<MenuItem divider autoFocus sx={{padding : '0px	'}}>
										<Typography 
											ref={anchorRefInner}
											id="compositionI-button"
											aria-controls={openInner ? 'composition-menu' : undefined}
											aria-expanded={openInner ? 'true' : undefined}
											aria-haspopup="true"
											onClick={handleToggleInner}
											sx={{ fontSize : 20, width:'100%' }}>
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
														transformOrigin:
														placement === 'right-start' ? 'left top' : 'right bottom',
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
																<MenuItem>
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
									</MenuItem>
									<MenuItem sx={{paddingLeft : '10px'}}>  
										<FormGroup>
											<FormControlLabel control={<Checkbox sx={{padding : '0px'}}/>} label={<Typography sx={{ fontSize : 20 }}>Filter</Typography>} />  
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

export default MenuDropdown;