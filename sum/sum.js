function add () {
    const allNumbersDiv = document.querySelectorAll(".numberDiv");
    let totalSum = 0;

    for (let numbers of allNumbersDiv){
        const numberValue = parseInt(numbers.textContent);
       totalSum += numberValue;
    }
    const totalAddNumbers = document.getElementById("totalNumbers");
    totalAddNumbers.textContent = `${totalSum}`;
}

function addNumbersTogether (){
    let sum = 0;
    const allNumbersDivs = document.querySelectorAll(".numberDiv");
    const allTogether = document.getElementById("allTogether");

    for(let allNumbersDiv of allNumbersDivs){
        allNumbersDiv.addEventListener("click", function (){

            if(!allNumbersDiv.classList.contains("selected")){
                sum += parseInt(allNumbersDiv.textContent);
                allNumbersDiv.classList.add("selected");
            } else {
                sum -= parseInt(allNumbersDiv.textContent);
                allNumbersDiv.classList.remove("selected");
            }
            allTogether.textContent = `${sum}`;
        })
    }
}
function init () {
    addNumbersTogether();
    add();
    reset();
}
function reset (){
    const buttonReset = document.getElementById("reset");
    const allTogether = document.getElementById("allTogether");
    buttonReset.addEventListener("click", function (){
        const allNumbersDiv = document.querySelectorAll(".numberDiv.selected");
       allTogether.textContent = "";

       for (let number of allNumbersDiv){
        number.classList.remove("selected");
       }
    })
}
