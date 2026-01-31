const chaiFlavours: string[] = ['masala', 'ginger', 'elaichi'];
const chaiPrice: number[] = [25, 25, 25];

const rating: Array<number> = [4.5, 5.0];
type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  {
    name: 'masala',
    price: 25,
  },
  {
    name: 'ginger',
    price: 25,
  },
  {
    name: 'elaichi',
    price: 25,
  },
];

// readonly array
const cities: readonly string[] = ['pune', 'mumbai', 'bangalore', 'delhi'];
// cities.push('hyderabad')// thisis an error

// multi dimensioanal arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuple - an array with fixed length and types of different types
let chai: [string, number, boolean] = ['ginger', 25, true];

// chai=[25,'ginger',true] //cannot do this because the order is fixed

let userinfo: [string, number, boolean?] = ['hitesh', 100]; // since boolean is optional we can either keep it or not
userinfo = ['hitesh', 20, true]; //here we have kept boolean , both ways don't return an error

const location: readonly [number, number] = [1, 2]; //this is a readonly tuple that cannot be changed

// named tuple
const chaiItems: [name: string, price: number] = ['ginger', 25]; //will get better suggestions while defining so this is a good practice

// we can  also define enums that will restrict the choices in our program wherever needed
enum ChaiFlavours {
  'masala',
  'ginger',
  'elaichi',
}
const myChai = ChaiFlavours.ginger;

// sometimes enums take/assign values automatically based on the previos assignment
enum status {
  PENDING = 100,
  SERVED, //this has been assigned the value=101 automatically
  DELIVERED, //this has been assigned the value=102 automatically
}
//  so this type of assignment id to be avoided to avoid mistakes

enum chaiType {
  MASALACHAI = 'masala',
  GINGERCHAI = 'ginger',
  ELAICHICHAI = 'elaichi',
}
function makechai(order: chaiType) {
  switch (order) {
    case chaiType.MASALACHAI: //this is how  we can access the data from the enum
      return `Masala chai`;
    case chaiType.GINGERCHAI:
      return `Ginger chai`;
    case chaiType.ELAICHICHAI:
      return `Elaichi chai`;
  }
}

// heterogenous value in enum - available but better not to use
enum RandomEnum {
  ID = 1,
  NAME = 'hitesh',
  // ISLOGGEDIN=true // this is an error because TS allows only number or string enum members
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars.HIGH;

let t: [string, number] = ['chai', 10];
t.push('extra'); //this is an unexpectd behaviour because we have added a string type to the tuple . this happened because end of the day , tuple is also an array , so this unexpected behaviour may cause bugs.
