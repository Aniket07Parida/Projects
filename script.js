const content = document.getElementById('content');
const getResult = document.getElementById('input-item');

function addItem() {
	const newItem = content.value;
	if (newItem === '') {
		alert('Input the Text');
		return;
	} else {
		const li = document.createElement('li');
		li.className =
			'w-85 h-8 border-1 border-black rounded-md p-0 ml-5 mt-3 inline-flex content-center justify-between font-bold';
		li.innerHTML = `
            ${newItem}
            <button type="button" class="text-red-700 text-2xl" onclick="removeItem(this)">
                <i class="bx bx-x mb-1"></i>
            </button>
        `;
		getResult.appendChild(li);
		content.value = '';
	}
}

function removeItem(button) {
	const li = button.parentElement;
	li.remove();
}
