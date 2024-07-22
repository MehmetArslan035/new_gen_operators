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

const {id, price} = product2

console.log(id,price);

{

  const {id, brand}= product
  console.log(id,brand);
}