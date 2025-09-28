import React from 'react';

interface RowItemProps {
	children: React.ReactNode;
	className?: string;
	size?: string;
}

const RowItem: React.FC<RowItemProps> = ({ children, className = '', size = '' }) => {
	const classes = ['row-item', size, className].filter(Boolean).join(' ');
	
	return (
		<div className={classes}>
			{children}
		</div>
	);
};

export default RowItem;