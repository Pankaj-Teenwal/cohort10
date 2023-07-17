/**Here we are reading data from the object */

const product={
    id:1,
    name: "ipad Pro 11 Inch",
    brand:"apple",
    price:78000,
    currency:"INR",

    
};

const uName= product.name;
const brand = product.brand;
const price= product.price;
const isActive=product.isActive||"Not Avaliable";




const massage= `I'm buying ${product.brand} ${product.name}`;


console.log(uName, price, isActive, massage)