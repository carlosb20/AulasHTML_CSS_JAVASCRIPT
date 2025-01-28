

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'


async function loadfilmes() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`
    const resposta = await fetch(url) 
    const resp = await resposta.json()
    
    console.log(resp)
    


}

loadfilmes()


const btn = document.querySelector("#sa") 


btn.addEventListener("click",(el)=>{

    console.log('ok',el)


})

