function FindMaxNumber(arr) {
    if (!arr || arr.length == 0) {
        return null;
    }

    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const array = [3, 9, 1, 7, 12, 6];
const result = FindMaxNumber(array);
console.log(result);


// Временная сложность O(n)
// n - количество элементов в массиве
// В худшем случае алгоритм должен пройти по всем элементам массива один раз для поиска максимального числа