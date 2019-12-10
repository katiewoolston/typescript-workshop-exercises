/**
 * Asynchronous functions always return a promise, so their return
 * type needs to be a promise.
 * This looks like:
 *    Promise<void> (if the function doesn't return anything)
 * or:
 *    Promise<number> (or whatever the type of the returned value is)
 *
 * Update the function definition of 'saveData' to set the return type
 * as a promise (instead of just a string)
 */

 // We emulate the behaviour of an API call by introducing a 200ms delay;
const saveData = async (data: string): string => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('saved data', data);
      resolve();
    }, 200)
  })
  return 'success';
}

export const script = (): void => {
  saveData('some information');
}
script();

