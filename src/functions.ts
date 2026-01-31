function makeChai(type: string, cups: number) {
  console.log('Making Chai');
}

makeChai('MaslaChai', 2); //this is the right types the function expects so it doe not throw any error

function getChaiPrice(): number {
  return 25;
}
function makeOrder(order: string) {
  if (!order) {
    return null;
  }
  return order;
}
// no return type here , so void
function logChai(): void {
  console.log('Chai is ready');
}
function orderChai(type?: string) {}
function orderChai2(type: string = 'Masala') {}

// little complex in first look
function createChai(order: { type: string; sugar: number; size: 'small' | 'large' }): number {
  return 4;
}
