import React from 'react';
import AppTable from './components/index';
import MOCK_DATA from './mock-data/mock-data.json';
import MOCK_COLUMN from './mock-data/mock-column.json';

function App() {
	return (
		<div className="App">
			<AppTable config={MOCK_COLUMN} data={MOCK_DATA}/>
		</div>
	);
}

export default App;
