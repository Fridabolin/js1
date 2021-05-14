


function id(){

    const person={
        name:"frida", 
        age:31 ,
        living:"Sandsbro", 
        married:true , 
        children: function five (number1){
    
            const result= number1 / 2
            console.log(result) 
        
            if (result===5){
             return true 
            } else {
                return false
            }
        
        }
    }
    
    return person
}

const kossa=id()
console.log(kossa)