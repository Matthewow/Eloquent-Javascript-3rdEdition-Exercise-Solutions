const min = (x, y) => x > y ? y : x;

const isEven = (number) => {
    if(number < 0) return null;
    else if (number == 0) return true;
    else if (number == 1) return false;
    else return isEven(number - 2)
}

const countChar = (str, target) =>{
    count = 0;
    for(let i = 0; i < str.length; i++)
        if (str[i] == target) count += 1 
    return count;
};

const countBs = (str) => countChar(str, 'B');
