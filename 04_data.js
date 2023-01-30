/* The sum of a range */

const range = (start, end, step = 1) => {
    let res = []
    while (start <= end){
        res.push(start)
        start += step
    }
    if (res.length > 0) return res
    while (start >= end){
        res.push(start)
        start += step
    }
    return res
}

const sum = (array) => {
    let sum = 0;
    array.map(e => sum += e);
    return sum
}

// Reversing an array

const reverseArray = (array) => {
    let res = []
    array.forEach(currentItem => {
        res.unshift(currentItem);
    });
    return res;
}

const reverseArrayInPlace = (array) => {
    let left = 0, right = array.length - 1;
    while(left < right){
        [array[left], array[right]] = [array[right], array[left]];
        left++, right--;
    }
}

// A List

const prepend = (v, list) => {
    return {value: v, rest: list}
}
const arrayToList = (array) => {
    if (array.length == 0) return null;
    return prepend(array[0], arrayToList(array.slice(1)))
}

const listToArray = (list) => {
    if (list.rest === null) return [list.value];
    return [list.value].concat(listToArray(list.rest));
}

const nth = (list, depth) => {
    if (depth === 0) return list.value;
    else return nth(list.rest, depth - 1)
}

