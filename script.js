function addNumbers(a, b) {
    return a - b;
}

const num1 = 10;
const num2 = '5';   
const sum = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

const x = document.querySelector('result-of-sum');
x.innerHTML = `Sum of Numbers is: ${sum}`;
