import React from 'react';

interface WrapperProps {
	children: React.ReactNode;
	className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
	return (
		<div className={`wrapper ${className}`.trim()}>
			{children}
		</div>
	);
};

export default Wrapper;