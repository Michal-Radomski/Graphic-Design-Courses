// console.log("test");

const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
console.log("myCanvas:", myCanvas);

function getMousePosition(canvas: HTMLCanvasElement, event: MouseEvent): void {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordinate x: " + x, "Coordinate y: " + y);
}

myCanvas.addEventListener("mousedown", function (event: MouseEvent) {
  getMousePosition(myCanvas, event);
});
