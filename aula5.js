

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'

async function dadosAPI(params) {  
    try{
        const dados =  await  fetch(params)
        const respon = await dados.json()
        return respon.results

    }catch(error){
        alert('erro', error)
    }
}

const getdados = dadosAPI(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)


getdados.then(function(le){
    const carro = document.querySelector(".carrossel")
    le.map((element)=>{
        const divig = document.createElement("img")
        //console.log(element.backdrop_path)
        divig.setAttribute("src",`https://image.tmdb.org/t/p/original${element.backdrop_path}`)
        divig.setAttribute("id","Imgs")
        carro.appendChild(divig)
    })

    const imgs = document.getElementById("imgss")
    const img = [...document.querySelectorAll("img")]


    let idx = 0

    function carrossell(){
        idx++;

        if(idx > img.length -1){

            idx = 0
        }
        imgs.style.transform = `translateX(${-idx * 500}px)`
       
    }
    setInterval(carrossell,2500)
})

/* ---------------------------------------------------------------------  */

let valsoma = 0;
let acerto = 1;
let erro = 1;

class Matematica{
    
    simbolo() {
        let array = ['+','-','x']
        let len = array.length
        let num = Math.floor(Math.random()*len)
        let simbo = array[num]
        return simbo
        
    }
    numero(){

        let val = Math.floor(Math.random()*10)
        return val
    }
    soma(){
        
        let ver = document.querySelector("#ver")
        if(this.simbolo() == "+"){
            const num1 = this.numero()
            const num2 = this.numero()
            ver.innerHTML = `${num1} + ${num2} = `
            console.log(`${num1} + ${num2}`)
            return num1 + num2
        }
        if(this.simbolo() == "-"){
            const num1 = this.numero()
            const num2 = this.numero()
            ver.innerHTML = `${num1} - ${num2} = `
            console.log(`${num1} - ${num2}`)
            return num1 - num2
        }else{
            const num1 = this.numero()
            const num2 = this.numero()
            ver.innerHTML = `${num1} x ${num2} = `
            console.log(`${num1} x ${num2}`)
            return num1 * num2
        }
    }
    rodajogo(){

        valsoma = this.soma()
    }
}


const sim = new Matematica()


/* ---------------------------------------------------------------------  */

const  bt = document.querySelector(".bt")
const input = document.querySelector("#input")



sim.rodajogo()

bt.addEventListener("click",(ele)=>{
    ele.preventDefault()

    if(input.value != ''){

        let numint = parseInt(input.value)

        if(numint == valsoma){
            const spa1 = document.querySelector("#spa1")
            const incremento = acerto++
            spa1.innerHTML = `Acerto = ${incremento}`
            console.log('ok')   
        }else{
            const spa2 = document.querySelector("#spa2")
            let decremento = erro++
            spa2.innerHTML = `Erros = ${decremento}`
        }

        
    }else{
        alert('ERRO ! Digita um Numero ')
        
    }
    sim.rodajogo()
    input.focus()
    input.value = ''

})
























