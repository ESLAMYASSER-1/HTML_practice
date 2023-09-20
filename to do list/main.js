const input = document.querySelector(".task")
const addtask = document.querySelector(".btn")
const alltaskscon = document.querySelector(".tasks")
const error = document.querySelector(".alert")
const closeerror = document.querySelector(".close")
const inf = document.querySelector(".alertt")
const closeinf = document.querySelector(".closeinf")
arr = []

if (window.localStorage.getItem("tasks")) {
    arr=JSON.parse(window.localStorage.getItem("tasks"))
}
addtasktobage(arr)

addtask.addEventListener("click", ()=> {
    if (input.value.trim() == "") {
        error.style.display = "block"
    } else {
        addtasktoarr(input.value)
        input.value = ""
    }
})


// Functions
closeerror.addEventListener("click", ()=> {
    error.style.display = "none"
})


// Function to add task to array
function addtasktoarr(tasktext) {
    const task = {
        id: Date.now(),
        title: tasktext,
        complete: false,
    }
    arr.push(task)
    addtasktobage(arr)
    addtasktostorage(arr)
}
// Function to add task to window
function addtasktobage(arr) {
    alltaskscon.innerHTML=""
    arr.forEach((task)=> {
        let taskcon = document.createElement("div")
        taskcon.classList.add("flex-row")
        taskcon.setAttribute("data-id",task.id)
        if (task.complete) {
            taskcon.classList.add("active")
        }
        let taskdiv = document.createElement("div")
        taskdiv.classList.add("task")
        let tasktext = document.createTextNode(task.title)
        let delbtn = document.createElement("button")
        delbtn.classList.add("delbtn")
        delbtn.innerText="Delete"
        taskdiv.appendChild(tasktext)
        taskcon.appendChild(taskdiv)
        taskcon.appendChild(delbtn)
        alltaskscon.appendChild(taskcon)
    })
}
function addtasktostorage(arr){
    window.localStorage.setItem("tasks",JSON.stringify(arr))
}

alltaskscon.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delbtn")) {
        deltaskfromstorage(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.remove()
    }
    if (e.target.classList.contains("task")) {
        completeinstorage(e.target.getAttribute("data-id"))
        e.target.classList.toggle("active")
        
    }
})

function deltaskfromstorage(taskId){
    arr =arr.filter((task)=>task.id != taskId)
    addtasktostorage(arr)
}
function completeinstorage(taskid){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == taskid) {
            arr[i].complete == false ? arr[i].complete= true:arr[i].complete= false;
            console.log(`${arr[i].complete}`)
        }
    }
    addtasktostorage(arr)
}