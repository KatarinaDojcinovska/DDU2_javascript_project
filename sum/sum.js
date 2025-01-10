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

