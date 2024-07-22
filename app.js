const product = {
  id : 12345 , 
  brand : "Samsung",
  type : "Smart Phone",
  price : 2000
}

console.log(product.id);


// [] square bracket notasyonu

console.log(product["brand"]);

let ids = product.id 

ids= "67890"

let vrands = product["brand"]


const product2 = {
  id :"67890", 
  brand : "Apple",
  type : "Smart Phone",
  price : 3000
}

//^ object desturcturing

const {brand,price,type,id} = product2

console.log(brand,price,type,id);

// {

//   const {id, brand}= product
//   console.log(brand, price, type, id);
// }

const person = {
  personName: "Jean-Jacques",
  surname: "Rousseau"

}

let { personName, surname, age = 66} = person

console.log(personName, surname, age);


const person2 = {
  personName: "John",
  surname: "Doe"

}

let { personName: userName, surname: userSurname, Userage = 66} = person2

console.log(userName, userSurname, Userage);

const person3 = {
  personName: "Jane",
  surname: "Doe"

}

const printPerson = (insan) => {
  console.log(`Name: ${insan.personName} Surname: ${insan.surname}`);
}
printPerson(person3)
printPerson(person2)

const printPerson2 = (person) => {
  const {personName, surname} = person
  console.log(`Name: ${personName} Surname: ${surname}`);
}
printPerson2(person2)
printPerson2(person3)

const printPerson3 = ({personName, surname}) => {
  console.log(`Name: ${personName} Surname: ${surname}`);
}
printPerson3(person3)
printPerson3(person2)



{
  const objectReturn = function(){
    return{
      name: "Mike",
      surname: "Zanetti",
      location: "Italy"

    }
  }
  console.log(objectReturn());
  let {surname, name} = objectReturn()

  console.log(name, surname);
}

const user = {
    name: "Mike",
    surname: "Zanetti",
    location: "Italy",
    address:{
      street: "332 main St",
      city : "Milano",
      zip: "12345",
    }

}

const {name, address:{city, zip, street}} = user
console.log(name,city,zip, street);
