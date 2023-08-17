const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];
//this will change the main json array p
// const newArr = p.map((item)=>{

//     let arrayItem = {...item};
//     if(arrayItem.isActive === true){arrayItem.isActive = "Avaliable";}
//     else{ arrayItem.isActive = "Not avaliable";}

//     return arrayItem;
// });

const result = p.map((item)=>({
    ...item,isActive:item.isActive?"Avaliable" :"Not Avaliable",
}))

//console.log({newArr});
console.log({result});
console.log({p});

// const result = p.map((item)=>{
//     ...item,isActive:item.isActive?"Avaliable":"Not Avaliable"})