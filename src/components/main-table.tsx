/* eslint-disable no-prototype-builtins */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DivcolumnIder from '@mui/material/Divider';
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
import { isModuleNamespaceObject } from 'util/types';
import { elementAcceptingRef } from '@mui/utils';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import { resolveObjectURL } from 'buffer';
import { consumers } from 'stream';

type selectedColumnProps = ({ columnId: string; name: string; } | undefined)[]

type mockDataProps = {
	id: number,
	sig: string,
	empty: string,
	reference: string,
	account: string,
	created: string,
	modified: string,
	quotes: number, 	
	pricingTier: string,
}[];
// const mockDataProps:ObjectType = data;
// const temp = mockDataProps[account as keyof typeof mockDataProps];

const defaultTableHeader= [
	{
		columnId : 'sig',
		name :  'Sig...'
	},
	{
		columnId : 'emptyname',
		name : ' '
	},
	{
		columnId : 'reference',
		name : 'Reference'
	}
];

// const sampleFunction = (columnId : any) => {
// 	return mockData.map((row) => {
// 		return row['account'];
// 	});
// };

export default function MainTable() {

	const advancedColumns = {
		account : false,
		created : false,
		modified : false,
		quotes : false,
		pricingTier : false
		
	};

	

	const { values, handleInputChange } = handleState(advancedColumns);
	

	const additionalColumns = (values : any) => {
		const columnNames = ['Account', 'Created', 'Modified', 'Quotes', 'Pricing Tier'];
		const val = Object.values(values);
		const keys = Object.keys(values);
		const temp = val.map((elements, index) => {
			if(elements)
				return {columnId : keys[index], name : columnNames[index]};
		});
		
		return temp.filter((elements)=> {return elements; });
	};
	const selectedColums: selectedColumnProps = additionalColumns(values);
	// if(selectedColums.length) {console.log(defaultTableHeader.concat(selectedColums));}
	

	console.log(selectedColums);
	// additionalColumnData(selectedColums,mockData);
	return (
		<TableContainer component={Paper} sx={{ wcolumnIdth : '100%', height : '300px' }} >
			<Table  size="small" aria-label="a dense table" stickyHeader >
				<TableHead >
					<TableRow
						hover
					>
						{
							defaultTableHeader.map((column : {
								columnId :string,
								name : string
							}) => (
								<TableCell key={column.columnId} variant="head">
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
												// borderRight:'1px solcolumnId black',
												// borderLeft:'1px solcolumnId black'
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
						{
							selectedColums.map((column : any) => (
								<TableCell key={column.columnId} variant="head">
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
												// borderRight:'1px solcolumnId black',
												// borderLeft:'1px solcolumnId black'
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
					{mockData.map((row: any) => (
						<TableRow	
							key={row.id}
							sx={{ '&:last-child td, &:last-child th' : { border : 0 } }}
							hover
						>
							<TableCell ><Typography>{row.sig}</Typography></TableCell>
							<TableCell ><Typography>{row.empty}</Typography></TableCell>
							<TableCell ><Typography>{row.reference}</Typography></TableCell> 
							{
								selectedColums.map((col: any) => (
									// d = columnId;
									// console.log(name)
									<TableCell key={col.columnId}>
										<Typography>
											{
												row[col.columnId as keyof mockDataProps]
											}
										</Typography>
									</TableCell>
								))
							} 
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
