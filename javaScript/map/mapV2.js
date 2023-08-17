const nums = [1,2,3,4,5,6,7];

const multipleByTwo = nums.map((currentItem, index, arr)=>{
    console.log({currentItem, index, arr});
    return currentItem * 2;
});