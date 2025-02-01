

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'


async function loadfilmes(ms) {
    const url = ms
    const resposta = await fetch(url) 
    const resp = await resposta.json()
    
    return resp.results

}

const filmes = loadfilmes(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)

const caixa = document.querySelector(".caixa")

filmes.then(function(va){
    va.map((el)=>{
        const divimg = document.createElement('div')
        divimg.setAttribute("class","Img")
        divimg.innerHTML = `
                        <img src= https://image.tmdb.org/t/p/original${el.poster_path} width=150px height=150px/>
                        <p> ${el.title}</p>

        `
        caixa.appendChild(divimg)
    })
    
})


//const cont = document.querySelector(".container")
const carro = document.querySelector(".carrossel")

const carrosselImagem=()=>{
    filmes.then(function(elemnt){
        num = 0
        elemnt.map((Imgslen=>{
            num++
            const contai = document.createElement('div')
            contai.setAttribute('class','container')
            contai.setAttribute('id',`div${num}`)

            contai.innerHTML = `<img src = https://image.tmdb.org/t/p/original${Imgslen.poster_path} >`

        
            carro.appendChild(contai) 
        }))
        

        idx = 0
        const conta = document.querySelectorAll(".container")
        console.log(conta)
        const eventos=()=>{
            

            for(let i = 0; i < conta.length; i++ ){

                //conta[i].style.display = 'none'
                conta[i].style.transform = 'translateX(0px)'
            }
            idx++

            if(idx > conta.length){

                idx = 1
            }

            //conta[idx-1].style.display = 'block'
            conta[idx-1].style.transform = `translateX(${300}px)`
            console.log(idx-1)

        }
        setInterval(eventos,2000)
    })
}

carrosselImagem()

















