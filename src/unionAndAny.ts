let subs: number | string = 10000; //union type -
subs = '10000';
subs = 10000;
let mixed: (string | number)[] = [1, '2'];
let person: { name: string; age: number } = {
  name: 'Krishna',
  age: 21,
};

// HOW IS THIS USED IN THE REAL WORLD ?
let apiRequest: 'pending' | 'fulfilled' | 'rejected' = 'pending'; //this is a union type
// so this variable will take only these 3 values because we have defined it like that
// apiRequest='hitesh' //error

// suppose we are working for an airline
let seat: 'aisle' | 'window' | 'middle' = 'aisle';
// now when we wish to change the seat , we will get auto suggest also

let orders = ['12', '20', '28', '30'];
// let currentorder; //when we hover it shows : undefined - it does not care what type of value we store
// the above is called ANY - data type

let currentorder: string | undefined;
for (let order of orders) {
  if (order === '20') {
    currentorder = order;
    break;
  }
}

console.log(currentorder);
