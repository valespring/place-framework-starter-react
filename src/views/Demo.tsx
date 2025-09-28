import React from 'react';
import Wrapper from '@c/place/Wrapper';
import GridContainer from '@c/place/GridContainer';
import RowContainer from '@c/place/RowContainer';
import RowItem from '@c/place/RowItem';

interface DemoRow {
	sectionClassName: string;
	description?: string;
	color: string;
	cols: number[];
	offset?: (number | null)[];
	flex?: boolean;
	flush?: boolean;
	rtl?: boolean;
	items: string[];
}

interface DemoGrid {
	sectionClassName: string;
	description?: string;
	cols: string[];
	color: string;
	spaced: boolean;
	items: string[];
}

const Demo: React.FC = () => {
	const typeScale = [
		'inch-type',
		'canon-type',
		'paragon-type',
		'primer-type',
		'tertia-type',
		'normal-type',
		'petite-type',
		'minion-type'
	];

	const demoGrids: DemoGrid[] = [
		{
			sectionClassName: 'demo-grid-normal',
			description: 'A normal CSS grid with no spacing.',
			cols: ['QUARTERS', 'HALVES', 'HALVES'],
			color: '#FCEFEF',
			spaced: false,
			items: [
				'Grid Item 1',
				'Grid Item 2',
				'Grid Item 3',
				'Grid Item 4'
			]
		},
		{
			sectionClassName: 'demo-grid-normal',
			description: 'A normal CSS grid with spacing.',
			cols: ['QUARTERS', 'HALVES', 'HALVES'],
			color: '#fff9f9',
			spaced: true,
			items: [
				'Grid Item 1',
				'Grid Item 2',
				'Grid Item 3',
				'Grid Item 4'
			]
		}
	];

	const demoRows: DemoRow[] = [
		{
			sectionClassName: 'demo-row-normal',
			description: 'A normal old-school row using floats. Note that either column count or percentages can be used if a match can be found.',
			color: '#6482AD',
			cols: [3, 50, 50],
			items: [
				'Normal Item 1',
				'Normal Item 2',
				'Normal Item 3',
				'Normal Item 4'
			]
		},
		{
			sectionClassName: 'demo-row-rtl',
			description: 'The above example with inverted direction RTL.',
			rtl: true,
			color: '#7FA1C3',
			cols: [3, 50, 50],
			items: [
				'RTL Item 1',
				'RTL Item 2',
				'RTL Item 3',
			]
		},
		{
			sectionClassName: 'demo-row-flex',
			description: 'The above example with inverted direction RTL.',
			flex: true,
			color: '#E2DAD6',
			cols: [25, 50, 50],
			items: [
				'Flex Item 1',
				'Flex Item 2',
				'Flex Item 3',
				'Flex Item 4'
			]
		},
		{
			sectionClassName: 'demo-row-offset',
			description: 'A row with offset columns. Note some math is needed to equate to the total column count.',
			color: '#F5EDED',
			cols: [5, 50, 50],
			offset: [1, null, null],
			items: [
				'Offset Item 1',
				'Offset Item 2',
			]
		},
	];

	return (
		<Wrapper>
			{demoRows.map((demoRow, index) => (
				<div 
					key={index}
					className={demoRow.sectionClassName} 
					style={{ '--demo-color': demoRow.color } as React.CSSProperties}
				>
					{demoRow.description && (
						<pre>
							{demoRow.description}<br />
							{demoRow.cols.join(', ')}
						</pre>
					)}
					<RowContainer 
						className={`${demoRow.flex ? 'flex' : ''} ${demoRow.flush ? 'flush' : ''} ${demoRow.rtl ? 'rtl' : ''}`.trim()}
					>
						{demoRow.items.map((item, itemIndex) => (
							<RowItem 
								key={itemIndex}
								size={demoRow.cols[itemIndex]?.toString()}
								className={demoRow.offset?.[itemIndex] ? `offset-${demoRow.offset[itemIndex]}` : ''}
							>
								<div className="item-fill item-spaced">
									{item}
								</div>
							</RowItem>
						))}
					</RowContainer>
				</div>
			))}

			{demoGrids.map((demoGrid, index) => (
				<div 
					key={index}
					className={demoGrid.sectionClassName} 
					style={{ '--demo-color': demoGrid.color } as React.CSSProperties}
				>
					{demoGrid.description && (
						<pre>
							{demoGrid.description}<br />
							{demoGrid.cols.join(', ')}
						</pre>
					)}
					<GridContainer className={demoGrid.spaced ? 'spaced' : ''}>
						{demoGrid.items.map((item, itemIndex) => (
							<div key={itemIndex} className="item-fill">
								{item}
							</div>
						))}
					</GridContainer>
				</div>
			))}

			<div>
				{typeScale.map((text, index) => (
					<h2 key={index} className={text}>{text}</h2>
				))}
				<button>Text</button>
			</div>

			<div className="vertical-rhythm">
				<h2>Vertical Rhythm</h2>
				<p className="rhythm-1">Item 1</p>
				<p className="rhythm-2">Item 2</p>
				<p className="rhythm-3">Item 3</p>
			</div>
		</Wrapper>
	);
};

export default Demo;