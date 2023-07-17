const profile = {
    uName: "Palak",
    city: "Jabalpur",
  };
  
  const profile2 = {
    uName: "Chirag",
    city: "Paris",
  };
  
  const profile3 = {
    uName: "Sanket",
    city: "Thailand",
    details: {
      country: "India",
    },
  };

  const{uName, city}=profile;

  const{uName:pankaj, city:gao} = profile2;
  console.log(uName, city)

  console.log(pankaj, gao)


const{details}=profile3;

const{country}=details;

console.log(country);
