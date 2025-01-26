


 

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'


async function Filmes02(mgs) {

    const url = mgs
    const resposta = await fetch(url) 
    const resp = await resposta.json()
    console.log(resp)
}

Filmes02(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
