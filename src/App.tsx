import React from 'react';
import ResponsiveTable from './components/responsive-Table';
import MOCK_DATA from './components/mock-data.json';
import { Columns } from './components/columns';

function App() {
	return (
		<div className="App">
			<ResponsiveTable columnData={Columns} mockdata={MOCK_DATA}/>
			{/* <MainTable /> */}
		</div>
	);
}

export default App;
