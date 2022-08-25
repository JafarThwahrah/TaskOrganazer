// emad

// manar

// laith
function Task(title, description, priority) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.status = "incomplete";
  this.id = new Date().getTime();
}

let allCards = [];

let allTasks = [];

let form = document.getElementById("newTaskForm");

function render(event) {
  event.preventDefault();

  let title = event.target.Title.value;
  let description = event.target.Description.value;
  let priority = event.target.Radio.value;

  let taskCard = new Task(title, description, priority);
  allTasks.push(taskCard);
  saveToLocal();

  addCard(taskCard);
  document.getElementById("newTaskForm").reset();
}

form.addEventListener("submit", render);

let userName = "laith"; // example for testing, actual username is from manar

function saveToLocal() {
  let stringArr = JSON.stringify(allTasks);
  localStorage.setItem(userName, stringArr);
}
function getFromLocal() {
  let jsonArr = localStorage.getItem(userName);
  let objArr = JSON.parse(jsonArr);

  if (objArr !== null) {
    objArr.forEach((element) => {
      allTasks = objArr;
      addCard(element);
    });
  }
}
getFromLocal();
// duaa
let cardRow = document.getElementById("card-row");
// bootstrap tooltip
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
// let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
// 	return new bootstrap.Tooltip(tooltipTriggerEl);
// });

// addCard function to add cards from form
let cardContainer = document.getElementById("card-container");

function addCard(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("col-sm-4");

  taskCard.innerHTML = `
    <div class="box ${colorClass(task.priority)}" data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="${task.priority}">
    <a href="" class="delete-btn" style="color: black" 
    >
    <img src="./duaa-images/trash-outline.svg" id= "${task.id}" name="id">
     </a>
    <a href="" class="edit-btn" style="color: black"
        ><img src="./duaa-images/create-outline.svg"></a>
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <a
        href=""
        id="check-btn"
        style="color: rgba(50, 85, 51, 0.321)"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
        </svg>
    </a>
    </div>
  
    `;

  task.element = taskCard;
  allCards.push(task);
  // console.log(allCards)

  document.getElementById("card-row").appendChild(taskCard);

  // function to delete each element
  let deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      let deleteId = e.target.id;
      console.log(deleteId);
      console.log(allTasks);
      allTasks = allTasks.filter((ele) => {
        return ele.id == deleteId ? false : true;
      });
      console.log(allTasks);
      saveToLocal();
      // localStorage.setItem(userName, JSON.stringify(allTasks));
      cardRow.innerHTML = "";
      getFromLocal();
      // let jsonArr = localStorage.getItem(userName);
      // let arr = JSON.parse(jsonArr);
      // allTasks = arr;
      // arr.forEach((ele) => {
      // 	addCard(ele);
      // });
    });
  });
}
// function to change top border color of cards based on priority
function colorClass(priority) {
  switch (priority) {
    case "Critical":
      return "red";
    case "Normal":
      return "orange";
    case "Low priority":
      return "blue";
  }
}

// const editBtn = document.querySelector(".edit-btn");

// function to delete all cards

// function to switch between completed and incomplete

// jafar




function displayCards(filteredArray) {

  filteredArray.forEach((ele) => {
    if(ele.style.display == "none"){
      ele.style.display = "block";

    }else{
    ele.style.display = "none";
  }  })


}














//when click on dropdown data show it instead of the placeholder "filter"

console.log(allCards);

function show1(firstDropdownvalue) {
  document.querySelector(".textBox1").value = firstDropdownvalue;
}

function show2(secondDropdownvalue) {
  document.getElementById("TextBox2").value = secondDropdownvalue;
}

//toggle to class active once we clicked on the dropdown

let dropdown1 = document.getElementById("filterByStatus");
dropdown1.onclick = function () {
  dropdown1.classList.toggle("active");
};
  
 
let dropdown2 = document.getElementById("filterByPriority");
dropdown2.onclick = function () {
  dropdown2.classList.toggle("active");
};

let inComplete = document.getElementById("InCompleteDropdown");
inComplete.addEventListener("click", (event) => {
  event.preventDefault();

  let otherFilterValue = document.querySelector(".textBox1").value;
  // let firstCondition = document.querySelector(".textBox1").value;
  //  let secondCondition = document.querySelector(".textBox2").value;

  

  filteredArray = allCards.filter((card) => card.priority == otherFilterValue);

  console.log(filteredArray.length);
  console.log(otherFilterValue);

  if (filteredArray.length == 0) {
    allCards.forEach((card) => {
      const visible = card.status.toLowerCase() === "incomplete";
      if (visible != true) {
        card.element.style.display = "none";
      } else {
        card.element.style.display = "block";
      }
    });
  } else {
    filteredArray.forEach((card) => {
      const visible = card.status.toLowerCase() === "incomplete";
      if (visible === true) {
        card.element.style.display = "block";
      } else {
        card.element.style.display = "none";
      }
    });
  }
});

let completedDropdown = document.getElementById("completedDropdown");

completedDropdown.addEventListener("click", (event) => {
  event.preventDefault();

  let otherFilterValue = document.querySelector(".textBox1").value;
  console.log(allCards.filter((card) => card.priority == otherFilterValue));
  let filteredArray = allCards.filter(
    (card) => card.priority == otherFilterValue
  );

  console.log(filteredArray.length);

  if (filteredArray.length == 0) {
    allCards.forEach((card) => {
      const visible = card.status.toLowerCase() === "completed";
      if (visible != true) {
        card.element.style.display = "none";
      } else {
        card.element.style.display = "block";
      }
    });
  } else {
    filteredArray.forEach((card) => {
      const visible = card.status.toLowerCase() === "completed";
      if (visible === true) {
        card.element.style.display = "block";
      } else {
        card.element.style.display = "none";
      }
    });
  }
});

let CriticalDropdown = document.getElementById("CriticalDropdown");

CriticalDropdown.addEventListener("click", (event) => {
  event.preventDefault();

  let otherFilterValue = document.querySelector(".textBox2").value;
  console.log(allCards.filter((card) => card.status == otherFilterValue));
  let filteredArray = allCards.filter(
    (card) => card.status == otherFilterValue
  );

  console.log(filteredArray.length);

  if (filteredArray.length === 0) {
    allCards.forEach((card) => {
      const visible = card.priority.toLowerCase() === "critical";
      if (visible != true) {
        card.element.style.display = "none";
      } else {
        card.element.style.display = "block";
      }
    });
  } else {
    filteredArray.forEach((card) => {
      const visible = card.priority.toLowerCase() === "critical";
      if (visible === true) {
        card.element.style.display = "block";
      } else {
        card.element.style.display = "none";
      }
    });
  }
});

let MediumDropdown = document.getElementById("MediumDropdown");

MediumDropdown.addEventListener("click", (event) => {
  event.preventDefault();

  let otherFilterValue = document.querySelector(".textBox2").value;
  console.log(allCards.filter((card) => card.status == otherFilterValue));
  let filteredArray = allCards.filter(
    (card) => card.status == otherFilterValue
  );

  console.log(filteredArray.length);

  if (filteredArray.length == 0) {
    allCards.forEach((card) => {
      const visible = card.priority.toLowerCase() === "normal";
      if (visible != true) {
        card.element.style.display = "none";
      } else {
        card.element.style.display = "block";
      }
    });
  } else {
    filteredArray.forEach((card) => {
      const visible = card.priority.toLowerCase() === "normal";
      if (visible === true) {
        card.element.style.display = "block";
      } else {
        card.element.style.display = "none";
      }
    });
  }
});

let LowPrioritDropdown = document.getElementById("LowPrioritDropdown");

LowPrioritDropdown.addEventListener("click", (event) => {
  event.preventDefault();

  let otherFilterValue = document.querySelector(".textBox2").value;
  console.log(allCards.filter((card) => card.status == otherFilterValue));
  let filteredArray = allCards.filter(
    (card) => card.status == otherFilterValue
  );

  console.log(filteredArray.length);

  if (filteredArray.length == 0) {
    allCards.forEach((card) => {
      const visible = card.priority.toLowerCase() === "low priority";
      if (visible != true) {
        card.element.style.display = "none";
      } else {
        card.element.style.display = "block";
      }
    });
  } else {
    filteredArray.forEach((card) => {
      const visible = card.priority.toLowerCase() === "low priority";
      if (visible === true) {
        card.element.style.display = "block";
      } else {
        card.element.style.display = "none";
      }
    });
  }
});

let RefreshFilter1 = document.getElementById("RefreshFilter1");

RefreshFilter1.addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});

let RefreshFilter2 = document.getElementById("RefreshFilter2");

RefreshFilter2.addEventListener("click", (event) => {
  event.preventDefault();
  location.reload();
});
