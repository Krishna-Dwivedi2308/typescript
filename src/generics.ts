// generics simply imply somethng general

// this will create a generic template
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray('masala');
wrapInArray(42);
wrapInArray({ flavour: 'ginger' });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  // return [b,a] // this is an error , order must be preserved
}

pair('masala', 20);
pair('masala', {});

// we can also create interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 10 }; //this cannot be '10'
const numberBox2: Box<string> = { content: '10' };

// Partial, Pick etc are also supported in generics

interface ApiPromise<T> {
  status: number;
  data: T;
}
const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: 'masala' },
};
