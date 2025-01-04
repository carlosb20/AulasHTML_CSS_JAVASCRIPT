


function simbolo(){
    const array = ['+','x','-']
    const len = array.length
    const num = Math.floor(Math.random()*len)
    const valor = array[num]
    return valor

}

function numeros(){

    const nu = Math.floor(Math.random() * 10)
    return nu
}


function calculos(){ 

    const H1 = document.querySelector(".H1")
    const val1 = numeros()
    const val2 = numeros()
    const simbo = simbolo()

    if(simbo == '+'){

        H1.innerHTML = `${val1} ${"+"} ${val2} = `
        return val1 + val2

    }else if(simbo == 'x'){

        H1.innerHTML = `${val1} ${"x"} ${val2} = `
        return val1 * val2
    }else{

        H1.innerHTML = `${val1} ${"-"} ${val2} = `
        return val1 - val2

    }
}

var valor = 0;
var cont1 = 0;
var cont2 = 0

function gera_calculos(){

    valor = calculos()
}

gera_calculos()


document.querySelector("#for_").addEventListener('submit',(el)=>{
el.preventDefault()

const sp1 = document.querySelector("#span1")
const sp2 = document.querySelector("#span2")

const getinput = document.querySelector("#input")

if(!(getinput.value == '')){

    var num_i = parseInt(getinput.value)

    console.log(valor)
    console.log(getinput.value)


    if(num_i == valor){

        sp1.innerHTML = ++cont1
        
        
    }else{

        sp2.innerHTML = ++cont2
        
        
    }

        document.querySelector("#input").value = ''
        gera_calculos()

}else{
    alert('digita um numero')
}
    
})


















