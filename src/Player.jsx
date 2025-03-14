import React from 'react';
import { useState } from 'react';

export default function Player({ name, Symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState(name);
	const [newSymbol, setNewSymbol] = useState(Symbol);

	function handleEdit() {
		isEditing
			? setNewName(newName) && setNewSymbol(newSymbol)
			: setNewName(name) && setNewSymbol(Symbol);
		setIsEditing(!isEditing);
	}

	function handleNameChange(event) {
		setNewName(event.target.value);
	}

	let newPlayerName = <span className='Player-Name'>{newName}</span>;

	if (isEditing) {
		newPlayerName = <input type='text' required value={newName} onChange={handleNameChange} />;
	}

	return (
		<main>
			<li className={isActive ? 'active' : undefined}>
				{newPlayerName}
				<span className='Player-Symbol'>{newSymbol}</span>
				<button className='edit-Buttom' onClick={handleEdit}>
					{isEditing ? 'Save' : 'Edit'}
				</button>
			</li>
		</main>
	);
}
