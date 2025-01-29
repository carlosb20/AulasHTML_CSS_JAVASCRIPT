

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

        console.log(el)
        const divimg = document.createElement('div')
        divimg.setAttribute("class","Img")
        divimg.innerHTML = `
                        <img src= https://image.tmdb.org/t/p/original${el.poster_path} width=150px height=150px/>
                        <p> ${el.title}</p>

        `

        caixa.appendChild(divimg)
    })
    
})
