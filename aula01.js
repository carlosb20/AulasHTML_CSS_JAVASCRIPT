

const cont = [...document.querySelectorAll(".cont")]
const move = [...document.querySelectorAll("#move")]

const val = document.querySelector(".conteiner")




cont.map((el)=>{
    el.addEventListener("click",(item)=>{

        const ca = item.target
        ca.classList.add("getclass")
        
             
        })
    })
    

const div3 = document.createElement('div')
div3.setAttribute("id","ca")
div3.setAttribute("class","cont")

div3.innerHTML = 'createElement'
val.appendChild(div3)


const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{

    const todosradio = [...document.querySelectorAll("input[type=radio]")]
    let selecionado = todosradio.filter((ele)=>{

        return ele.checked

    })
    selecionado = selecionado[0]
    const sele = selecionado.parentNode.textContent
    alert('liguagem selecionado : '+ sele)
    console.log(sele)
    
})

































