// let superheroes = ["Batman", "Superman", "Wonder Woman"];

// for (let hero of superheroes){
//     console.log(hero);
// }

// for (let hero in superheroes){
//     console.log(hero);
// }

// let myCode: any = 456454;
// myCode = "myCode is now a string";
// myCode = true; //myCode now is a boolean

// let myRandomList: any = ["music", 8, true];
// console.log(myRandomList[0]);

// let student: object;

// student = {
//     firstName: 'Bob',
//     lastName: 'Bobertson',
//     age: 25,
//     program: 'Computer Science'
// };

// console.log(student);

// enum Role { Administrator, HR, Developer };
// let newRole: Role = Role.Developer;

// enum Role { Administrator = 2, HR = 1, Developer = 3 };
// let newRole: Role = Role.Developer;

// enum Role {
//     admin = 1,
//     customer,
//     salesperson,
//     accountant
// }
// console.log("Admin: "+ Role.admin);
// console.log("Customer: "+ Role.customer);
// console.log("Salesperson: "+ Role.salesperson);
// console.log("Accountant: "+ Role.accountant);

// enum Role {
//     admin = 'ADMIN',
//     customer = 'CUSTOMER',
//     salesperson = 'SALES_PERSON',
//     accountant = 'ACCOUNTANT'
// }
// console.log("Admin: "+ Role.admin);
// console.log("Customer: "+ Role.customer);
// console.log("Salesperson: "+ Role.salesperson);
// console.log("Accountant: "+ Role.accountant);

// let myArr = [1, 2];
// let [first, second] = myArr;
// console.log(first); // prints 1
// console.log(second); // prints 2

// function getSumAndProduct(a: number, b: number) {
//     let sum = a + b;
//     let product = a * b;
//     return [sum, product];
// }

// let [theSum, theProduct] = getSumAndProduct(5, 3);
// console.log(theSum); // 8
// console.log(theProduct); // 15

// let person = {
//     firstName: 'Bruce',
//     lastName: 'Wayne',
//     nickName: 'The Batman'
// };

// let { firstName, lastName } = person;
// console.log(firstName); // "Bruce"
// console.log(lastName); // "Wayne"

// let userVal: any = "I got a value from the user and it is of the type string";
// let len: number = (<string>userVal).length;

let userVal: any = "I got a value from the user and it is of the type string";
let len: number = (userVal as string).length;











