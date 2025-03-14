//!Snack1
//*  Verrà creato 1 solo oggetto e
// * vieni stampato "Double Cheese Burger"
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name); // ?
//!Snack2
//*  Verràno creati 3 oggetti
// * vieni stampato Salad
// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?
//!Snack-3
//* 9
// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);
// console.log(hamburger);
// console.log(secondBurger);
// console.log(thirdBurger);
//!Snack-4
//* Per il chef sarà il spread
//* per il restaurant sarà il stucturedClone
// const chef = {
//   name: "Chef Hyur",
//   age: 29,
//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",
//   address: {
//     street: "Main Street",
//     number: 123,
//   },
//   openingDate: new Date(2025, 3, 11),
//   isOpen: false,
// };
//!Snack-5
//* #5 oggetti
//* Chef Hyur/Chef Hyur / Hyur's IT  Hyur's IT
// ? newRestaurant: {     Num° #4
// ?			name: "Hyur's IT",
// ?			address: "Second Street, 12",
//* 			isOpen: true,
//* 		},
//*
//* const secondBurger = {     Num° #5
//*   name: "Cheese Burger",
//*   weight: 250,
//*   maker: {
//?     name: "Chef Hyur",
//? newRestaurant: {
//? 			name: "Hyur's IT",
// ?			address: "Second Street, 12",
//* 			isOpen: true,
//* 		},
//*     },
//*     age: 29,
//*   },
//* };
//*
//* const hamburger = {     Num° #1
//*   name: "Cheese Burger",
//*   weight: 250,
//* maker: {                Num° #2
//?     name: "Chef Hyur",
//? newRestaurant: {      Num° #3
//? 			name: "Hyur's IT",
// ?			address: "Second Street, 12",
//* 			isOpen: true,
//* 		},
//*     },
//*     age: 29,
//*   },
//* };

//!SNACK-6  BONUS

//!SNACK-7  BONUS
