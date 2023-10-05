const Button = document.querySelector(".img")

const eDay   = document.querySelector(".da")
const eMonth   = document.querySelector(".mo")
const eYear   = document.querySelector(".ya")

const oDay   = document.querySelector(".dd")
const oMonth   = document.querySelector(".mm")
const oYear   = document.querySelector(".yy")

const myDate = new Date();;

let currYear = myDate.getFullYear() 
let currDay = myDate.getDate()
let currMonth = myDate.getMonth() +1


Button.addEventListener("click" , ()=>{
    if (eYear.value > currYear){
        eDay.textContent = "!!"
        eDay.style.color = "red";
    }else{
    oYear.textContent = (currYear - eYear.value) ;  

}
})


