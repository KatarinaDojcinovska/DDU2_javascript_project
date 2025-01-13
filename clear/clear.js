function generatebuttons (){
    const numberButtons = document.querySelectorAll(".numberDiv");
    
    for(let numberbutton of numberButtons) {
        numberbutton.classList.add("button");
        
        numberbutton.addEventListener("click", function (){
            if (numberbutton.classList.contains("remove")){
                numberbutton.textContent = generateRandomNumber(0, 99);
                numberbutton.classList.add("button");
                numberbutton.classList.remove("remove");
            } else {
                numberbutton.textContent = "";
                numberbutton.classList.remove("button");
                numberbutton.classList.add("remove");
            }
        })
    }
}

const clearButton = document.getElementById("clearbutton");

clearButton.addEventListener("click", function (){
    const removedbuttons = document.querySelectorAll(".remove");
   
    for(let buttonRemoved of removedbuttons){
        buttonRemoved.textContent = generateRandomNumber(0, 99);
        buttonRemoved.classList.add("button");
        buttonRemoved.classList.remove("remove");
    }
}) 

const bCreate = document.getElementById("create");
bCreate.addEventListener("click", generatebuttons);