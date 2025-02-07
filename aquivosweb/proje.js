


class Matematica{
    
    simbolo() {
        let array = ['+','-','x']
        let len = array.length
        let num = Math.floor(Math.random()*len)
        let simbo = array[num]
        return simbo
        
    }
    numero(){

        let val = Math.floor(Math.random()*10)
        return val
    }
    soma(){
        
        if(this.simbolo() == "+"){
            const num1 = this.numero()
            const num2 = this.numero()
            console.log(`${num1} + ${num2}`)
            return num1 + num2
        }
        if(this.simbolo() == "-"){
            const num1 = this.numero()
            const num2 = this.numero()
            console.log(`${num1} - ${num2}`)
            return num1 - num2
        }else{
            const num1 = this.numero()
            const num2 = this.numero()
            console.log(`${num1} x ${num2}`)
            return num1 * num2
        }
        
    
    }
}


const sim = new Matematica()


const val = sim.soma()


console.log(val)














