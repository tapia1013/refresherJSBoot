// IF THE PERSON TOUCHES COINT THIS WILL MOVE THE COIN
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}






// Select Image
const avatar = document.querySelector('#player')
// Grab Coin
const coin = document.querySelector('#coin')

// event for keypress for window
window.addEventListener('keyup', function (e) {
	// console.log(e);
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		// const currTop = extractPos(avatar.style.top)
		// avatar.style.top = `${currTop + 50}px`;

		moveVertical(avatar, 50)
	}
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		// const currTop = extractPos(avatar.style.top)
		// avatar.style.top = `${currTop - 50}px`;

		moveVertical(avatar, -50)
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		// const currLeft = extractPos(avatar.style.left)
		// avatar.style.left = `${currLeft + 50}px`;

		moveHorizontal(avatar, 50)
		avatar.style.transform = `scale(1,1)`
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		// const currLeft = extractPos(avatar.style.left)
		// avatar.style.left = `${currLeft - 50}px`;

		moveHorizontal(avatar, -50)
		avatar.style.transform = `scale(-1,1)`
	}
	if (isTouching(avatar, coin)) moveCoin()
})

const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top)
	element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left)
	element.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)

	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}

moveCoin();





























