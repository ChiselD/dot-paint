const canvas = document.querySelector("canvas");
const bounds = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

const getRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

// check this page for ideas of how to implement my goal:
// as long as the mouse is held down, the radius of the dot should grow bigger
// https://stackoverflow.com/questions/15505272/javascript-while-mousedown

const drawDot = (x, y, radius, color) => {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

const dot = (x, y) => {
	if (!canvas.getContext) {
		console.log("Canvas is not supported");
		return;
	}
	const color = getRandomColor();
	drawDot(x, y, 5, color);
}

canvas.addEventListener("click", (e) => {
	// const x = e.clientX - 49;
	const x = e.clientX - bounds.x;
	const y = e.clientY - bounds.y;
	dot(x, y);
});