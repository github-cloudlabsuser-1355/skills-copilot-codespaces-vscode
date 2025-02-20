const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

function getOperation() {
    return new Promise((resolve) => {
        rl.question('Choose an operation (add, subtract, multiply, divide): ', (operation) => {
            resolve(operation);
        });
    });
}

function getNumber(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (num) => {
            resolve(parseFloat(num));
        });
    });
}

async function calculator() {
    try {
        const operation = await getOperation();
        const num1 = await getNumber('Enter the first number: ');
        const num2 = await getNumber('Enter the second number: ');

        let result;
        switch (operation.toLowerCase()) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                console.log('Invalid operation. Please choose add, subtract, multiply, or divide.');
                return;
        }

        console.log(`The result is: ${result}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        rl.close();
    }
}

calculator();