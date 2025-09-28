import React from 'react';

interface RowContainerProps {
	children: React.ReactNode;
	className?: string;
}

const RowContainer: React.FC<RowContainerProps> = ({ children, className = '' }) => {
	return (
		<div className={`row-container ${className}`.trim()}>
			{children}
		</div>
	);
};

export default RowContainer;