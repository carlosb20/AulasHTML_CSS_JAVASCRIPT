

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


//url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"



async function cotacao(){

    const h2 = document.querySelector("#h2")
    const inputpesquisa = document.querySelector("#pes")
    const pval = document.querySelector("#pval")
    const rodape = document.querySelector(".rodape")

    
url2 =  `https://economia.awesomeapi.com.br/last/${inputpesquisa.value}-BRL`

    const respo = await fetch(url2)
    const resposta = await respo.json()
    const str = inputpesquisa.value.toUpperCase()+"BRL"

    if(respo.status == 200){
        rodape.style.opacity = '1'
        //console.log(resposta)
        h2.innerHTML = `Moeda ( ${resposta[str].name})`
        pval.innerHTML = `Valor da Moeda ${resposta[str].bid}`

    }else{

        alert('ERRO ! Moeda não encontrada')
    }
    inputpesquisa.value = ''
    inputpesquisa.focus()
}





