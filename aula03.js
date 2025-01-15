

const inputs = [...document.querySelectorAll("input[type=text]")]

const btn = document.querySelector("#btn")

let dados = []




const pega=()=>{
    inputs.forEach((el)=>
        dados.push(el.value)    
)
    inputs[0].focus()
    inputs.forEach((ap)=>
        ap.value = ''
    )
}

console.log(dados)
















