const count = document.getElementById('count');
let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const Start = () => {
	if (!isRunning) {
		isRunning = true;
		startTime = Date.now() - elapsedTime;
		time = setInterval(update, 10);
	}
};

const Stop = () => {
	if (isRunning) {
		isRunning = false;
		clearInterval(time);
	}
};

const Restart = () => {
	isRunning = false;
	clearInterval(time);
	elapsedTime = 0;
	count.textContent = '00:00:00:00';
};

const update = () => {
	const currentTime = Date.now();
	elapsedTime = currentTime - startTime;

	let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
	let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
	let second = Math.floor((elapsedTime / 1000) % 60);
	let miliSecond = Math.floor((elapsedTime % 1000) / 10);

	count.textContent = `${hour.toString().padStart(2, '0')}-${minute
		.toString()
		.padStart(2, '0')}-${second.toString().padStart(2, '0')}-${miliSecond
		.toString()
		.padStart(2, '0')}`;
};
