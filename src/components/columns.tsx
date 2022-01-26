import { format, formatRelative } from 'date-fns';
import ReferenceFilter from './filter/text';
import {SelectColumnFilter, MultipleFilter} from './filter/pricingTier';
import QuoteFilter from './filter/quote-options';
import DateFilter from './filter/date';

// const greater = (rows:any, filterValue:any) => {
// 	console.log(rows, filterValue);
// 	const arr: any[]= [];
// 	rows.forEach((val: any) => {
// 		if(val.original.quotes >= filterValue){
// 			arr.push(val);
// 			console.log(val.values.quotes);	
// 		}
// 	});
// 	console.log(arr);
// 	return arr;
// };

// const lesser = (rows:any, filterValue:any) => {
// 	const arr: any[]= [];
// 	rows.forEach((val: any) => {
// 		if(val.original.quotes <= filterValue){
// 			arr.push(val);
// 			console.log(val.values.quotes);	
// 		}	
// 	});
// 	console.log(arr);
// 	return arr;
// };

// const equal = (rows:any, filterValue:any) => {
// 	const arr: any[]= [];
// 	rows.forEach((val: any) => {
// 		if(val.original.quotes == filterValue){
// 			arr.push(val);
// 			console.log(val.values.quotes);	
// 		}	
// 	});
// 	console.log(arr);
// 	return arr;
// };

export const Columns = [
	{
		Header : 'Sig',
		accessor : 'sig',
		disableSortBy: true,
		disableFilters:true
	},
	{
		Header : ' ',
		accessor : 'empty',
		disableSortBy: true,
		disableFilters:true
	},
	{
		Header : 'Reference',
		accessor : 'reference',
		disableSortBy: true,
		Filter : ReferenceFilter
	},
	{
		Header : 'Account',
		accessor: 'account',
		Filter : ReferenceFilter
		
	},
	{
		Header : 'Created',
		accessor: 'created',
		Cell : (row :any) => {return format(new Date(row.value), 'd MMM yy');},
		Filter : DateFilter
	},
	{
		Header : 'Modified',
		accessor: 'modified',
		Cell : (row :any) => {return format(new Date(row.value), 'd MMM yy');},
		disableFilters:true
	},
	{
		Header : 'Quotes',
		accessor: 'quotes',
		filter : 'lesser',
		// filterTypes : {
		// 	greater : 'greater',
		// 	lesser : 'lesser',
		// 	equal : 'equal'
		// },
		Filter : QuoteFilter
	},
	{
		Header : 'Pricing Tier',
		accessor: 'pricingTier',
		filter: MultipleFilter,
		Filter : SelectColumnFilter
		
	}
];

