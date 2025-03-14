import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
// import './App.css';
import './index.css';
import App from './App.jsx';

export default function Fullname() {
	const [fullName, setFullName] = useState('');

	function handleClick(e) {
		e.preventDefault();
		const firstName = document.querySelector('input[placeholder="FirstName"]').value;
		const lastName = document.querySelector('input[placeholder="LastName"]').value;
		if (firstName === '' || lastName === '') {
			alert('Please fill the input fields');
			return;
		}
		setFullName(` ${firstName} ${lastName}`);
	}

	return (
		<>
			<h1>Hello{fullName}</h1>
			<input type='text' required placeholder='FirstName' />
			<input type='text' required placeholder='LastName' />
			<button type='submit' onClick={handleClick}>
				Submit
			</button>
		</>
	);
}

export function Counter() {
	const [count, setCount] = useState(0);

	function handelCount() {
		setCount(count + 1);
	}
	return (
		<>
			<h1>{count}</h1>
			<button type='submit' onClick={handelCount}>
				Submit
			</button>
		</>
	);
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
