/*let maindiv =document.createElement("div");
maindiv.style.backgroundColor ="#333"
maindiv.style.display="flex"
maindiv.style.flexDirection="row"
maindiv.style.flexWrap="wrap"
maindiv.style.textAlign="center"
maindiv.style.alignItems="space-between"
maindiv.style.alignContent="center"
maindiv.style.justifyContent="space-between"
maindiv.style.padding="7px"
document.body.appendChild(maindiv)

for (var i = 1; i <=15; i++) {
    var div = document.createElement(`div`);
    maindiv.appendChild(div);
    var text =document.createTextNode(`${i}`)
    div.appendChild(text);
    var p =document.createElement("p");
    div.appendChild(p);
    var ptext =document.createTextNode("product");
    p.appendChild(ptext)
    div.style.width="33%"
    div.style.backgroundColor="#ffffff"
    div.style.margin="7px 0"
    div.style.padding="10px 0 0 0"
};
var lable = document.createElement("div")
var copyp =document.createTextNode(" Copy Right 2021 ")
lable.appendChild(copyp)
lable.style.display="block"
lable.style.width="100%"
lable.style.height="20px"
lable.style.backgroundColor="lightgreen"
lable.style.textAlign="center"
lable.style.verticalAlign="middle"
lable.style.padding="20px"


document.body.appendChild(lable)*/


/*let arr=[]
arr=prompt("Enter Number From-To")
nums= arr.split("-")
num1=parseInt(nums[0])
num2=parseInt(nums[1])

if (num1<num2) {
   for (num1; num1<=num2; num1++) {
       console.log(num1)
   }
}else{
   for (num1; num1>=num2; num1--) {
       console.log(num1)
   }
}
*/


let btn = document.getElementById("close")

let alertbox = document.getElementsByClassName("main")[0]
let count = document.getElementsByTagName("p")[0]



btn.addEventListener("click", function() {
    alertbox.style.display = "none"
    clearInterval(handl)
})

setTimeout(function mine() {
    alertbox.style.display = "flex"
}, 4000);

let handl=setInterval(function wait(){
   setTimeout(function wait(){ count.innerText--
    if (count.innerText<=0) {
      clearInterval(handl)
      window.location.replace("https://www.google.com/")
    }
    console.log(count.innerText)},4000)
},1000);

/*
document.onload= mine()=>{
    alertbox.style.display="none"
}*/