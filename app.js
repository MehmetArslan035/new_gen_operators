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

const company = {
  name: 'Tech Corp',
  location: {
      country: 'USA',
      address: {
          street: '456 Tech Road',
          city: 'Innovation',
          zip: '67890'
      }
  },
  employees: [
      { name: 'John', position: 'Developer' },
      { name: 'Jane', position: 'Designer' }
  ]
};

company.location.address.city = "Texas"

// const { name,location: {address:{city:companycity}}} = company

// console.log(name, country, city);

//^ Array desturcturing

const num = [1,2,3,4,5]

console.log(num [2]);

let [first,third,second,] = num 

console.log(first);
console.log(second);
console.log(third);


const num2 = [1,2,3,4,5]

console.log(num [2]);

let [birinci,,, fourth, fifth] = num2

console.log(first);
console.log(fourth);
console.log(fifth);


const nestedArray = [1,2,[3,4],5]

let[,,nested, besinci]=nestedArray

console.log(nested); 
console.log(besinci);

let[bir,iki,[uc,dort],bes] = nestedArray

console.log(bir,iki,uc,dort,bes);

// Rest (...) operatörü

// Arraylerde kullanımı
const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minibüs"]
const [arac1,arac2,,...binek]= araclar

console.log(arac1);
console.log(arac2);
console.log(binek);


// Objelerde kullanımı

const person5 = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
}

const{soyad, yas, ...geriKalanlar} = person5

console.log(soyad,yas,geriKalanlar);


// fonksiyonlarda rest operatörü kullanımı

const topla = (a,b)=> a+b
console.log(topla(1,2,3,4,5,6));

const toplam = (...sayilar)=> {
  // console.log(sayilar);
  return sayilar.reduce((a,b)=>a+b)
}

console.log(toplam(1,2,3,4,5,6,12));
console.log(toplam(50));

// Spread (...) operatörü
const person6 = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
}

const person7 = person6

person6.yas = 41

console.log(person6.yas);
console.log(person7.yas);

const person8 = {...person6}

console.log(person8);

person6.yas += 1
console.log(person6.yas);
console.log(person8.yas);