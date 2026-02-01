// class chai{
//  flavour:string
//  price:number
// // making a constructor is mandatory o/w TS will throw an error

// // constructor(flavour:string,price:number){
// //     this.flavour=flavour
// //     this.price=price
// // }

// // can also be with one argument as well
// constructor( flavour:string){
//     this.flavour=flavour
// }
// }
// // const masalaChai = new chai('masala',25)
// const masalaChai=new chai('masala')
// masalaChai.flavour='masala'
// masalaChai.price=25

// access modifier
class chai {
  public flavour: string = 'masala'; //accessible outside the class
  private price: number = 25; //within the class accesible
  protected shopName = 'Chai Shop '; //accessible within the class and its subclasses
  reveal() {
    console.log(this.price); //this is ok , it is within the class
  }
}

const c = new chai();
c.reveal(); //now that private variable is accessible

class shop extends chai {
  getName() {
    return this.shopName; // protected is accessible here
  }
}

// also about private
class wallet {
  #balance = 1000; //now this is also a private variable , shortcut
  getBalance() {
    return this.#balance;
  }
}

const w = new wallet();
console.log(w.getBalance());

class cup {
  readonly capacity: number = 250; //readonly property
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class modernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }
  set sugar(sugar: number) {
    this._sugar = sugar;
  }
}
const m = new modernChai();
m.sugar = 3;
console.log(m.sugar);

class ekchai {
  static shopName = 'Chai Shop';
  constructor(public flavour: string) {
    this.flavour = flavour;
  }
}
console.log(ekchai.shopName);

abstract class drink {
  abstract make(): void;
}

class mychai extends drink {
  make() {
    //now this make methods must be present because it is an abstract class
    console.log('making chai');
  }
}

// composition
class heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: heater) {}
  makeChai() {
    this.heater.heat(); //now this heat function is available here also
  }
}
