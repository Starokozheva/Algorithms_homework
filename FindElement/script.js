// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.


function findKthElement(arr1, arr2, k) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    mergedArray = mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));

    return mergedArray[k - 1];
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

const result = findKthElement(array1, array2, k);
console.log(result);