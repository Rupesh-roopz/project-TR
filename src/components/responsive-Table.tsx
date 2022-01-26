/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { Button, Grid, iconClasses, TableSortLabel, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useFilters, useTable, useSortBy} from 'react-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import handleState from '../utils/handle-input';
import MenuDropdown from './dropDown-menu';
// import './table.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SortingRows from './sorting';
import MenuIcon from './menuIcon';
  
const ResponsiveTable = (props:any) => {
	const {columnData, mockdata} = props;
	// const [filter, setFilterValue] = useState('');
	const columns = useMemo(() => columnData,[]);
	const data = useMemo(() => mockdata, []);
	

	

	const filterTypes = React.useMemo(
		() => ({
			greater: (rows:any, id:any, filterValue:any) => {
				console.log(rows, filterValue);
				const arr: any[]= [];
				rows.forEach((val: any) => {
					if(val.original.quotes >= filterValue){
						arr.push(val);
						console.log(val.values.quotes);	
					}
				});
				console.log(arr);
				return arr;
			},
			lesser : (rows:any, id:any, filterValue:any) => {
				console.log(rows,id,filterValue);
				const arr: any[]= [];
				rows.forEach((val: any) => {
					if(val.original.quotes <= filterValue){
						arr.push(val);
						console.log(val.values.quotes);	
					}	
				});
				console.log(arr);
				return arr;
			},
			equal : (rows:any, id:any, filterValue:any) => {
				const arr: any[]= [];
				rows.forEach((val: any) => {
					if(val.original.quotes == filterValue){
						arr.push(val);
						console.log(val.values.quotes);	
					}	
				});
				console.log(arr);
				return arr;
			}
		}),
		[]);
	// console.log(filter);
	const tableInstance = useTable({
		columns,
		data,
		// filter,
		// setFilterValue,
		filterTypes
	}, useFilters, useSortBy);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns } = tableInstance;	

	return (
		<TableContainer component={Paper} sx={{ width : '100%', height : '300px' }} >
			<Table  size="small" aria-label="a dense table" stickyHeader {...getTableProps()}>
				<TableHead>
					{
						headerGroups.map((headerGroup :any) => (
							<TableRow {...headerGroup.getHeaderGroupProps()}>
								{
									headerGroup.headers.map((column: any) => (
										<TableCell variant='head' {...column.getHeaderProps()}>
											<Grid
												container
												direction="row"
												justifyContent="space-between"
												alignItems="center"
											>
												<Grid item  {...column.getHeaderProps(column.getSortByToggleProps())}>
													<Typography>
														{
															column.render('Header')
														}
														
														{
															column.id !== 'sig' ?
																column.isSorted
																	? column.isSortedDesc
																		?  <ArrowDownwardIcon/>
																		: <ArrowUpwardIcon/>
																	: ''
																: ''
														}
													</Typography>
													
												</Grid>
												<Grid item>
													<MenuIcon
														allColumns = {allColumns.slice(3, 8)}
														toggleSortBy={column.toggleSortBy}
														column = {column}
														columnName = {column.id}
													/>
												</Grid>
											</Grid>
										</TableCell>
									))}
							</TableRow>
						))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{
						rows.map(row => {
							prepareRow(row);
							return (
								<TableRow {...row.getRowProps()} hover>
									{
										row.cells.map(cell => {
											return (
												<TableCell {...cell.getCellProps()}>
													{
														cell.render('Cell')
													}
												</TableCell>
											);
										})}
								</TableRow>
							);
						})
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ResponsiveTable;