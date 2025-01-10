




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


let divq = document.querySelector(".divq")
var cont = 0;



console.log(cont)

function lefts(){

    if(cont < 450){
    const el = cont+=5
    const str = el.toString()
    
    divq.style.left = str+'px'
    console.log(cont)
    }
}

function rights(){

    const e = cont-=5
    const str = e.toString()
    divq.style.left = str+'px'
    console.log(str)

}











