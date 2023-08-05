function addNumbers(a, b) {
    return a - b; // Intentionally changed from a + b to a - b
}

const num1 = 10;
const num2 = '5'; // Intentionally changed to a string

const sum = addNumbers(num1, num2); // Intentionally passing a string
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

const x = document.querySelector('result-of-sum'); // Intentionally missing #
x.innerHTML = `Sum of Numbers is: ${sum}`;
