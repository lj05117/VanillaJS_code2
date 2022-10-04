var body = document.getElementsByTagName("body")[0];
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// window.onresize = function (event) {
//   if (window.innerWidth <= 1500) {
//     body.style.color = colors[1];
//   } else if (window.innerWidth <= 1000) {
//     body.style.color = colors[2];
//   } else {
//     body.style.color = colors[3];
//   }
// };
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1400) {
    document.body.style.backgroundColor = colors[0];
    alert(window.innerWidth);
  } else if (window.innerWidth <= 900) {
    document.body.style.backgroundColor = colors[1];
  }
});
