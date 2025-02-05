

const  key = '6d9a1e25dbcb17a0e630bab33da79bce'

async function dadosAPI(params) {  
    try{
        const dados =  await  fetch(params)
        const respon = await dados.json()
        return respon.results

    }catch(error){
        alert('erro', error)
    }
}

const getdados = dadosAPI(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)


getdados.then(function(le){
    const carro = document.querySelector(".carrossel")
    le.map((element)=>{
        const divig = document.createElement("img")
        //console.log(element.backdrop_path)
        divig.setAttribute("src",`https://image.tmdb.org/t/p/original${element.backdrop_path}`)
        divig.setAttribute("id","Imgs")
        carro.appendChild(divig)
    })

    const imgs = document.getElementById("imgss")
    const img = [...document.querySelectorAll("img")]

    //console.log(img)
    console.log(imgs)

    let idx = 0

    function carrossell(){
        idx++;

        if(idx > img.length -1){

            idx = 0
        }
        imgs.style.transform = `translateX(${-idx * 500}px)`
       
    }
    setInterval(carrossell,2500)
})



























