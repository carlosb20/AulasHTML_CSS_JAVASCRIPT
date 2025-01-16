

const inputs = [...document.querySelectorAll("input[type=text]")]
const classdivs = [...document.querySelectorAll(".divs")]

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


const mover=()=>{
    classdivs.map((dele)=>{
        dele.classList.remove("destaque")
        
    })
}


classdivs.map((item)=>{
    item.addEventListener("click",(sa)=>{
        mover()
        const val = sa.target
        console.log(sa.target.textContent)
    
        val.classList.add("destaque")

    })

})

console.log(dados)















