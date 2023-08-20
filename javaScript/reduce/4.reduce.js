let uName = "Pankaj";

output={
    p:1,
    a:2,
    n:1,
    k:1,
    j:1,
};

const result = uName.toLowerCase.split("").reduce((previous, current)=>{
    if(previous.hasOwnProperty(current))
}, {});