

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

btn.addEventListener("click",(el)=>{
    const todosradio = [...document.querySelectorAll("input[type=radio]")]
    const selecionado = todosradio.filter((ele)=>{

    const sa = ele.parentNode.parentNode.textContent

        console.log(sa)

       return ele
    })
    
    red = selecionado[0]

    
})





















