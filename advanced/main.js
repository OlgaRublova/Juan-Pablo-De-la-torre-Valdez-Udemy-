//arrow functions

//--------------REGULAR-------------------------
//const learning = function () {
//  console.log("Learning Modern JS");
//}
//learning();

//--------------NO ARGUMENTS--------------------
//const learning = () => console.log("Learning Modern JS");
//learning();

//--------------ONE ARGUMENTS-------------------
// const learning = (tech) => console.log(`Learning Modern JS in ${2020}`);
// learning("Helena");

//--------------WITH CALLBACK--------------------
// const shoppingCart = ['Album', 'Shirt', 'Guitar'];
// const productQuantityLength = shoppingCart.map( (product) => product.length);
// console.log(productQuantityLength);

//--------------ARRAY WITH FOREACH----------------
// const shoppingCart = ['Album', 'Shirt', 'Guitar'];
// shoppingCart.forEach( (product) => console.log(product));

//--------------DESTRUCTURING---------------------
// let name, membership;
//
// const client = {
//     name: "Alexa",
//     membership: "Premium"
// }
// let name = client.name,
//     membership = client.membership;
// console.log(name);
// console.log(membership);
//
// name = "Mary"; membership = "Platinum";
//
// !!!!!! ---- as variables were declared earlier () is important to make everything work -----!!!!
// ({name, membership} = client);
// console.log(name);
// console.log(membership);

//--------------DESTRUCTURING from object------------
//---------------------------------------------------
// const client = {
//     membership: "Premium",
//     name: "Paul",
//     data: {
//         clientLocation:{
//             city: "Mexico",
//             country: "Mexico"
//         },
//         account: {
//             memberSince: '10-12-2012',
//             balance: 4000
//         }
//     }
// }
// let {data: {clientLocation}} = client;

//--------------DESTRUCTURING default values---------
//---------------------------------------------------
// const client = {
//     name: "Alexa",
//     membership: "Premium",
//     balance: 100
// }
// let {name, membership, balance = 0} = client;

//--------------DESTRUCTURING arrays-----------------
//---------------------------------------------------
// const cities = ["London", "New York", "Madrid", "Paris"];
// let [city1, city2,city3]=cities;
// console.log(city1);//London
//
//
// const client = {
//     membership: "Premium",
//     balance: 3000,
//     data: {
//         name: "Paul",
//         lastName: "Banks",
//         living: {
//             city: "London",
//             country: "UK"
//         }
//     },
//     lastMovements: ['12-03-2018', '10-03-2012', '12-12-2012']
// }
// let {data: {living}, lastMovements: [, , third]} = client;
// console.log(living);
// console.log(third);// 12-12-2012

//---------------DESTRUCTURING functions--------------
// //----------------------------------------------------
// function reservation(complete,
//                      // options = options || {};
//                      // let payment = options.paymentMethod,
//                      //     amount = options.amount,
//                      //     days = options.days;
//                      {
//                          paymentMethod = 'cash',
//                          amount = 0,
//                          days = 0
//                      } = {}
// ) {
//     let {paymentMethod, amount, days} = options;
// }
//
// reservation(true, {
//         paymentMethod: "creditCard",
//         amount: 3000,
//         days: 20
//     }
// )







//1. The need for object destructuring
// var hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };
//
// var name     = hero.name;
// var realName = hero.realName;
//
// name;     // => 'Batman',
// realName; // => 'Bruce Wayne'
//
// //destructuring:
// // var name     = hero.name;
// // var realName = hero.realName;
// // is equvailent to:
// const { name, realName } = hero;

//4. Default values
// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };
//
// const { enemies = ['Joker'] } = hero;
//
// enemies;     // => ['Joker']

//5. Aliases
// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };
//
// const { realName: secretName } = hero;
//
// secretName; // => 'Bruce Wayne'

//6. Extracting properties from nested objects
// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne',
//     address: {
//         city: 'Gotham'
//     }
// };
//
// // Object destructuring:
// const { address: { city } } = hero;
//
// city; // => 'Gotham'

//7. Extracting a dynamic name property
// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };
//
// const prop = 'name';
// const { [prop]: name } = hero;
//
// name; // => 'Batman'

//8. Rest object after destructuring
// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };
//
// const { name, ...realHero } = hero;
//
// realHero; // => { realName: 'Bruce Wayne' }

//9.1 Bind properties to variables

// let
// const hero = {
//     name: 'Batman',
// };
//
// let { name } = hero;
//
// name; // => 'Batman'

// existing variable
// let name;
//
// const hero = {
//     name: 'Batman',
// };
//
// ({ name } = hero);
//
// name; // => 'Batman'

//for ... of
// const heroes = [
//     { name: 'Batman' },
//     { name: 'Joker' }
// ];
//
// for (const { name } of heroes) {
//     console.log(name); // logs 'Batman', 'Joker'
// }

//9.2 Function parameter destructuring
// const heroes = [
//     { name: 'Batman' },
//     { name: 'Joker' }
// ];
//
// const names = heroes.map(
//     function({ name }) {
//         return name;
//     }
// );
//
// names; // => ['Batman', 'Joker']