

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


const cont = document.querySelector(".container")

const carrosselImagem=()=>{

    filmes.then(function(elemnt){
        elemnt.map((Imgslen=>{
            const imgs = document.createElement('img')
            imgs.setAttribute('id','foto')
            //imgs.setAttribute('src',`https://image.tmdb.org/t/p/original${elemnt.poster_path}`)

            imgs.src = `https://image.tmdb.org/t/p/original${Imgslen.poster_path}`

            //imgs.style.width = '900px'
            //imgs.style.height = '500px'

            cont.appendChild(imgs)

        }))
        
    })
}

carrosselImagem()

















