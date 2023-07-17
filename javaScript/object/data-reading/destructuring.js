const profile={
    userName: "Arvind",
    city:"Bhopal",
    company: "Google",
    location:"Munich",
};

//want to form this massege
//Hello My name is Arvind & an Google Munich Employee, i am from Bhopal.
//I got offer from Google Munich,
//though i belong to bhopal still Google offered me

//old way

const massege =`Hello My Name is ${profile.userName} & an ${profile.company} ${profile.location} Employee, i am from ${profile.city}. I got offer from ${profile.company} ${profile.location}, though i belong to ${profile.city} still ${profile.company} offered me.`;

console.log(massege);


//another way

const{userName, city, company, location}=profile;
const massege2=`Hello My Name is ${userName} & an ${company} employee, i am from ${city}. I got offer from ${company} ${location},though i belong to ${city} still ${company} ${location} offered me.`;

console.log(massege2);

console.log({massege2});
