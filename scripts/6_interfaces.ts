/**
 * We can use interfaces to define more complex types than the TypeScript basic types, like 'Car' below.
 * They're used in much the same way as basic types.
 *
 * Currently, cybertruck is not a valid instance of Car as it has an extra attribute. You'll need to update
 * the Car interface to add this as an optional attribute.
 */

interface Car {
  colour: string;
  make: string;
  model: string;
  automatic?: boolean; // ? means optional
}

const logCarInfo = (car: Car): void => {
  console.log(`This is a ${car.colour} ${car.make} ${car.model}.`)
}

const script = (): void => {
  const myCar: Car = {
    colour: 'green',
    make: 'Toyota',
    model: 'Corolla',
    automatic: true,
  }

  logCarInfo(myCar);

  const cybertruck: Car = {
    colour: 'silver',
    make: 'Tesla',
    model: 'Cybertruck',
    towingCapacity: 7500,
  }

  logCarInfo(cybertruck);
}
script();
