const arr = [1,2,3,4,5,6,7,8];
//old legacy way

let filterArr = [];

for(let item of arr){
    if(item % 3 ===0 || item % 5===0){
        filterArr.push(item);
    }
}
console.log("filtered arr using legacy way:",filterArr);

const filterArrV2 = arr.filter((item)=>{
    if(item % 3 === 0 || item % 5 === 0){
        return true;
    }
    return false;
});


console.log(filterArrV2);