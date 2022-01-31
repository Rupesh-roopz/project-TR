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
		disableFilters:true,
		Filter : ReferenceFilter
	},
	{
		Header : ' ',
		accessor : 'empty',
		disableSortBy: true,
		disableFilters:true,
	},
	{
		Header : 'Reference',
		accessor : 'reference',
		Filter : ReferenceFilter,
		filterCheckbox : false,
		customFilterValue : ''
	},
	{
		Header : 'Account',
		accessor: 'account',
		Filter : ReferenceFilter,
		filterCheckbox : false,
		customFilterValue : ''
	},
	{
		Header : 'Created',
		accessor: 'created',
		Cell : (row :any) => {return format(new Date(row.value), 'd MMM yy');},
		filterCheckbox : false,
		filter : 'before',
		Filter : DateFilter,
		customFilterValue : ''
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
		Filter : QuoteFilter,
		customFilterValue : '',
		customOption : '',
		filterCheckbox : false,
	},
	{
		Header : 'Pricing Tier',
		accessor: 'pricingTier',
		filter: MultipleFilter,
		Filter : SelectColumnFilter
		
	}
];

