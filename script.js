const canvas = document.querySelector("canvas");
const bounds = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

const getRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

const dot = (x, y) => {
	if (!canvas.getContext) {
		console.log("Canvas is not supported");
		return;
	}
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI * 2);
	ctx.fillStyle = getRandomColor();
	ctx.fill();
}

canvas.addEventListener("click", (e) => {
	// const x = e.clientX - 49;
	const x = e.clientX - bounds.x;
	const y = e.clientY - bounds.y;
	dot(x, y);
});