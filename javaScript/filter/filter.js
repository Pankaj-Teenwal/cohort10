const students = [
    {id: "001", name: "pankaj", sports:"cricket"},
    {id: "002", name: "arvind", sports:"cricket"},
    {id: "003", name: "Rajat", sports:"football"},
    {id: "004", name: "Yogesh", sports:"cricket"},
    {id: "005", name: "ishu", sports:"football"}
]

const newArr = students.filter((item)=>{
    if(item.id%2===0 && item.sports === "cricket" && item.name==="arvind") return true;
    else return false;
})
console.log(newArr);