// function makeChai(order:{type:string;sugar:number;strong:boolean}){
//     console.log(order);

// }

// function serveChai(order:{type:string;sugar:number;strong:boolean}){
//     console.log(order);

// }

// INSTEAD OF WRITING THE CODE THIS WAY WE CAN CREATE A TYPE AND USE IT IN BOTH THE CASES

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  //we just simply used chai type in both the functions
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}
type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

type CupSize = 'small' | 'large';

// class Chai implements CupSize{ //this is not allowed

// }

interface CupSize2 {
  size: 'small' | 'large';
}

class Chai implements CupSize2 {
  size: 'small' | 'large' = 'large';
}

// now again this following is an error
// type response={ok:true}|{ok:false}
// class myresponse implements response{
//     ok:boolean=true
// }

type teatype = 'masala' | 'ginger' | 'lemon'; //this is also called literal types

function orderchai(t: teatype) {
  console.log(t);
}

//INTERSECTION

type basechai = { tealeaves: number };
type extra = { masala: number };

type masalaChai = basechai & extra; //now this will contain both the properties
// now this must contain both the values
const cup: masalaChai = {
  tealeaves: 2,
  masala: 1,
};

type user = {
  username: string;
  bio?: string; //means this bio is optional , if exists it will be of strig type
};

const u1: user = {
  username: 'Krishma',
};

const u2: user = {
  username: 'nitin',
  bio: 'hitesh.ai',
};

type config = {
  readonly appname: string;
  version: number;
};

const cfg: config = {
  appname: 'masterji',
  version: 1,
};

// cfg.appname='chaicode' //thisis an error because we cannot change it once it is set .
