




const evt = document.querySelector(".com")
let wid = document.querySelector(".contaiener")

let num = 0


console.log(evt.clientWidth)

function mover(){
    evt.style.transform = "rotate(0deg)"
    let num2 = num++
    let str = num2.toString()
    evt.style.left = str+'px'

    if(str == wid.clientWidth-50){
        evt.style.transform = "rotate(100deg)"
        
        num = 0
    }



setTimeout(mover,30)
}

mover()
