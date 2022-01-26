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

type columnsProps = {
    Header: string;
    accessor: string;
}[];
  
const ResponsiveTable = (props:any) => {
	const {columnData, mockdata, toggleSortBy} = props;
	const  [ selectedMenu, setSelectedMenu] = useState('');
	
	const columns = useMemo(() => columnData,[]);
	const data = useMemo(() => mockdata, []);
	

	const tableInstance = useTable({
		columns, data
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
