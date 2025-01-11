
const evt = document.querySelector(".com")
let wid = document.querySelector(".contaiener")


function criardiv(){

    let div01 =document.createElement('div')
    div01.style.width = '40px'
    div01.style.height = '40px'
    div01.style.position = 'relative'
    div01.style.backgroundColor = 'blue'
    div01.style.bottom = '50px'
    
    div01.style.top = '300px'
    div01.style.left = '10px'
    
    evt.appendChild(div01)

    //overflow
}
criardiv()


let num = 0
function mover(){
    
    let num2 = num++
    let str = num2.toString()
    evt.style.left = str+'px'
    if(str == wid.clientWidth-50){
        num = 0
    }
    setTimeout(mover,10)
}

mover()


let divq = document.querySelector(".divq")
var cont = 0;

function lefts(){

    if(cont < 450){
        const el = cont+=5
        const str = el.toString()
        divq.style.left = str+'px'
        
    }
}

function rights(){
    if(cont > 0){
        const e = cont-=5
        const str = e.toString()
        divq.style.left = str+'px'
        console.log(str)
    }

}










