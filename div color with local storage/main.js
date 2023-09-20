/*let liarray = document.getElementsByTagName("li")
let red = document.getElementsByTagName("li")[0]
let green = document.getElementsByTagName("li")[1]
let blue = document.getElementsByTagName("li")[2]
let black = document.getElementsByTagName("li")[3]
let xp = document.getElementsByClassName("experiment")[0]





red.addEventListener("click", ()=> {
    for (var i = 0; i < liarray.length; i++) {
        liarray[i].classList.remove("active")
    }
    red.setAttribute("class", "active")
    xp.style.backgroundColor=red.getAttribute("data-color")
    window.localStorage.setItem("color",red.getAttribute("data-color"))
})
green.addEventListener("click", ()=> {
    for (var i = 0; i < liarray.length; i++) {
        liarray[i].classList.remove("active")
    }
    green.setAttribute("class", "active")
    xp.style.backgroundColor=green.getAttribute("data-color")
    window.localStorage.setItem("color",green.getAttribute("data-color"))
})
blue.addEventListener("click", ()=> {
    for (var i = 0; i < liarray.length; i++) {
        liarray[i].classList.remove("active")
    }
    blue.setAttribute("class", "active")
    xp.style.backgroundColor=blue.getAttribute("data-color")
    window.localStorage.setItem("color",blue.getAttribute("data-color"))
})
black.addEventListener("click", ()=> {
    for (var i = 0; i < liarray.length; i++) {
        liarray[i].classList.remove("active")
    }
    black.setAttribute("class", "active")
    xp.style.backgroundColor=black.getAttribute("data-color")
    window.localStorage.setItem("color",black.getAttribute("data-color"))
})
xp.style.backgroundColor=window.localStorage.getItem("color")
if (window.localStorage.getItem("color")) {
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).className="active"
}else{
    document.querySelector(`[data-color="red"`).className="active"
}






for (var i = 0; i < liarray.length; i++) {
    if (liarray[i].className == "active") {
        console.log(liarray[i].getAttribute("data-color"))
    }
}*/


const lis = document.querySelectorAll("ul li")
const exp = document.querySelector(".experiment")

if (window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.getItem("color")
    lis.forEach((li)=> {
            li.classList.remove("active")
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}
lis.forEach((li)=> {
    li.addEventListener("click", (li)=> {
        window.localStorage.setItem("color", li.currentTarget.getAttribute("data-color"))
        exp.style.backgroundColor = window.localStorage.getItem("color")

        lis.forEach((li)=> {
            li.classList.remove("active")
        })
        li.currentTarget.classList.add("active")
    })
})