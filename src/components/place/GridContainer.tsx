import React from 'react';

interface GridContainerProps {
	children: React.ReactNode;
	className?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({ children, className = '' }) => {
	return (
		<div className={`grid-container ${className}`.trim()}>
			{children}
		</div>
	);
};

export default GridContainer;