import React from 'react';
import TableDataGrid from './components/table';
import MainTable from './components/main-table';
import ResponsiveTable from './components/responsive-Table';
import MOCK_DATA from './components/mock-data.json';
import { Columns } from './components/columns';

function App() {
	return (
		<div className="App">
			{/* <MainTable /> */}
			<ResponsiveTable columnData={Columns} mockdata={MOCK_DATA}/>
		</div>
	);
}

export default App;
