
const val = [...document.querySelectorAll(".cont")]
const sal = [...document.querySelectorAll(".cont1")]



const move=()=>{
    const lev = [...document.querySelectorAll(".cont")]
    lev.map((sa)=>{
        sa.classList.remove("getcont")
    })
}



const pega=(s)=>{
    
    ca = s
    
}

var ca = ''

sal.map((da)=>{
    da.addEventListener("click",(de)=>{
        //move()
        //de.classList.add("getcont")
        de.target.innerHTML = ca
        
       
    })
})



val.map((le)=>{
    le.addEventListener("click",(el)=>{
       move()
       le.classList.add("getcont")   
        pega(el.target.textContent)
    })
     
})
    












