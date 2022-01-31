import { format } from 'date-fns';
import TextFilter from './filter/text';
import {CheckboxFilter} from './filter/checkbox';
import QuoteFilter from './filter/number';
import DateFilter from './filter/date';

const filterFunction = (type: any) => {
	if(type === 'text') return TextFilter;
	if(type === 'number') return QuoteFilter;
	if(type === 'checkbox') return CheckboxFilter;
	if(type === 'date') return DateFilter;
};

// const customFilter = (type :string, filterType : string) => {
// 	if (type === 'checkbox' && filterType === 'multiple')
// 		return MultipleFilter;
// };

export const ColumnsGenerate = (props : any) =>  {

	const columns = props.map((column : any) => {
		return {
			Header : column.header,
			accessor : column.field,
			disableSortBy : !column.sortable,
			disableFilters : !column.filterable,
			Filter : filterFunction(column.type),
			filterCheckbox : false,
			customFilterValue : '',
			// filter : customFilter(column.type, column.filterType),
			Cell : column.type === 'date' ? ((row :any) => {return format(new Date(row.value), 'd MMM yy');}) : ((row :any) => row.value)
		};
	});
	console.log(columns);
	return columns;
};