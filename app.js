// emad

// manar

// laith

// duaa

// jafar

//when click on dropdown data show it instead of the placeholder "filter"

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

//toggle to class active once we clicked on the dropdown

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  const isdropdown = e.target.matches("[data-dropdpwn-button]");
  if (!isdropdown && e.target.closest("[data-dropdown]") != null) return "";
});

let arr = [
  { Title: "First Title", status: "incomplete", priority: "low priority" },
  { Title: "second Title", status: "completed", priority: "critical" },
  {
    Title: "Third Title",
    status: "completed",
    priority: "incomplete",
    priority: "Medium",
  },
];
let inComplete = document.getElementById("InCompleteDropdown");

inComplete.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.status.toLowerCase() === "incomplete";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let completedDropdown = document.getElementById("completedDropdown");

completedDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.status.toLowerCase() === "completed";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let CriticalDropdown = document.getElementById("CriticalDropdown");

CriticalDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "critical";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let MediumDropdown = document.getElementById("MediumDropdown");

MediumDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "medium";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let LowPrioritDropdown = document.getElementById("LowPrioritDropdown");

LowPrioritDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "low priority";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});
