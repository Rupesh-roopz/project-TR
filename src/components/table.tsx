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
import { Button, Grid, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

function createData(
	account: string,
	created: string,	
	modified: string,
	quotes: number,
	pricingTags: string,
) {
	return { account, created, modified, quotes, pricingTags };
}

const rows = [
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 24, 'Tier 3'),
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 25, 'Tier 3'),
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 22, 'Tier 3'),
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 21, 'Tier 3'),
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 26, 'Tier 3'),
	createData('AspireTest', '12 Dec 21', '12 Dec 21', 44, 'Tier 3'),
];

export default function TableDataGrid() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const label = { inputProps : { 'aria-label' : 'Checkbox demo' } };

	const open = Boolean(anchorEl);
	const handleClick = (event :  React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [anchorColumn, setAnchorColumn] = React.useState<null | HTMLElement>(null);
	const openAnchorColumn = Boolean(anchorColumn);
	const handleClickAnchorColumn = (event :  React.MouseEvent<HTMLButtonElement>) => {
		console.log(event);
		setAnchorColumn(event.currentTarget);
	};
	const handleCloseAnchorColumn = () => {
		setAnchorColumn(null);
	};
  

	return (
		<TableContainer component={Paper} sx={{ width : '75%' }} >
			<Table  size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell sx={{ borderRight : '1px solid black', width : '30%' }}>
							<Typography sx={{ fontSize : 20 }}>
              Account
								<ArrowDownwardIcon sx={{ fontSize : 20 }}/>
							</Typography>
                
						</TableCell>
						<TableCell align="center" sx={{ borderRight : '1px solid black',width : '10%' }}>
							<Typography sx={{ fontSize : 20 }}>
                Created
								<IconButton
									id="basic-button"
									aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClick}
								>
									<KeyboardArrowDownIcon />
								</IconButton>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										'aria-labelledby' : 'basic-button',
									}}
								>
									<MenuItem>
										<Typography sx={{ fontSize : 20 }}>
											<ArrowUpwardIcon />
                              Sort Descending
										</Typography>
									</MenuItem>
									<MenuItem divider autoFocus>
										<Typography sx={{ fontSize : 20 }}>
											<ArrowDownwardIcon />
                              Sort Descending
										</Typography>

									</MenuItem>
                
									<MenuItem divider>
										<ButtonBase
											id="basic-button"
											aria-controls={openAnchorColumn ? 'basic-menu' : undefined}
											aria-haspopup="true"
											aria-expanded={openAnchorColumn ? 'true' : undefined}
											onClick={handleClickAnchorColumn}
											// sx={{backgroundColor: 'pink'}}
										>
											<Typography sx={{ fontSize : 20 }}>
												<ViewColumnOutlinedIcon />
                                    Columns
												<KeyboardArrowRightOutlinedIcon />
											</Typography>
                            
										</ButtonBase>
										<Menu
											id="basic-menu"
											anchorEl={anchorColumn}
											open={openAnchorColumn}
											onClose={handleCloseAnchorColumn}
											MenuListProps={{
												'aria-labelledby' : 'basic-button',
											}}
											anchorOrigin={{
												vertical : 'top',
												horizontal : 'right',
											}}
											transformOrigin={{
												vertical : 'top',
												horizontal : 'left',
											}}
										>
											<MenuItem>
												<FormGroup>
													<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Account</Typography>}/>  
													<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Created</Typography>} />  
													<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Modified</Typography>} />  
													<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Quotes</Typography>} />  
													<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Pricing Tags</Typography>} />  
												</FormGroup>
											</MenuItem>
										</Menu>
									</MenuItem>
									<MenuItem>  
										<FormGroup>
											<FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize : 20 }}>Filter</Typography>} />  
										</FormGroup>
									</MenuItem>
								</Menu>
							</Typography>
						</TableCell>
						<TableCell align="center" sx={{ borderRight : '1px solid black', width : '10%' }}>
							<Typography sx={{ fontSize : 20 }}>
                Modified
							</Typography>
						</TableCell>
						<TableCell align="center" sx={{ borderRight : '1px solid black', width : '10%'  }}>
							<Typography sx={{ fontSize : 20 }}>
                  Quotes
							</Typography>
						</TableCell>
						<TableCell align="center" sx={{ borderRight : '1px solid black', width : '10%'  }}>
							<Typography sx={{ fontSize : 20 }}>
                Pricing Tier
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.quotes}
							sx={{ '&:last-child td, &:last-child th' : { border : 0 } }}
						>
							<TableCell ><Typography>{row.account}</Typography></TableCell>
							<TableCell align="center"><Typography>{row.created}</Typography></TableCell>
							<TableCell align="center"><Typography>{row.modified}</Typography></TableCell>
							<TableCell align="center"><Typography>{row.quotes}</Typography></TableCell>
							<TableCell align="center"><Typography>{row.pricingTags}</Typography></TableCell>
              
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
