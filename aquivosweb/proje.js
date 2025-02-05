


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

        console.log(this.simbolo())
        console.log(this.numero())
    }
}


const sim = new Matematica()

sim.soma()

















