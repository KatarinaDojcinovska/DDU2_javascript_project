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

