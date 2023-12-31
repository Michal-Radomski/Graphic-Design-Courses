//^ Canvas 1
const myCanvas_1 = document.querySelector("#myCanvas_1") as HTMLCanvasElement;
// console.log("myCanvas_1:", myCanvas_1);

// function getMousePosition(canvas: HTMLCanvasElement, event: MouseEvent): void {
//   let rect = canvas.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   // console.log({ rect });
//   console.log("Coordinate x: " + x, "Coordinate y: " + y);
// }

// myCanvas_1.addEventListener("mousedown", function (event: MouseEvent) {
//   getMousePosition(myCanvas_1, event);
// });

//* A utility function to draw a rectangle with rounded corners.
function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.strokeStyle = "maroon";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
  ctx.closePath();
}

if (myCanvas_1.getContext("2d")) {
  const ctx = myCanvas_1.getContext("2d") as CanvasRenderingContext2D;
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

  //* roundedRect - function
  roundedRect(ctx, 480, 420, 150, 150, 15);
} else {
  console.log("!myCanvas_1.getContext('2d')");
}

//^ Canvas 2
const canvas_2 = document.getElementById("myCan_2") as HTMLCanvasElement;
if (canvas_2.getContext) {
  const ctx = canvas_2.getContext("2d") as CanvasRenderingContext2D;

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
  ctx.closePath();

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

  //* Path2D
  ctx.fillStyle = "crimson";
  ctx.strokeStyle = "chocolate";
  ctx.globalAlpha = 0.5;

  const customPath = new Path2D("M10 10 h 80 v 80 h -80 Z") as Path2D;
  ctx.stroke(customPath);

  const rectangle = new Path2D() as Path2D;
  rectangle.rect(10, 120, 50, 50);

  const circle = new Path2D() as Path2D;
  circle.arc(50, 220, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);

  //* Draw the ellipse
  ctx.strokeStyle = "coral";
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.ellipse(100, 300, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  //* Draw the ellipse's line of reflection
  ctx.beginPath();
  ctx.setLineDash([5, 5]);
  ctx.moveTo(0, 400);
  ctx.lineTo(400, 0);
  ctx.stroke();
  ctx.closePath();

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(0," + "0," + Math.ceil(20 + i * 20) + "," + (i + 1) / 10 + ")";
    ctx.fillRect(25 + i * 30, 455, 30, 30);
  }
}

//^ Canvas3
const canvas_3 = document.getElementById("myCan_3") as HTMLCanvasElement;
if (canvas_3.getContext) {
  const ctx = canvas_3.getContext("2d") as CanvasRenderingContext2D;
  // console.log("ctx:", ctx)
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = "rgb(" + Math.ceil(i * 20) + ",0,0)";
    ctx.fillRect(25 + i * 30, 25, 30, 30);
  }

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(0," + Math.ceil(i * 20) + ",0," + (i + 1) / 10 + ")";
    ctx.fillRect(25 + i * 30, 55, 30, 30);
  }

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(0," + Math.ceil(i * 20) + ",0, 0.75)";
    ctx.fillRect(25 + i * 30, 85, 30, 30);
  }

  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.strokeStyle = "rgb(" + Math.ceil(i * 20) + ",0, 0)";
    // ctx.lineCap = "square";
    // ctx.lineCap = "round";
    ctx.lineCap = "butt";

    ctx.beginPath();
    ctx.moveTo(50 + i * 20, 120);
    ctx.lineTo(50 + i * 20, 220);
    ctx.stroke();
    ctx.closePath();
  }

  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.setLineDash([15, 5]);
  ctx.rect(50, 300, 200, 100);
  ctx.stroke();
  ctx.closePath();

  //* Linear gradient - Gradient coordinates are global
  const linearGrade = ctx.createLinearGradient(300, 200, 600, 300);
  linearGrade.addColorStop(0, "blue");
  linearGrade.addColorStop(0.5, "yellow");
  linearGrade.addColorStop(1, "red");
  ctx.fillStyle = linearGrade;
  ctx.fillRect(300, 200, 300, 100);

  //* Radial gradient - Gradient coordinates are global
  const radialGrade = ctx.createRadialGradient(400, 450, 50, 420, 470, 100);
  radialGrade.addColorStop(0, "red");
  radialGrade.addColorStop(0.5, "yellow");
  radialGrade.addColorStop(1, "blue");
  ctx.fillStyle = radialGrade;
  ctx.fillRect(300, 400, 200, 100);

  //* Conic gradient - Gradient coordinates are global
  const conicGradient = ctx.createConicGradient(0, 150, 500);
  conicGradient.addColorStop(0, "red");
  conicGradient.addColorStop(0.25, "orange");
  conicGradient.addColorStop(0.5, "yellow");
  conicGradient.addColorStop(0.75, "green");
  conicGradient.addColorStop(1, "blue");
  ctx.fillStyle = conicGradient;
  ctx.fillRect(50, 420, 200, 160);
}

//^ Canvas4
const canvas_4 = document.getElementById("myCan_4") as HTMLCanvasElement;
if (canvas_4.getContext) {
  const ctx = canvas_4.getContext("2d") as CanvasRenderingContext2D;
  // console.log("ctx:", ctx);

  const img = new Image();
  // console.log("img:", img);
  img.onload = () => {
    // console.log("img loaded");
    ctx.drawImage(img, 0, 0, 550, 550);

    ctx.fillStyle = "blue";
    ctx.font = "italic bold 48px Arial";
    const myText = "Hello World!";
    // ctx.textAlign = "center";
    ctx.fillText(myText, 350, 50, 400);
    ctx.strokeText(myText, 350, 100, 400);
  };
  img.src = "img/img.png";
  // console.log("img:", img);
}

window.onload = function () {
  //^ Canvas5
  const canvas_5 = document.getElementById("myCan_5") as HTMLCanvasElement;
  if (canvas_5.getContext) {
    const ctx = canvas_5.getContext("2d") as CanvasRenderingContext2D;
    // console.log("ctx:", ctx);
    const newImage = document.getElementById("newImage") as HTMLImageElement;
    // console.log("newImage:", newImage);
    ctx.drawImage(newImage, 0, 0, 250, 250);

    //* Slicing images
    ctx.drawImage(newImage, 0, 0, 250, 250, 10, 300, 250, 250);

    //* Translate
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
        ctx.translate(300 + j * 50, 50 + i * 50);
        ctx.fillRect(0, 0, 25, 25);
        ctx.restore();
      }
    }

    //* Transform and setTransform
    const sin = Math.sin(Math.PI / 6);
    const cos = Math.cos(Math.PI / 6);
    ctx.translate(400, 400);
    let c = 0;
    for (let i = 0; i <= 12; i++) {
      c = Math.floor((255 / 12) * i);
      ctx.fillStyle = `rgb(${c}, ${c}, ${c})`;
      ctx.fillRect(0, 0, 100, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }

    //* Reset transformation matrix to the identity matrix -> ctx.resetTransform();
    // Skewed rectangles
    ctx.transform(1, 0, 1.7, 1, 0, 0);
    ctx.fillStyle = "orange";
    ctx.fillRect(40, 40, 50, 20);
    ctx.fillRect(40, 70, 50, 20);

    // Non-skewed rectangles
    ctx.resetTransform();
    ctx.fillStyle = "darkmagenta";
    ctx.fillRect(40, 40, 50, 20);
    ctx.fillRect(40, 90, 50, 20);
  }

  // //^ Canvas6
  const canvas_6 = document.getElementById("myCan_6") as HTMLCanvasElement;
  if (canvas_6.getContext) {
    const ctx = canvas_6.getContext("2d") as CanvasRenderingContext2D;

    //* Translate
    // Moved square
    ctx.translate(110, 30);
    ctx.scale(0.75, 0.75);
    ctx.rotate(-(5 * Math.PI) / 180);
    ctx.fillStyle = "orangered";
    ctx.fillRect(50, 300, 80, 80);
    // Reset current transformation matrix to the identity matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Unmoved square
    ctx.fillStyle = "dimgray";
    ctx.fillRect(50, 300, 80, 80);

    // * Save and Restore
    // Save the current state
    ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(10, 410, 100, 100);
    // Restore to the state saved by the most recent call to save()
    ctx.restore();
    ctx.fillRect(150, 440, 100, 100);

    // Save the current state
    ctx.save();
    ctx.scale(0.3, 0.3);
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(120, 60, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // Restore to the state saved by the most recent call to save()
    ctx.restore();

    ctx.save();
    ctx.translate(50, 50);
    ctx.fillStyle = "yellow";
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(320, 160, 70, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 260, 70, 0, 2 * Math.PI);
    ctx.fill;
    ctx.translate(50, 50);
    ctx.rotate(75);
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 200, 100);
    ctx.closePath();
    ctx.restore();

    //* Custom transformation
    let bgColor = 0;
    for (let x = 0; x < 30; x++) {
      bgColor = Math.floor((255 / 30) * x);
      // console.log({ bgColor });
      ctx.fillStyle = "rgb(" + bgColor + "," + bgColor + "," + bgColor + ")";
      ctx.fillRect(300, 200, 200, 100);
      ctx.setTransform(1, 0, 0, 1, x, x);
    }

    //* setTransform
    ctx.setTransform(1, 0.2, 0.8, 1, 0, 0);
    ctx.fillStyle = "deeppink";
    ctx.fillRect(100, 400, 100, 100);
  }

  //^ Canvas7 -> animation
  const canvas_7 = document.getElementById("myCan_7") as HTMLCanvasElement;
  if (canvas_7.getContext) {
    const ctx = canvas_7.getContext("2d") as CanvasRenderingContext2D;
    // console.log("ctx:", ctx);

    canvas_7.addEventListener("mousemove", clickDraw);
    let canvasWidth = canvas_7.width;
    let canvasHeight = canvas_7.height;
    // console.log({ canvasWidth, canvasHeight });

    let myx = 50;
    let myy = 200;
    let myr = 50;
    let x = 300;
    let y = 200;

    function clickDraw(event: MouseEvent) {
      // console.log({ event });
      x = event!.clientX;
      y = event!.clientY;
      draw();
    }

    function draw() {
      ctx.beginPath();
      if (x < myx) {
        myx = myx - 1;
      } else {
        myx = myx + 1;
      }
      if (y < myy) {
        myy = myy - 1;
      } else {
        myy = myy + 1;
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "red";
      ctx.arc(myx, myy, myr, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
      window.requestAnimationFrame(draw);
      // console.log("new Date().toLocaleTimeString():", new Date().toLocaleTimeString());
    }
  }
};

//^ Canvas8
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
const canvas_8 = document.getElementById("myCan_8") as HTMLCanvasElement;
if (canvas_8.getContext) {
  const ctx = canvas_8.getContext("2d") as CanvasRenderingContext2D;
  // console.log("ctx:", ctx);

  // Images
  const sun = new Image();
  const moon = new Image();
  const earth = new Image();

  function draw() {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 1288, 300);

    // Earth shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    // Earth orbit
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.lineWidth = 2;
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    const time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    // earth shadow
    ctx.fillRect(0, -12, 40, 24);
    ctx.drawImage(earth, -12, -12, 24, 24);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5, 7, 7);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    // Earth orbit
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
    ctx.stroke();

    // ctx.restore();
    ctx.drawImage(sun, 130, 130, 40, 40);

    window.requestAnimationFrame(draw);
  }

  //* Immediately Invoked Function Expression
  (function init() {
    sun.src = "./img/sun.jpg";
    moon.src = "./img/moon.jpg";
    earth.src = "./img/earth.jpg";
    window.requestAnimationFrame(draw);
  })();
}
