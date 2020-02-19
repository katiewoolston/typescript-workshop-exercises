/**
 * new interfaces can be defined more concisely by extending from existing interfaces.
 *
 * Assuming we have a 'Car' type, we can create a new type as follows:
 *
 * interface FormulaOneCar extends Car {
 *   wins: number;
 * }
 *
 * An instance of FormulaOneCar has all the attributes of Car, plus 'wins'.
 *
 * Below, define an interface for a 'Milk' data type that extends 'Grocery'.
 *
 */

interface Grocery {
  price: number;
}

const getMilkTypeAndPrice = (milk: Milk): string =>
  `Is lite? ${milk.type === 'lite'}, Price: ${milk.price}`;

const run = (): void => {
  const milk: Grocery = {
    price: 3.50,
    type: 'full cream',
  }

  console.log(getMilkTypeAndPrice(milk));
}
run();
