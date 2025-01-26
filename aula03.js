

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



//https://api.themoviedb.org/3/movie/550?api_key=6d9a1e25dbcb17a0e630bab33da79bce

var divfilmes = document.querySelector(".filmes")

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'
const liguagem = 'pt-BR'

//https://api.themoviedb.org/3/discover/movie

/*
async function App_filmes(){
    const urlf = `https://api.themoviedb.org/3/movie/550?api_key=${key}`
    const getresponse = await  fetch(urlf)
    const getok = await getresponse.json()

    //console.log(getok.production_companies)

    const arrayfilmes = getok.production_companies

    

    arrayfilmes.map((le,i)=>{
        const crediv = document.createElement('div')
        crediv.setAttribute('id','imgA')
        

        console.log(le)

       // console.log(le.id)

        crediv.innerHTML =` <img src= https://image.tmdb.org/t/p/original${le.logo_path} width=150px height=150px/>
                            <p>id: ${le.id} </p>
                            <p> Filme: ${le.name}</p>
        `

        divfilmes.appendChild(crediv)
    })  
   
}

App_filmes()
*/


async function App_filmes(){
    const urlf = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`
    const getresponse = await  fetch(urlf)
    const getok = await getresponse.json()

    console.log(getok)

}


//-------------------------------------------------------------------------------------------

const url =`https://api.themoviedb.org/3/discover/movie?api_key=${key}`
const options = {
  method: 'GET',
  language: 'pt-BR',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDlhMWUyNWRiY2IxN2EwZTYzMGJhYjMzZGE3OWJjZSIsIm5iZiI6MTczNzU4ODk4NS42ODgsInN1YiI6IjY3OTE4MGY5YTdmMjcxMzBiYjI4YzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6kqXgHHYwYI-J2C5ybk5jGis_s8wUZkKaF8Ng2okfyU'
  }
};

async function Filmes(){
    const cime =  await fetch(url, options)
    const res = await cime.json()

   console.log(options)
    const filmes = res.results
    
    filmes.map((el)=>{
        const divf = document.createElement('div')
        divf.setAttribute('class','imgfilmes')
        
        divf.innerHTML = `<img src= https://image.tmdb.org/t/p/original${el.poster_path} width=150px height=150px/>
                        <p> ${el.title} </p>
                        <p>${el.original_language}</p> 

        `
    
        //console.log(el)
        divfilmes.appendChild(divf)
    })


}

Filmes()












