// console.log("test");

//^ Canvas 1
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
  ctx.closePath();

  // Second path
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(220, 20);
  ctx.lineTo(320, 120);
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

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
  ctx.closePath();

  //* Circle
  ctx.beginPath();
  ctx.strokeStyle = "orangered";
  ctx.lineWidth = 3;
  ctx.arc(250, 200, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  //* Arc
  ctx.beginPath();
  ctx.fillStyle = "darkred";
  ctx.lineWidth = 3;
  ctx.arc(250, 300, 50, 0, 1 * Math.PI);
  ctx.fill();
  ctx.closePath();

  //* BezierCurve
  ctx.beginPath();
  ctx.strokeStyle = "darkviolet";
  ctx.moveTo(250, 400);
  ctx.bezierCurveTo(250, 500, 400, 500, 400, 120);
  ctx.stroke();
  ctx.closePath();

  //* quadratic BezierCurve
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "magenta";
  ctx.moveTo(20, 520);
  ctx.quadraticCurveTo(20, 600, 200, 520);
  ctx.stroke();
  ctx.closePath();

  //* BezierCurve in a for loop
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.lineWidth = i + 1;
    ctx.strokeStyle = `rgba(${15 * i}, ${15 * i}, ${15 * i}, ${1 - 0.05 * i})`;
    ctx.bezierCurveTo(250 + 10 * i, 500 + 10 * i, 400 + 10 * i, 500 + 10 * i, 400 + 10 * i, 120 + 10 * i);
    ctx.stroke();
    ctx.closePath();
  }
} else {
  console.log("!myCanvas.getContext('2d')");
}

//^ Canvas 2
const canvas = document.getElementById("myCan") as HTMLCanvasElement;
if (canvas.getContext) {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.beginPath();
  ctx.fill();
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(320, 160, 150, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(180, 170);
  ctx.bezierCurveTo(180, 220, 330, 400, 450, 170);
  ctx.lineTo(180, 170);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(125,0,125)";
  ctx.stroke();
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(250, 172, 50, 50);
  ctx.fillRect(310, 172, 50, 50);

  // Eyes
  ctx.beginPath();
  ctx.arc(255, 90, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#333333";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(365, 90, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#333333";
  ctx.fill();
  ctx.closePath();
}
