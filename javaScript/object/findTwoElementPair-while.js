
function findTwoElementPair(nums,k)
{
    let i = 0;
    let j = nums.length-1;
    let result=[];
    while(i<j)
    {
        let first_num=nums[i];
        let second_num=nums[j];
        if(first_num+second_num==k)
        {
            result.push([first_num, second_num]);
        }
        else{
            return"No pair found";
        }
        i++;
        j--;
    }
    return result;
}



const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];
console.log(findTwoElementPair(nums, 4));