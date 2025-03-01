const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const numberInput = document.getElementById('number');

const romanNumberData = (num) => {
    const romanMap = [
        ["M", 1000], 
        ["CM", 900], 
        ["D", 500], 
        ["CD", 400], 
        ["C", 100], 
        ["XC", 90],
        ["L", 50], 
        ["XL", 40], 
        ["X", 10], 
        ["IX", 9], 
        ["V", 5], 
        ["IV", 4], 
        ["I", 1]
    ];

    let result = "";

    for (const [symbol, value] of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
};

const checkUserInput = () => {
    const intInput = parseInt(numberInput.value, 10);
    let message = "";

    if (!numberInput.value || isNaN(intInput)) {
        message = "Please enter a valid number";
    } else if (intInput < 1) {
        message = "Please enter a number greater than or equal to 1";
    } else if (intInput > 3999) {
        message = "Please enter a number less than or equal to 3999";
    } else {
        return true;
    }

    output.innerText = message;
    output.classList.add('alert');

    return false;
};

const clear = () => {
    output.innerText = "";
    output.classList.remove('alert');
};

convertBtn.addEventListener("click", () => {
    output.classList.remove('hidden');
    const int = parseInt(numberInput.value, 10);

    clear();

    if (checkUserInput()) {
        output.innerText = romanNumberData(int);
    }
});