function sumEvenNumbers(input) {
    let sum = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        let curNum = Number(input[i]);


        if (curNum % 2 === 0) {
            sum += curNum;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6', 8]);
//sumEvenNumbers(['3', '5', '7', '9',2]);
sumEvenNumbers([2, 4, 6, 8, 10]);