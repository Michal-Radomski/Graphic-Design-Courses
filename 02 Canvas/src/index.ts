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

  //* Rectangle
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

  //* Line
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(220, 20);
  ctx.lineTo(400, 20);
  ctx.lineWidth = 3;
  ctx.stroke();

  // Second path
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(220, 20);
  ctx.lineTo(320, 120);
  ctx.lineWidth = 2;
  ctx.stroke();

  // Third and fourth path
  ctx.beginPath();
  ctx.strokeStyle = "orange";
  ctx.moveTo(320, 120);
  ctx.lineTo(400, 20);
  ctx.lineTo(500, 120);
  ctx.lineWidth = 2;
  // ctx.fillStyle = "black";
  // ctx.fill();
  ctx.stroke();

  //* Circle
  ctx.beginPath();
  ctx.strokeStyle = "orangered";
  ctx.lineWidth = 3;
  ctx.arc(250, 200, 50, 0, 2 * Math.PI);
  ctx.stroke();

  //* Arc
  ctx.beginPath();
  ctx.fillStyle = "darkred";
  ctx.lineWidth = 3;
  ctx.arc(250, 300, 50, 0, 1 * Math.PI);
  ctx.fill();

  //* BezierCurve
  ctx.beginPath();
  ctx.strokeStyle = "darkviolet";
  ctx.moveTo(250, 400);
  ctx.bezierCurveTo(250, 500, 400, 500, 400, 120);
  ctx.stroke();

  //* quadratic BezierCurve
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "magenta";
  ctx.moveTo(20, 520);
  ctx.quadraticCurveTo(20, 600, 200, 520);
  ctx.stroke();

  //* BezierCurve in a for loop
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.lineWidth = i + 1;
    ctx.strokeStyle = `rgba(${15 * i}, ${15 * i}, ${15 * i}, ${1 - 0.05 * i})`;
    ctx.bezierCurveTo(250 + 10 * i, 500 + 10 * i, 400 + 10 * i, 500 + 10 * i, 400 + 10 * i, 120 + 10 * i);
    ctx.stroke();
  }
} else {
  console.log("!myCanvas.getContext('2d')");
}
