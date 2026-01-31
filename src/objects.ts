const chai = {
  name: 'chai',
  price: 100,
  isHot: true,
};
let tea: {
  name: string;
  price: number;
  isHot?: boolean;
};

tea = {
  name: 'ginger',
  price: 25,
  isHot: true,
};
// alias objects
type tea = {
  name: string;
  price: number;
  ingredients: string[];
  isHot?: boolean;
};
const adrakChai: tea = {
  name: 'adrak chai',
  price: 25,
  ingredients: ['ginger', 'cardamom'],
  isHot: true,
};

// duck typing
type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: '200ml',
};
let bigCup = {
  size: '500ml',
  material: 'stainless steel',
};
smallCup = bigCup;

type Brew = { brewTime: number };

const coffee = { brewTime: 2, beans: 'arabica' };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};
const user1: User = {
  username: 'Krishma',
  password: 'hitesh.ai',
};
const user2: User = {
  username: 'nitin',
  password: 'hitesh.ai',
};

// splitting out of data types
type Item = { name: string; price: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
  status: 'pending' | 'completed';
};

type Chai = {
  name: string;
  price: number;
  isHot?: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log('updating chai with ', updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({
  name: 'Masla Chai',
  quantity: 2,
});

type Chai2 = {
  name: string;
  price: number;
  ishot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, 'name' | 'price'>;
const chaiinfo: BasicChaiInfo = {
  name: 'Lemon',
  price: 30,
};
type ChaiNew = {
  name: string;
  price: number;
  ishot: boolean;
  sceretingredients: string;
};
type PublicChai = Omit<Chai, 'sceretingredients'>;
