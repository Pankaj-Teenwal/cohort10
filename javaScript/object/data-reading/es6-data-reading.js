const product = {
    id:1,
    productName:"ipad Pro 11 inch",
    productBrand: "Apple",
    productPrice:"78000",
    productCurrency:"INR",
};

const{productName, productBrand, isActive="Not available"}=product;

const massage = `I'm buying ${productBrand} ${productName} ${isActive}`;
//here we are console loging value of the massege
console.log(massege);
//this will display massege in the form of string
console.log({massage});

//for ex {massage: "I'm buying apple ipad pro 11 inch not available"}