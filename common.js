function generateRandomNumber(min, max){
    return Math.floor(min +(max - min) * Math.random());
}

function createGrid (number, fill){
    const numberContainer = document.querySelector(".numbersContainer");
    numberContainer.innerHTML = "";

    for (let i = 0; i < number; i++){
        const createNumbersDiv = document.createElement("div");
        numberContainer.appendChild(createNumbersDiv);
        if (fill){
            const randomNumber = generateRandomNumber(0,99);
            createNumbersDiv.textContent = randomNumber;
            createNumbersDiv.id = randomNumber;
            createNumbersDiv.classList.add("numberDiv");
        } else {
            createNumbersDiv.textContent = "-";
        }
    }
}

const createButton = document.getElementById("create");
createButton.addEventListener("click", function (){
    let createNumbers = document.querySelector("#nNumbers").value;
    createGrid(createNumbers, true)
});




