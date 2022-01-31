import React from 'react';
import ResponsiveTable from './components/responsive-Table';
import MOCK_DATA from './mock-data/mock-data.json';
import MOCK_COLUMN from './mock-data/mock-column.json';

function App() {
	return (
		<div className="App">
			<ResponsiveTable columnData={MOCK_COLUMN} mockdata={MOCK_DATA}/>
		</div>
	);
}

export default App;
