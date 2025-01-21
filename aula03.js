

const classdivs = [...document.querySelectorAll(".divs")]
const nomep = document.querySelector("#inputnome")
const cpf = document.querySelector("#inputcpf")
const btn = document.querySelector("#btn")

const classcont2 = [...document.querySelectorAll(".cont2")]



let dados = []


const pega=()=>{
    dados.push([nomep.value,cpf.value])
    nomep.value = ''
    cpf.value = ''
    console.log(dados)
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


classcont2.map((eles,i)=>{
    const xa = [...eles.children]
     
    xa.map((cal,i)=>{
        const sal = cal.children[0]
        sal.setAttribute("id","c"+i)
        sal.addEventListener("click",(gas)=>{
            const mo = gas.target.parentNode
            mo.remove()
        })
        
    }) 
    
})


url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"


async function cotacao(){

    const h2 = document.querySelector("#h2")
    const inputpesquisa = document.querySelector("#pes")


    const respo = await fetch(url)
    const resposta = await respo.json()
    console.log(resposta)
    console.log(inputpesquisa.value)
}





