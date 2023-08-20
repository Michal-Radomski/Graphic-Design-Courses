// console.log("test");

const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
// console.log("myCanvas:", myCanvas);

// function getMousePosition(canvas: HTMLCanvasElement, event: MouseEvent): void {
//   let rect = canvas.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   // console.log({ rect });
//   console.log("Coordinate x: " + x, "Coordinate y: " + y);
// }

// myCanvas.addEventListener("mousedown", function (event: MouseEvent) {
//   getMousePosition(myCanvas, event);
// });

if (myCanvas.getContext("2d")) {
  const ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;
  // console.log("ctx: ", ctx);

  ctx.fillStyle = "green";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;

  ctx.fillRect(20, 20, 150, 100);
  ctx.strokeRect(20, 20, 150, 100);

  ctx.clearRect(30, 30, 130, 80);

  // Shadow
  ctx.shadowColor = "dimgray";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;

  // Filled rectangle
  ctx.fillRect(20, 150, 100, 100);

  ctx.rect(20, 300, 150, 100);
  ctx.fill();
}
