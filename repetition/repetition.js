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

  const nums = Object.values(objectOfExisting)
  let maxVal = 0;
  for(let i = 0; i < nums.length; i++){
    maxVal = Math.max(maxVal, nums[i]);
  }
 
  for (let key in objectOfExisting){
    if(objectOfExisting[key] === maxVal){
      mostRepeatedNumbers.push(key)
    }
  }
