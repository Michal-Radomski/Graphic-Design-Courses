// console.log("test");

const ns = "http://www.w3.org/2000/svg";
const svgJs = document.querySelector("#svg-js");
// console.log("svgJs:", svgJs);

const svg = document.createElementNS(ns, "svg");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "100%");
svg.setAttributeNS(null, "viewBox", "0 0 200 200");
// console.log("svg:", svg);

svgJs.appendChild(svg);
// console.log("svgJs:", svgJs);

const circle = document.createElementNS(ns, "circle");
// console.log("circle:", circle);
circle.setAttributeNS(null, "width", 100);
circle.setAttributeNS(null, "height", 100);
circle.setAttributeNS(null, "fill", "#f06");
circle.setAttributeNS(null, "cx", "50%");
circle.setAttributeNS(null, "cy", "50%");
circle.setAttributeNS(null, "r", "50px");
// console.log("circle:", circle);
svg.appendChild(circle);

// console.log("svg:", svg);
// console.log("svgJs:", svgJs);

setTimeout(() => {
  circle.setAttribute("fill", "green");
}, 1000);
