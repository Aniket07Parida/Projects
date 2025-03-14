import React from 'react';
import Player from './Player';
import GameBord from './GameBord';
import Log from './Log';
import { WINNING_COMBINATIONS } from './winning.js';
import GameOver from './GameOver.jsx';
import { useState } from 'react';

const InitialGameBord = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function App() {
	const [gameTurn, setGameTurn] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');

	let gameBord = InitialGameBord;
	let winners;

	for (let turns of gameTurn) {
		const { Square, player } = turns;
		const { row, col } = Square;

		gameBord[row][col] = player;
	}

	for (const winner of WINNING_COMBINATIONS) {
		const firstCombination = gameBord[winner[0].row][winner[0].column];
		const secondCombination = gameBord[winner[1].row][winner[1].column];
		const thirdCombination = gameBord[winner[2].row][winner[2].column];

		if (
			firstCombination &&
			firstCombination === secondCombination &&
			firstCombination === thirdCombination
		) {
			winners = firstCombination;
		}
	}

	function handelSelectSqure(rowIndex, colIndex) {
		setActivePlayer((prePlayer) => (prePlayer === 'X' ? 'O' : 'X'));
		setGameTurn((prevTurn) => {
			let CurrentPlayer = 'X';

			if (prevTurn.length > 0) {
				CurrentPlayer = prevTurn[0].player === 'X' ? 'O' : 'X';
			}
			const updateTurn = [
				{ Square: { row: rowIndex, col: colIndex }, player: activePlayer },
				...gameTurn,
			];
			return updateTurn;
		});
	}

	return (
		<>
			<h1 className='heading'>Tic-Tac-Toe</h1>
			<div className='container'>
				<ol className='order-list'>
					<Player name='Player1' Symbol='X' isActive={activePlayer === 'X'} />
					<Player name='Player2' Symbol='O' isActive={activePlayer === 'O'} />
				</ol>
				{winners && <GameOver Winner={winners} />}
				<GameBord onSelectSqure={handelSelectSqure} board={gameBord} />
			</div>
			<Log turns={gameTurn} />
		</>
	);
}
