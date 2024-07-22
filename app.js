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