/**
 * const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];

/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */
/**@description 
 * step-1: create a function
 * step-2: create a empty array result
 * step-3: create a nested for loop and compare array's one element with every element of the array
 * step-4: if the sum is euqal to k the push those array element in that result
 * step-5: at the end simply return the result array.
 */

const findTwoElementPair = (nums, k) => {

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i; j < nums.length; j++) {
            let num2 = nums[j];
            if (nums[i] + nums[j] === k) {
                result.push([num1, num2]);

            }
        }
    }
    return result;

};
const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];
console.log(findTwoElementPair(nums, 7));

