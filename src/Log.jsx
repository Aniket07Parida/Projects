export default function Log({ turns }) {
	return (
		<>
			<ol className='logs'>
				{turns.map((turn) => (
					<li key={`${turn.Square.row},${turn.Square.col}`}>
						{turn.player}select{turn.Square.row},{turn.Square.col}
					</li>
				))}
			</ol>
		</>
	);
}
