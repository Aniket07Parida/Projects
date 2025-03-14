export default function GameOver({ Winner }) {
	return (
		<div className='game-over'>
			<h2>Game Over!</h2>
			<h3>{Winner}: won!</h3>
		</div>
	);
}
