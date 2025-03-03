
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


// For show today Weak and Date
const today = new Date();
const dayNames = ["Sun ,", "Mon ,", "Tue ,", "Wed ,", "Thu ,", "Fry ,", "Sat ,"];
const dayName = dayNames[today.getDay()];

const dateBox = today.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

document.getElementById("day").textContent = dayName;
document.getElementById("date").textContent = dateBox;

// Buttons Alart
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    alert("Board Updated Successfully");
  });
});


// Addition and subtraction Numbers
const sub_num = document.getElementById("subtraction");
const add_num = document.getElementById("addition");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const value = parseInt(button.getAttribute("data-value"));
    let subtraction = parseInt(sub_num.textContent);
    let addition = parseInt(add_num.textContent);


    if (subtraction >= value) {
      subtraction -= value;
      addition += value;
      sub_num.textContent = subtraction;
      add_num.textContent = addition;

      button.disabled = true;
      button.classList.add("bg-gray-400", "cursor-not-allowed");
    }

    else {
      alert("You Have Fulfilled Your Opportunities!")
    };
  });
});


// Activity Logs

const activityLog = document.getElementById("activityLog");
const clearHistory = document.getElementById("clearHistory")

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const taskName = button.getAttribute("data-log");
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const dataEntry = document.createElement("div");
    dataEntry.classList.add("w-full", "h-20", "text-sm", "bg-indigo-50", "rounded-lg", "p-5", "mb-6");
    dataEntry.innerHTML = `You have completed the task "${taskName}" at ${time}`;
    activityLog.prepend(dataEntry);
  });
});


// Clear History
clearHistory.addEventListener("click", function () {
  activityLog.innerHTML = "";
});