const text = document.getElementById("copies");

function findCopy (){
  const allNumbers = document.querySelectorAll(".numberDiv");
  let numberToCompare;

  for (let number of allNumbers){
    number.addEventListener("click", function (){
      numberToCompare = parseInt(number.textContent);
      let counter = 0; 

      for (let numberN of allNumbers){
          if(parseInt(numberN.textContent) === numberToCompare){ 
            counter++ 
            numberN.classList.add("selected");
          } else {
            numberN.classList.remove("selected");
          }
        }

        if(counter){
          text.textContent = `${counter} copies of the number ${numberToCompare}`;
        } else {
          text.textContent = "Click on the number to find copies :";
        }
    })
  }
}

