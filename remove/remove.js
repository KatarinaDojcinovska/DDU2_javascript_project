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
