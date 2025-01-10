const removebutton = document.querySelector("#remove");
const removeThis = document.querySelector("#removeThis");
const numbersContainer = document.querySelector(".numbersContainer");


const newRandomNumberButton = document.querySelector("#newRandomNumber");
newRandomNumberButton.addEventListener("click", function (){
    const numberInput = document.getElementById("randomNumberSpace");
    const randomNum = generateRandomNumber(0, 99);

    numberInput.textContent = randomNum;
    const numbers = document.querySelectorAll(".numberDiv");

    for (const number of numbers) {
        console.log(number.textContent);
        if (parseInt(number.textContent) === randomNum){
            number.classList.add("markTarget");
        } else {
            number.classList.remove("markTarget");
        }
    }
});
removebutton.addEventListener("click", function (){
    const numberInput = document.getElementById("randomNumberSpace");
    const numberInputRemove = document.getElementById("removeThis");
    const targetNumbers = document.querySelectorAll(".markTarget");
    numberInputRemove.value = numberInput.textContent;

    if (targetNumbers) {
        numberInputRemove.textContent = `${numberInput.textContent} removed ${targetNumbers.length} times`; 
        for (const targetNumber of targetNumbers) {
            targetNumber.classList.add("marketclose");
            targetNumber.textContent = "x";
        }
    } else {
        numberInputRemove.textContent = "Nothing to remove";
    }
});
