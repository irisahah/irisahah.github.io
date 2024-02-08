let para1 = document.getElementById("para1"); //Kui ei leia elementi, siis konsoolis NULL / UNDEFINED
console.log(para1);
para1.innerHTML = "Hello World!"; // innerHTML - muudab elemendi sisu comp lehe html fail
para1.style.color= "red"

let para2 = document.getElementById("para2"); 
console.log(para1);
para2.innerHTML = "Hello World!";
para2.style.color= "blue"
para2.style.fontSize="25px"

let ToDoList = document.getElementsByClassName("todoel");
console.log(ToDoList);
for(let i = 0; i < ToDoList.length; i++) {
    let currentTodo = ToDoList[i];
    currentTodo.innerHTML = currentTodo.innerHTML + " - Tehtud";
}

function CompleteToDo() {
    let ToDoList = document.getElementsByClassName("todoel");
    let completedItem = document.getElementById("doneToDo").value -1;
    let errorEl = document.getElementById("ToDoError");
    
    console.log(Number.isInteger(completedItem));
    //Kas see on täisarv?
    //Kas see EI OLE täisarv? Kasuta !
    if(!Number.isInteger(completedItem)) {
        errorEl.style.display = "block";
        return;
    }

    if(completedItem >= 6) {
        errorEl.style.display = "block";
        return;
    } else {
        let errorEl = document.getElementById("ToDoError");
        errorEl.style.display = "none";
    }

    // Tegevused elemendiga
    ToDoList[completedItem].innerHTML = ToDoList[completedItem].innerHTML + " - Tehtud";
    console.log(completedItem);
}



//MATEMAATIKA

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let genNum1 = 0;
let genNum2 = 0;

let correctAns = 0;
let life = 3; // Ehk katsed



function xAnswer() {
    let x = document.getElementById("x").value;
    let ansX = document.getElementById("ansX");
    let corAns = document.getElementById("corAns");
    let lives = document.getElementById("lives");
    ansX.innerHTML = x;
    if(genNum1 + genNum2 == x) {
        correctAns++;
        // Kontrolli, kas õigete vastuste arv on viiega jagatav
        if(correctAns % 5 == 0) {
            life++; // Suurenda elude arvu
            lives.innerHTML = life; // Uuenda elude arvu HTML-is
        }
        ansX.className = "";
        //ansX.className = "bg-success";
        Start();
    } else {
        life--;
        ansX.className = "bg-danger";
    }
    corAns.innerHTML = correctAns;
    lives.innerHTML = life;
}

function GenerateRandomNumber(min, max) {
    /*
        1.6 - 2
        1.5 - 2
        1.4 - 1
        floor - siis kogu aeg tee arv väiksemaks
        round - siis tavaline matemaatika loogika ümardamiseks
        ceil - siis kogu aeg tee arv suuremaks
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

function Start() {
    let difficulty = document.querySelector("input[name='difficulty']:checked").value;
    switch (difficulty) {
        case "easy":
            genNum1 = GenerateRandomNumber(1, 11);
            genNum2 = GenerateRandomNumber(1, 11);
            break;
        case "medium":
            genNum1 = GenerateRandomNumber(1, 51);
            genNum2 = GenerateRandomNumber(1, 51);
            break;
        case "hard":
            genNum1 = GenerateRandomNumber(1, 1000001);
            genNum2 = GenerateRandomNumber(1, 1000001);
            break;
        default:
            break;
    }
    num1.innerHTML = genNum1;
    num2.innerHTML = genNum2;
    ansX.innerHTML = "x";
    let x = document.getElementById("x");
    let doneBtn = document.getElementById("doneBtn");
    x.value = "";
    x.disabled = false;
    doneBtn.disabled = false;
}









