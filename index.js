//Objects
const exp1 = {
  name: "panchito",
  age: 18,
  address: {
    street: "San juanico",
    internalNumber: "18-B",
  },
};

let exp2 = {
  name: "panchito",
  age: 18,
  address: {
    street: "San juanico",
    internalNumber: "18-B",
  },
};

var exp3 = {
  name: "panchito",
  age: 18,
  address: {
    street: "San juanico",
    internalNumber: "18-B",
  },
};

const exp4 = exp1;

//exp4.address.externalNumber = "40R";

console.log(exp4.address?.externalNumber?.test);
