
function fruit () {
 const fruits=[
     "apple" ,
     "pear" ,
     "grape"  
 ]

 return fruits 
}

console.log(fruit())

const allFruits=fruit()


allFruits[3]="banana"
console.log(allFruits)