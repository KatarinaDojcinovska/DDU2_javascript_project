function howManyTimesRepeated (){
  const numbers = document.querySelectorAll(".numberDiv");
  let objectOfExisting = {};
  let mostRepeatedNumbers = [];

  for (let number of numbers){
    let repeatedNumbers = parseInt(number.textContent);
    let counter = 0;
    
    for(let numberN of numbers){
      if (parseInt(numberN.textContent) === repeatedNumbers){
        counter++
        objectOfExisting[numberN.textContent] = counter;
      }
    } 
  }

