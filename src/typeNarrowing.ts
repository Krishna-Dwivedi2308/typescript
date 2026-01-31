// ------------------------
// TYPE NARROWING
// ------------------------
function getchai(kind: string | number) {
  if (typeof kind === 'string') {
    return `Making ${kind} chai`;
  }
  return `Making chai with ${kind} chai`;
}

function sreveChai(msg?: string) {
  if (msg) {
    return `Chai with ${msg}`;
  }
  return 'Chai is ready';
}

function orderrChai(size: 'medium' | 'small' | 'large' | number) {
  if (size === 'medium') {
    return 'medium chai is ready';
  }
  if (size === 'small') {
    return 'small chai is ready';
  }
  if (size === 'large') {
    return 'large chai is ready';
  }
  if (typeof size === 'number') {
    return `${size} sized chai is ready`;
  }
}

class kulhadChai {
  serve() {
    return 'kulhad chai is ready';
  }
}

class cutting {
  serve() {
    return 'cutting chai is ready';
  }
}

function serveChai(chai: kulhadChai | cutting) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
  milk: boolean;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj.type === 'string' &&
    obj != null &&
    typeof obj.sugar === 'number' &&
    typeof obj.milk === 'boolean'
  );
}

function serveOrder(order: ChaiOrder | string) {
  if (isChaiOrder(order)) {
    return `Order is ready for ${order.type} chai`;
  }
  return `Custom Order is ready for ${order}`;
}

type masalaChai = {
  typee: 'masala';
  spicelevel: number;
};
type gingerChai = {
  typee: 'ginger';
  gingerlevel: number;
};
type elaichiChai = {
  typee: 'elaichi';
  elaichilevel: number;
};

type chai = masalaChai | gingerChai | elaichiChai;

function makechai(order: chai) {
  switch (order.typee) {
    case 'masala':
      return `Masala chai with ${order.spicelevel} spice`;
    case 'ginger':
      return `Ginger chai with ${order.gingerlevel} ginger`;
    case 'elaichi':
      return `Elaichi chai with ${order.elaichilevel} elaichi`;
  }
}

function brew(order: masalaChai | gingerChai | elaichiChai) {
  if ('spicelevel' in order) {
    return `Masala chai with ${order.spicelevel} spice`;
  }
  if ('gingerlevel' in order) {
    return `Ginger chai with ${order.gingerlevel} ginger`;
  }
  if ('elaichilevel' in order) {
    return `Elaichi chai with ${order.elaichilevel} elaichi`;
  }
}

function isStringArray(arr: unknown): arr is string[] {
  return typeof arr === 'string';
}
