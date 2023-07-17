function pair() {
    let arr = [1, 2, 3, 6, 7, -1, -9];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = 0; j < arr.length; i++) {
            let num2 = arr[j];

            if ((num1 + num2) === 7) {
                result.push([num1, num2]);
            }

        }



    }
    return result;

}
console.log(pair)