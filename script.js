
// Chenge Background color
let index = 0;

document.getElementById("color-theme").addEventListener("click", function() {
  let colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-purple-50", "bg-gray-200", "bg-orange-100", "bg-amber-50", "bg-lime-100", "bg-cyan-200", "bg-fuchsia-200", "bg-pink-100"];
  

  this.classList.remove("bg-indigo-50");
  this.classList.add(colors[index]);

  document.body.classList.remove("bg-indigo-50");
  document.body.classList.add(colors[index]);

  index = (index + 1) % colors.length;
});


// Buttons Alart
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    alert(`Board Updated Successfully`);
  });
});