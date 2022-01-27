import { format } from 'date-fns';
import ReferenceFilter from './filter/text';
import {SelectColumnFilter, MultipleFilter} from './filter/pricingTier';
import QuoteFilter from './filter/quote-options';
import DateFilter from './filter/date';


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
		Filter : ReferenceFilter,
		isFilterChecked : true
		
	},
	{
		Header : 'Created',
		accessor: 'created',
		Cell : (row :any) => {return format(new Date(row.value), 'd MMM yy');},
		filter : 'before',
		Filter : DateFilter
	},
	{
		Header : 'Modified',
		accessor: 'modified',
		Cell : (row :any) => {return format(new Date(row.value), 'd MMM yy');},
		filter : 'before',
		Filter : DateFilter
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

