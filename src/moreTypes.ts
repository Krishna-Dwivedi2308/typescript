const response: any = '42';
// let numericLength:number=response.length//. length will not come as suggestion here
const numericLength: number = (response as string).length;

type Book = {
  name: string;
};
const bookString = '{"name":"who moved my cheese"}';
const bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);
const inputElement = document.getElementById('username') as HTMLInputElement;

let value: any;
value = [1, 2, 3];
value = 2.3;
value.toUpperCase();

let newvalue: unknown;
newvalue = [1, 2, 3];
newvalue = 2.3;
// newvalue.toUpperCase() //this is an error here because we have used unknown it does not allow such operations
if (typeof newvalue === 'string') newvalue.toUpperCase();

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log('Error', error);
}

const data: unknown = 'Chai aur Code';
const strdata: string = data as string;

type Role = 'admin' | 'user';
function redirectBasedonRole(role: Role): void {
  if (role == 'admin') {
    console.log('redirecting to admin dashboard');
    return;
  }

  if (role == 'user') {
    console.log('redirecting to admin dashboard');
    return;
  }
  role; //now this role is a never as far as new roles are not added because the existing ones are already handled
}

function neverReturn(): never {
  while (true) {}
}
