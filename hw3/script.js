function countOccurrencesRecursive(str, char) {
    if (str.length === 0) {
        return 0;
    }

    if (str[0] === char) {
        return 1 + countOccurrencesRecursive(str.slice(1), char);
    } else {
        return countOccurrencesRecursive(str.slice(1), char);
    }
}

const inputString = "hello world";
const character = "l";
const resultRecursive = countOccurrencesRecursive(inputString, character);
console.log(`Рекурсивный подсчет: Символ '${character}' встречается ${resultRecursive} раза в строке '${inputString}'`);




function countOccurrencesIterative(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

const inputString2 = "hello world";
const character2 = "l";
const resultIterative = countOccurrencesIterative(inputString2, character2);
console.log(`Итеративный подсчет: Символ '${character2}' встречается ${resultIterative} раза в строке '${inputString2}'`);