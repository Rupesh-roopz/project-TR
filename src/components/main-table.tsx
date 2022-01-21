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
import { Button, Grid, iconClasses, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import DownloadIcon from '@mui/icons-material/Download';
import MenuDropdown from './dropDown-menu';
import { mockData } from '../mock-data/mockTableData';
import handleState from '../utils/handle-input';
import { table } from 'console';

const tableHeader = [
	{
		id : 'sig',
		name :  'Sig...'
	},
	{
		id : 'emptyname',
		name : ' '
	},
	{
		id : 'reference',
		name : 'Reference'
	},
	{
		id : 'account',
		name : 'Account'
	},
	{
		id : 'created',
		name : 'Created'
	},
	{
		id : 'modified',
		name : 'Modified'
	},
	{
		id : 'quotes',
		name : 'Quotes'
	},
	{
		id : 'pricingTags',
		name : 'Pricing Tags'
	}
];

const tablecols = ['Sig...', ' ', 'Reference'];

export default function MainTable() {

	const advancedColumns = {
		isAccount : false,
		isCreated : false,
		isModified : false,
		isQuotes : false,
		isPricingTier : false
		
	};

	const { values, handleInputChange } = handleState(advancedColumns);

	// const sampleFunc = () => {
	// 	console.log(values.isAccount);
	// 	if(values.isAccount) {
	// 		tablecols.push('account');
	// 	} else {
	// 		const index = tablecols.indexOf('account');
	// 		console.log(tablecols);
	// 		console.log(index);
	// 		if (index > -1) {
	// 			tablecols.splice(index, 2);
	// 		}
	// 	}
	// 	console.log(tablecols);
				
	// };
	// sampleFunc();
	
	return (
		<TableContainer component={Paper} sx={{ width : '100%' }} >
			<Table  size="small" aria-label="a dense table" >
				<TableHead >
					<TableRow
						hover
					>
						{
							tableHeader.map((column : {
								id :string,
								name : string
							}) => (
								<TableCell key={column.id} variant="head">
									<Grid
										container
										direction="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Grid item>
											<Typography>
												{column.name}
											</Typography>
										</Grid>
										<Grid item 
											sx={{
												// borderRight:'1px solid black',
												// borderLeft:'1px solid black'
											}}>
											<MenuDropdown 
												values={values}
												handleInputChange={handleInputChange}
											/>
										</Grid>
									</Grid>
								</TableCell>
							))
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{mockData.map((row) => (
						<TableRow	
							key={row.id}
							sx={{ '&:last-child td, &:last-child th' : { border : 0 } }}
							hover
						>
							<TableCell ><Typography>{row.sig}</Typography></TableCell>
							<TableCell ><Typography>{row.empty}</Typography></TableCell>
							<TableCell ><Typography>{row.reference}</Typography></TableCell> 
							<TableCell ><Typography>{row.account}</Typography></TableCell> 
							<TableCell ><Typography>{row.created}</Typography></TableCell> 
							<TableCell ><Typography>{row.modified}</Typography></TableCell> 
							<TableCell ><Typography>{row.quotes}</Typography></TableCell> 
							<TableCell ><Typography>{row.pricingTier}</Typography></TableCell>             
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
