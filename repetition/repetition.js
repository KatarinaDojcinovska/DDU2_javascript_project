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
  for(let n of numbers){
    for(let most of mostRepeatedNumbers){
      if(parseInt(n.textContent) === parseInt(most)){
        n.classList.add("selected");
      }
    }
  }
  const repeatedN = document.getElementById("repeated");
  repeatedN.textContent = `${mostRepeatedNumbers} (Repeated ${maxVal} times)`;
}

function findMissingNumbers (array){
    const missingNumbersArray = [];
    for (let i = 0; i < 100; i++) {
      if (!array.includes(i)) {
        missingNumbersArray.push(i)
      }
    }
  return missingNumbersArray.toString(); 
}

function writeMissingNumber (){
    const noPlace = document.getElementById("noPlace");
    const number = document.querySelectorAll(".numberDiv");

    const numberArray = [];

    for (let num of number){
      numberArray.push(parseInt(num.textContent));
    }
    noPlace.textContent = findMissingNumbers(numberArray);
}

