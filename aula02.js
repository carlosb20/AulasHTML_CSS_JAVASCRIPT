
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
    





const myObserver = new IntersectionObserver((el)=>{

    el.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })

})

const even = document.querySelectorAll('.hidden')

even.forEach((elem)=> myObserver.observe(elem))


















