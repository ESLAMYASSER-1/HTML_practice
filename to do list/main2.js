/* [1] let all elements
[2] addEventListener for inf
[3] addEventListener for add empty
[4] addEventListener for add button
[5] local storage*/

const input = document.querySelector(".task")
const add = document.querySelector(".btn")
const tasksCon = document.querySelector(".tasks")
const error = document.querySelector(".alert")
const inf = document.querySelector(".alertt")
const closeinf = document.querySelector("#closeinf")
const closeerror = document.querySelector(".close")
const infbtn = document.querySelector("#inf")
var arr = []

if (window.localStorage.getItem("tasks")) {
    arr=JSON.parse(window.localStorage.getItem("tasks"))
}
fromlocalStorage()

tasksCon.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delbtn")){
        e.target.parentElement.remove()
        deltask(e.target.parentElement.getAttribute("data-id"))
    }
    if (e.target.classList.contains("task")) {
        completeinlocal(e.target.getAttribute("data-id"))
        e.target.classList.toggle("active")
    }
})

add.addEventListener("click", addtask)


//button events
closeerror.addEventListener("click", closeerrorr)
infbtn.addEventListener("click", infshow)
closeinf.addEventListener("click", infhide)

//"""""""""""""""//


function addtask() {
    if (input.value.trim() == "") {
        error.style.display = "block"
    } else {
        addtoarr(input.value)
        input.value=""
    }
}

//functions
function closeerrorr() {
    error.style.display = "none"
}

function infshow() {
    inf.style.display = "block"
}

function infhide() {
    inf.style.display = "none"
}


/////////////////////

//function to add to arr
function addtoarr(taskText){
    const task={
        id:Date.now(),
        title:taskText,
        complete:false,
    };
    arr.push(task)
    //add to page 
    eletopagefrom(arr)
    //add to localstorage
    toLocalStorage(arr)
}

//function add to body
function eletopagefrom(arr){
    tasksCon.innerHTML=""
    
    arr.forEach((task)=>{
        let maindiv =document.createElement("div")
        maindiv.classList.add("flex-row")
        if (task.complete) {
            maindiv.classList.add("active")
        }
        maindiv.setAttribute("data-id",task.id)
        let taskdiv =document.createElement("div")
        maindiv.appendChild(taskdiv)
        taskdiv.appendChild(document.createTextNode(task.title))
        taskdiv.classList.add("task")
        let delbtn= document.createElement("button")
        delbtn.classList.add("delbtn")
        delbtn.innerText="Delete"
        maindiv.appendChild(delbtn)
        tasksCon.appendChild(maindiv)
    })
}
//function add to localstorage
function toLocalStorage(arr){
    window.localStorage.setItem("tasks",JSON.stringify(arr))
}
function fromlocalStorage(){
    let data =window.localStorage.getItem("tasks")
    if (data) {
        let tasks= JSON.parse(data);
        eletopagefrom(tasks)
    }
}
function deltask(taskId){
    arr= arr.filter((task)=>task.id != taskId);
    toLocalStorage(arr)
}
function completeinlocal(taskId){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == taskId) {
            arr[i].complete === false ? (arr[i].complete = true) : (arr[i].complete = false)
        }
    }
    toLocalStorage(arr)
}