
const readlineSync = require('readline-sync');

function hasUppercase(password) {
    for (let i = 0;i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
    }
    return false;
}

function hasNumber(password) {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

let password = "";
let isValid = false;

while (!isValid) {
    password = readlineSync.question("Please enter a new password: ");
    const isLengthValid = password.length >= 8;
    const isUpperValid = hasUppercase(password);
    const isNumberValid = hasNumber(password);

    isValid = isLengthValid && isUpperValid && isNumberValid;

    if(!isValid) {
        console.log("\n--- Password does NOT meet the requirements ---");
        console.log("Requirements Check:");
        console.log(`- At least 8 characters: ${isLengthValid ? 'PASS' : 'FAIL'}`);
        console.log(`- Contains uppercase letter: ${isUpperValid ? 'PASS' : 'FAIL'}`);
        console.log(`- Contains a number: ${isNumberValid ? 'PASS' : 'FAIL'}`);
        console.log("Please try again.\n");
    }
}

console.log("==========================================");
console.log("SUCCESS! Your password meets all requirements.");
console.log("==========================================");