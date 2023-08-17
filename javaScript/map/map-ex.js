 const arr = [1,2,3,4,5,6,7]; // now we want to increase these values by 1.

 //old legacy way

 const arrV2 = [];

 for(let i=0;i<arr.length;i++)
 {
    arrV2.push(arr[i]+1);
 }

 console.log("added one", {arrV2});

 const arrV3 = []
 for(let i=0; i<arr.length;i++)
 {
    arrV3.push(arr[i]*2);  // will multiply every element of the array by two.
 }

 console.log("multiply: ",{arrV3})

 const arrV4 =[];
 for(let i=0;i<arr.length;i++)
 {
    if(arr[i] % 2!== 0){
        arrV4.push(arr[i]*2);
    }
    else{
        arrV4.push(arr[i]);
    }
 }

 console.log("arrV4", {arrV4});


 const arrPlusOne = arr.map((item)=> item+1);

 const arrMultiplyTwo = arr.map((item)=>item*2);

 const arrMultiplyByTwoIfOdd = arr.map((item)=>{
    if(item%2 !== 0){
        return item *2;
    }
    return item;
 });

 console.log({arrPlusOne}, {arrMultiplyTwo}, {arrMultiplyByTwoIfOdd})


 const nums = [1,2,3,4,5,6,7];

 const multipleByTwo = nums.map((currentItem, index, arr)=>{
    console.log({currentItem, index, arr});
 }); 
 // here current item is the array element and index show the current index of the element and arr is show array of element index and arr is optional to pass in this function.
 