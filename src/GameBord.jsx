export default function GameBord({ onSelectSqure, board }) {
	// const [gameBord, setGameBord] = useState(InitialGameBord);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBord((prevGameBord) => {
	// 		const newGameBord = [...prevGameBord.map((inArray) => [...inArray])];
	// 		newGameBord[rowIndex][colIndex] = activePlayerSymbol;

	// 		return newGameBord;
	// 	});
	// 	onSelectSqure();
	// }

	return (
		<>
			<ol className='game-bord'>
				{board.map((row, rowIndex) => (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, colIndex) => (
								<li key={colIndex}>
									<button
										onClick={() => onSelectSqure(rowIndex, colIndex)}
										disabled={playerSymbol !== null}
									>
										{playerSymbol}
									</button>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</>
	);
}
