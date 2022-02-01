/* eslint-disable quotes */
/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import { ColumnsGenerate } from './columns';
import TableComponent from './table';

interface AppTableProps {
	config: {
		header: string;
		field: string;
		filterable: boolean;
		sortable: boolean;
		type: string;
		filterType: string;
	}[]
	data: ({
		pricingTier: string;
		sig: string;
		empty: string;
		reference: string;
		modified: string;
		created: string;
		account: string;
		quotes: number;
	})[]
  }

class AppTable extends React.Component<AppTableProps, any> {
	constructor(props : any) {
		super(props);
		this.state = {
			columns : this.props.config,
			data : this.props.data
		};
	}

	componentDidUpdate(prevProps : any) {
		if (this.props.children !== prevProps.children) {
			this.setState({
				columns : this.props.config,
				data : this.props.data
			});
		}
	}

	render() {
		const columns = this.state.columns;
		const data = this.state.data;
		const tableColumns = ColumnsGenerate(columns);
	
		return (
			<TableComponent columns={tableColumns} data={data} />
		);
	}
}
// const AppTable = (props:any) => {
// 	const {columnData, mockdata} = props;
// 	const tableColumns = ColumnsGenerate(columnData);
// 	const columns = useMemo(() => tableColumns,[]);
// 	const data = useMemo(() => mockdata, []);

// 	const filterTypes = React.useMemo(
// 		() => ({
// 			greater: (rows:any, id:any, filterValue:any) => {
// 				console.log(rows, filterValue);
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					if(val.original[id] > filterValue){
// 						arr.push(val);
// 						console.log(val.values.quotes);	
// 					}
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			lesser : (rows:any, id:any, filterValue:any) => {
// 				console.log(rows,id,filterValue);
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					if(val.original[id] < filterValue){
// 						arr.push(val);
// 						console.log(val.values.quotes);	
// 					}	
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			equal : (rows:any, id:any, filterValue:any) => {
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					if(val.original[id] == filterValue){
// 						arr.push(val);
// 						console.log(val.values.quotes);	
// 					}	
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			before : (rows:any, id:any, filterValue:any) => {
// 				console.log(rows,id,filterValue);
// 				const filterValueSeconds = new Date(filterValue).setHours(0,0,0,0);
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					const rowValueSeconds = new Date(val.original[id]).setHours(0,0,0,0);
// 					if(rowValueSeconds <= filterValueSeconds){
// 						arr.push(val);	
// 					}	
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			after : (rows:any, id:any, filterValue:any) => {
// 				console.log(rows,id,filterValue);
// 				const filterValueSeconds = new Date(filterValue).setHours(0,0,0,0);
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					const rowValueSeconds = new Date(val.original[id]).setHours(0,0,0,0);
// 					if(rowValueSeconds >= filterValueSeconds){
// 						arr.push(val);
// 						// console.log(val.values.quotes);	
// 					}	
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			on : (rows:any, id:any, filterValue:any) => {
// 				const filterValueSeconds = new Date(filterValue).setHours(0,0,0,0);
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					const rowValueSeconds = new Date(val.original[id]).setHours(0,0,0,0);
// 					console.log(rowValueSeconds);
// 					if(rowValueSeconds === filterValueSeconds){
// 						arr.push(val);
// 						// console.log(val.values.quotes);	
// 					}	
// 				});
// 				console.log(arr);
// 				return arr;
// 			},
// 			multipleFilter :(rows:any, filler:any, filterValue:any) => {
// 				const arr: any[]= [];
// 				rows.forEach((val: any) => {
// 					if (filterValue.includes(val.original.pricingTier)) 
// 						arr.push(val);
// 				});
				
// 				return arr;
// 			}
// 		}),
// 		[]);
// 	const tableInstance = useTable({
// 		columns,
// 		data,
// 		filterTypes
// 	}, useFilters, useSortBy);

// 	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns } = tableInstance;	

// 	return (
// 		<TableContainer component={Paper} sx={{ width : '100%', height : '400px' }} >
// 			<Table  size="small" aria-label="a dense table" stickyHeader {...getTableProps()}>
// 				<TableHead>
// 					{
// 						headerGroups.map((headerGroup :any) => (
// 							<TableRow {...headerGroup.getHeaderGroupProps()}>
// 								{
// 									headerGroup.headers.map((column: any) => (
// 										<TableCell variant='head' {...column.getHeaderProps()}>
// 											<Grid
// 												container
// 												direction="row"
// 												justifyContent="space-between"
// 												alignItems="center"
// 											>
// 												<Grid item  {...column.getHeaderProps(column.getSortByToggleProps())}>
// 													<Typography>
// 														{
// 															column.render('Header')
// 														}
														
// 														{
															
// 															column.isSorted
// 																? column.isSortedDesc
// 																	?  <ArrowDownwardIcon/>
// 																	: <ArrowUpwardIcon/>
// 																: ''
																
// 														}
// 													</Typography>
													
// 												</Grid>
// 												<Grid item>
// 													<HeaderMenu
// 														allColumns = {allColumns.slice(3, 8)}
// 														toggleSortBy={column.toggleSortBy}
// 														column = {column}
// 														columnName = {column.id}
// 													/>
// 												</Grid>
// 											</Grid>
// 										</TableCell>
// 									))}
// 							</TableRow>
// 						))}
// 				</TableHead>
// 				<TableBody {...getTableBodyProps()}>
// 					{
// 						rows.map(row => {
// 							prepareRow(row);
// 							return (
// 								<TableRow {...row.getRowProps()} hover>
// 									{
// 										row.cells.map(cell => {
// 											return (
// 												<TableCell {...cell.getCellProps()}>
// 													{
// 														cell.render('Cell')
// 													}
// 												</TableCell>
// 											);
// 										})}
// 								</TableRow>
// 							);
// 						})
// 					}
// 				</TableBody>
// 			</Table>
// 		</TableContainer>
		
// 	);
// };

export default AppTable;
