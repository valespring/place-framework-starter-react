import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Demo from './views/Demo';

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Demo />} />
			</Routes>
		</div>
	);
};

export default App;