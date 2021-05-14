
const johnsAge = document.getElementById("x");
const sarahAge = document.getElementById("y");

const button = document.getElementById("htmlButton");

function whenClicked() {
    const john = parseInt(johnsAge.value);
    const sarah = parseInt(sarahAge.value);


    if (john > sarah) {
        alert("John is older than Sarah");
    } else if (john < sarah) {
        alert("John is younger than Sarah");
    }
    
}
 

button.addEventListener("click", whenClicked);


// 
// button.addEventListener('click' ,(e)=>  {
//     e.preventDefault()
//     button.style.backgroundColor ="red"
//     whenClicked()
// // })

