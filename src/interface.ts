// mostly similar to types but more used . in lot of cases can be used interchagably

// this interface is not just present in TS. This is also present in other languages like swift as well.
interface Chai {
  size: 'small' | 'large';
  price: number;
}

const masalaChai: Chai = {
  size: 'small',
  price: 25,
};
interface shop {
  readonly id: number;
  name: string;
}
const s: shop = {
  id: 1,
  name: 'Chaicode caffe',
};
interface discountCalculator {
  (price: number): number;
}

const apply50: discountCalculator = (p) => {
  return p * 0.5;
};
interface TeaMachine {
  start(price: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log('start');
  },
  stop() {
    console.log('stop');
  },
};

// index signature
interface ChaiRatings {
  [flavour: string]: number;
}
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};
interface user {
  name: string;
}
interface user {
  age: number;
}
const u: user = {
  //if we only give name , it will show age is missing until we aadd age also , this is imp because ;et us say we defined one variable first and as the codebase evolved , we want to add new variables then this method can be used , just define the variable in the same interface and then on every usage will have to satisfy the new variables also
  name: 'Hitesh',
  age: 25,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {} //this is also doing the same thing via a different format , by using extends
